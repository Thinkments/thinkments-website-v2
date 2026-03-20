import { Handler } from '@netlify/functions';
import fs from 'fs/promises';
import path from 'path';

interface FoundLink {
  sourceFile: string;
  url: string;
  text: string;
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const srcDir = path.join(process.cwd(), 'src');
    
    // Check if directory exists
    try {
      await fs.access(srcDir);
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: `Could not access src directory at ${srcDir}.`
        }),
      };
    }

    // Recursively find all .tsx and .jsx files
    const findFiles = async (dir: string): Promise<string[]> => {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      const files: string[] = [];
      for (const entry of entries) {
        // Skip node_modules or large build folders just in case
        if (entry.name === 'node_modules' || entry.name === 'dist') continue;
        
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          files.push(...(await findFiles(fullPath)));
        } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx'))) {
          files.push(fullPath);
        }
      }
      return files;
    };

    const targetFiles = await findFiles(srcDir);
    const allLinks: FoundLink[] = [];

    // Parse files for links
    for (const file of targetFiles) {
      const content = await fs.readFile(file, 'utf-8');
      const relativeSource = file.replace(srcDir, '').replace(/\\/g, '/');
      
      // Match href="/xyz" or to="/xyz" or href={'/xyz'} or to={'/xyz'}
      const linkRegex = /(?:href|to)=["'{`]+([^"'{`]+)["'}`]+/gi;
      let match;
      while ((match = linkRegex.exec(content)) !== null) {
        const rawUrl = match[1].trim();
        
        // Skip internal state '#' or React fragments
        if (rawUrl.startsWith('#') || rawUrl.startsWith('mailto:') || rawUrl.startsWith('tel:') || rawUrl === '' || rawUrl.includes('${')) {
          continue;
        }

        allLinks.push({
          sourceFile: relativeSource,
          url: rawUrl,
          text: 'Source Code Link'
        });
      }
    }

    console.log(`[Broken Links] Extracted ${allLinks.length} links from filesystem.`);

    // Deduplicate exact same links tested from exact same source page
    // Or just group by URL to save on fetch calls
    const uniqueLinksMap = new Map<string, FoundLink>();
    for (const link of allLinks) {
        if (!uniqueLinksMap.has(link.url)) {
            uniqueLinksMap.set(link.url, link);
        }
    }

    const uniqueLinks = Array.from(uniqueLinksMap.values());
    const MAX_CONCURRENT = 15;
    const limitedUrls = uniqueLinks.slice(0, MAX_CONCURRENT); // Artificially limit to avoid timeout on Netlify

    const checkPromises = limitedUrls.map(async (link) => {
        try {
            if (link.url.startsWith('http')) {
                // External Link - Use HTTP HEAD
                const ac = new AbortController();
                const timeoutId = setTimeout(() => ac.abort(), 5000);
                
                const headRes = await fetch(link.url, {
                    method: 'GET', // HEAD is blocked by many CDNs, GET is safer for checking availability
                    signal: ac.signal,
                    headers: { 'User-Agent': 'Mozilla/5.0 MACE SEO Bot' }
                });
                clearTimeout(timeoutId);
                return {
                    url: link.url,
                    sourceUrl: link.sourceFile,
                    status: headRes.status,
                    text: link.text,
                    ok: headRes.ok,
                    isInternal: false
                };
            } else {
                // Internal Link - Verify if the route could possibly correspond to a page component
                // e.g. /about => AboutPage.tsx or About.tsx
                // e.g. /services/web => WebServicePage.tsx or Web.tsx
                let ok = false;
                let status = 404;
                
                const segments = link.url.split('?')[0].split('/').filter(Boolean);
                const pageName = segments.length > 0 ? segments[segments.length - 1] : 'Home';
                const capName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
                
                // Very naive check: See if any file in our scanned list has this name roughly
                const possibleComponentNames = [
                    `${capName}.tsx`,
                    `${capName}Page.tsx`,
                    `${pageName.toLowerCase()}.tsx`,
                    'AdminPanel.tsx' // If it routes to admin
                ];
                
                // If it's the root '/' we assume it's OK
                if (link.url === '/' || link.url === '') {
                    ok = true;
                    status = 200;
                } else {
                    const matchesAnyFile = targetFiles.some(f => 
                        possibleComponentNames.some(p => f.includes(p))
                    );
                    
                    if (matchesAnyFile) {
                        ok = true;
                        status = 200;
                    }
                }

                return {
                    url: link.url,
                    sourceUrl: link.sourceFile,
                    status: status,
                    text: link.text,
                    ok: ok,
                    isInternal: true
                };
            }
        } catch (err) {
            return {
                url: link.url,
                sourceUrl: link.sourceFile,
                status: 0, // Network error
                text: link.text,
                ok: false,
                isInternal: !link.url.startsWith('http')
            };
        }
    });

    const results = await Promise.all(checkPromises);
    const brokenLinks = results.filter(r => !r.ok);

    const formattedPayload = brokenLinks.map((errLink, idx) => ({
      id: `err-${idx}-${Date.now()}`,
      sourceUrl: errLink.sourceUrl, // Where in the filesystem it was found
      brokenUrl: errLink.url,
      linkText: errLink.text,
      statusCode: errLink.status,
      firstFound: new Date().toISOString().split('T')[0],
      lastChecked: new Date().toISOString().split('T')[0],
      priority: errLink.status === 404 ? 'high' : 'medium',
      type: errLink.isInternal ? 'internal' : 'external',
      suggestedFix: errLink.isInternal ? '/' : undefined,
    }));

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        scannedCount: limitedUrls.length,
        brokenLinks: formattedPayload
      })
    };

  } catch (error) {
    console.error('[Broken Links Scanner Error]', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to scan filesystem for links.' })
    };
  }
};
