import { Handler } from '@netlify/functions';
import fs from 'fs/promises';
import path from 'path';

interface PageIssue {
  id: string;
  url: string;
  title: string;
  type: 'missing-images' | 'placeholder-text' | 'incomplete-seo' | 'broken-layout';
  severity: 'high' | 'medium' | 'low';
  description: string;
  foundAt: string;
  status: 'open' | 'logged';
}

export const handler: Handler = async (event, _context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const issues: PageIssue[] = [];
    
    // Resolve path to the pages directory
    // We try multiple paths since Netlify local dev vs AWS Lambda have different root contexts
    const tryPaths = [
      path.join(process.cwd(), 'src', 'components', 'pages'),
      process.env.LAMBDA_TASK_ROOT ? path.join(process.env.LAMBDA_TASK_ROOT, 'src', 'components', 'pages') : null,
      path.resolve(__dirname, '..', '..', '..', 'src', 'components', 'pages')
    ].filter(Boolean) as string[];

    let pagesDir = '';
    for (const p of tryPaths) {
      try {
        await fs.access(p);
        pagesDir = p;
        break;
      } catch (e) {
        // Ignore and try next path
      }
    }

    if (!pagesDir) {
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: `Could not access pages directory.`,
          details: `Searched in: ${tryPaths.join(', ')}`
        }),
      };
    }

    // Recursively find all .tsx and .jsx files
    const findFiles = async (dir: string): Promise<string[]> => {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      const files: string[] = [];
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          files.push(...(await findFiles(fullPath)));
        } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx'))) {
          files.push(fullPath);
        }
      }
      return files;
    };

    const files = await findFiles(pagesDir);
    
    // Scan each file
    for (const file of files) {
      const content = await fs.readFile(file, 'utf-8');
      const fileName = path.basename(file, path.extname(file));
      const routeUrl = '/' + fileName.replace(/Page$/, '').toLowerCase();
      
      // Determine a friendly title
      const title = fileName.replace(/([A-Z])/g, ' $1').trim();

      // Ensure we have a clean ID generator
      let issueCounter = 1;
      const generateId = () => `issue-${fileName.toLowerCase()}-${issueCounter++}-${Date.now()}`;

      // Check 1: Missing Images / Placeholders
      const placeholderRegex = /{\s*\/\*.*?(?:placeholder|image(s)? removed|mockup).*?\*\/\s*}/i;
      if (placeholderRegex.test(content)) {
        issues.push({
          id: generateId(),
          url: routeUrl,
          title: title,
          type: 'missing-images',
          severity: 'high',
          description: 'Found generic placeholders indicating removed or missing images.',
          foundAt: new Date().toISOString(),
          status: 'open'
        });
      }

      // Check 2: Lorem Ipsum
      const loremRegex = /lorem ipsum/i;
      if (loremRegex.test(content)) {
        issues.push({
          id: generateId(),
          url: routeUrl,
          title: title,
          type: 'placeholder-text',
          severity: 'medium',
          description: 'Found "Lorem Ipsum" filler text.',
          foundAt: new Date().toISOString(),
          status: 'open'
        });
      }

      // Check 3: TODOs
      const todoRegex = /\b(?:todo|fixme)\b/i;
      if (todoRegex.test(content)) {
        issues.push({
          id: generateId(),
          url: routeUrl,
          title: title,
          type: 'broken-layout',
          severity: 'low',
          description: 'Found TODO or FIXME comments in the code.',
          foundAt: new Date().toISOString(),
          status: 'open'
        });
      }

      // Check 4: Incomplete SEO
      // Most of our pages import SEO, so let's flag if they don't have it
      const hasSeoImport = /import\s+.*?SEO.*?\s+from/i.test(content);
      const hasSeoTag = /<SEO[\s\S]*?>/i.test(content);
      if (!hasSeoImport || !hasSeoTag) {
        issues.push({
          id: generateId(),
          url: routeUrl,
          title: title,
          type: 'incomplete-seo',
          severity: 'medium',
          description: 'Missing <SEO /> component or import.',
          foundAt: new Date().toISOString(),
          status: 'open'
        });
      }
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ issues, totalPages: files.length }),
    };

  } catch (error) {
    console.error('Scan Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
