// Handler interface omitted to avoid type mismatches
const sitemapUrl = 'https://thinkments.com/sitemap-xml';

/**
 * Basic HTML parser to extract SEO tags via Regex since we don't 
 * want to install heavy dependencies like Cheerio in the serverless function.
 */
function extractSeoData(html: string, url: string) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
                    html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["'][^>]*>/i);
  const description = descMatch ? descMatch[1].trim() : '';

  const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].trim() : '';

  // Just grab the first few images
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const images: Array<{src: string, alt: string}> = [];
  let imgMatch;
  while ((imgMatch = imgRegex.exec(html)) !== null && images.length < 5) {
    const imgTag = imgMatch[0];
    const src = imgMatch[1];
    const altMatch = imgTag.match(/alt=["']([^"']*)["']/i);
    const alt = altMatch ? altMatch[1] : '';
    images.push({ src, alt });
  }

  const issues: string[] = [];
  let score = 100;

  if (!title) { issues.push('missing-title'); score -= 20; }
  else if (title.length > 60) { issues.push('title-too-long'); score -= 5; }
  else if (title.length < 30) { issues.push('title-too-short'); score -= 5; }

  if (!description) { issues.push('missing-description'); score -= 20; }
  else if (description.length > 160) { issues.push('description-too-long'); score -= 5; }

  if (!h1) { issues.push('missing-h1'); score -= 10; }

  return {
    url,
    title,
    description,
    h1,
    images,
    issues,
    score: Math.max(0, score)
  };
}

export const handler = async (event: { httpMethod: string; body: string | null }) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // 1. Fetch the sitemap to discover URLs (fallback to a hardcoded list to speed up demo)
    const presetUrls = [
      'https://thinkments.com',
      'https://thinkments.com/services/seo',
      'https://thinkments.com/about',
      'https://thinkments.com/contact'
    ];

    let urlsToScan = presetUrls;
    try {
      const sitemapRes = await fetch(sitemapUrl);
      if (sitemapRes.ok) {
        const sitemapText = await sitemapRes.text();
        const locMatches = Array.from(sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g));
        if (locMatches.length > 0) {
           urlsToScan = locMatches.map(m => m[1]).slice(0, 10); // Limit to 10 for serverless timeout
        }
      }
    } catch(err) {
      console.warn("Could not fetch sitemap, using fallback URLs", err);
    }

    // 2. Fetch the HTML for each URL and analyze it concurrently
    const scanPromises = urlsToScan.map(async (url) => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const html = await res.text();
        return extractSeoData(html, url);
      } catch (err) {
        console.error(`Failed to scan ${url}:`, err);
        return {
          url,
          title: '',
          description: '',
          h1: '',
          images: [],
          issues: ['fetch-failed'],
          score: 0
        };
      }
    });

    const results = await Promise.all(scanPromises);

    // 3. Transform the aggregated raw data into the formats needed by the UI
    let aggregateScore = 0;
    let issuesFound = 0;
    
    // Arrays for SEOBulkFixer
    const metaIssues: Record<string, unknown>[] = [];
    const titleIssues: Record<string, unknown>[] = [];
    const h1Issues: Record<string, unknown>[] = [];
    const imageIssues: Record<string, unknown>[] = [];
    
    // Array for SERPOptimizer
    const serpPages: Record<string, unknown>[] = [];

    results.forEach((data, index) => {
      aggregateScore += data.score;
      issuesFound += data.issues.length;
      
      const path = new URL(data.url).pathname;

      if (data.issues.includes('missing-description') || data.issues.includes('description-too-long')) {
        metaIssues.push({
          id: `meta-${index}`,
          pageTitle: data.title || path,
          url: path,
          current: data.description ? `${data.description.length} chars` : 'Missing',
          aiSuggestion: `AI suggests a ~150 char optimized description for ${path}`
        });
      }

      if (data.issues.includes('missing-title') || data.issues.includes('title-too-long') || data.issues.includes('title-too-short')) {
        titleIssues.push({
           id: `title-${index}`,
           pageTitle: data.title || 'Missing Title',
           url: path,
           current: data.title ? `${data.title.length} chars` : 'Missing',
           aiSuggestion: `AI suggests a ~55 char optimized title for ${path}`
        });
      }

      data.images.forEach((img, i) => {
         if (!img.alt) {
            imageIssues.push({
              id: `img-${index}-${i}`,
              fileName: img.src.split('/').pop() || 'image',
              url: img.src,
              page: path,
              aiSuggestion: `Descriptive alt text for image ${img.src.split('/').pop()}`
            });
         }
      });

      serpPages.push({
        id: `serp-${index}`,
        title: data.title || path,
        url: data.url,
        path: path,
        metaTitle: data.title,
        metaDescription: data.description,
        canonicalUrl: data.url,
        issues: data.issues.filter(i => i !== 'fetch-failed'),
        score: data.score,
        pageType: path === '/' ? 'main' : path.includes('/services') ? 'service' : 'main'
      });
    });

    const averageScore = results.length > 0 ? Math.round(aggregateScore / results.length) : 100;

    const finalPayload = {
      overview: {
        pagesScanned: results.length,
        issuesFound,
        seoScore: averageScore,
        quickFixCount: issuesFound
      },
      bulkFixerData: {
        metaIssues,
        titleIssues,
        h1Issues,
        imageIssues,
        thinContent: [],
        duplicates: []
      },
      serpData: {
        pages: serpPages,
        stats: {
          missingTitles: titleIssues.filter(i => i.current === 'Missing').length,
          missingDescriptions: metaIssues.filter(i => i.current === 'Missing').length,
          titlesTooLong: titleIssues.filter(i => i.current.includes('chars')).length,
        }
      }
    };

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(finalPayload)
    };

  } catch (error: unknown) {
    console.error('Scanner Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to run SEO scan' })
    };
  }
};
