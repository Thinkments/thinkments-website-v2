import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const targetUrl = event.queryStringParameters?.url || 'https://thinkments.com';
  
  try {
    const res = await fetch(targetUrl);
    if (!res.ok) {
       return {
         statusCode: 400,
         body: JSON.stringify({ error: 'Primary domain provided is unreachable.' })
       };
    }

    const html = await res.text();
    
    // Naively extract all href links within <a> tags
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi;
    const linksMap = new Map<string, string>(); // url => text
    
    let match;
    while ((match = linkRegex.exec(html)) !== null) {
        let rawUrl = match[1].trim();
        const text = match[2].replace(/<[^>]+>/g, '').trim() || 'No Text Found';
        
        // Skip anchors, mailto, tel
        if (rawUrl.startsWith('#') || rawUrl.startsWith('mailto:') || rawUrl.startsWith('tel:')) continue;
        
        // Normalize relative URLs against the target domain
        if (rawUrl.startsWith('/')) {
            try {
               const baseURL = new URL(targetUrl);
               rawUrl = `${baseURL.protocol}//${baseURL.host}${rawUrl}`;
            } catch (e) { }
        }

        // Avoid checking identical URLs twice
        if (!linksMap.has(rawUrl)) {
            linksMap.set(rawUrl, text);
        }
    }

    const urlsToCheck = Array.from(linksMap.keys());
    console.log(`[Broken Links] Scanning ${urlsToCheck.length} unique links from ${targetUrl}`);

    // We do concurrent HEAD requests. We limit it artificially here so Netlify functions don't exhaust.
    // In production, an external queue system like SQS + Puppeteer would be superior.
    const MAX_CONCURRENT = 15;
    const limitedUrls = urlsToCheck.slice(0, MAX_CONCURRENT);

    const checkPromises = limitedUrls.map(async (urlToCheck) => {
        try {
            const headRes = await fetch(urlToCheck, {
                method: 'HEAD',
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) MACE SEO Bot' }
            });
            return {
                url: urlToCheck,
                status: headRes.status,
                text: linksMap.get(urlToCheck) || '',
                ok: headRes.ok
            };
        } catch (err) {
            return {
                url: urlToCheck,
                status: 0, // Network error or DNS failure
                text: linksMap.get(urlToCheck) || '',
                ok: false
            };
        }
    });

    const results = await Promise.all(checkPromises);
    const brokenLinks = results.filter(r => !r.ok);

    const formattedPayload = brokenLinks.map((errLink, idx) => ({
      id: `err-${idx}`,
      sourceUrl: targetUrl,
      brokenUrl: errLink.url,
      linkText: errLink.text,
      statusCode: errLink.status,
      firstFound: new Date().toISOString().split('T')[0],
      lastChecked: new Date().toISOString().split('T')[0],
      priority: errLink.status === 404 ? 'high' : 'medium',
      type: errLink.url.includes('thinkments.com') ? 'internal' : 'external',
      suggestedFix: errLink.url.includes('thinkments.com') ? '/' : undefined,
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
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to crawl domain.' })
    };
  }
};
