import { Handler } from '@netlify/functions';

function extractSeoAndPerformance(html: string) {
  // Safe extraction without huge DOM parsing libraries
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
                    html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["'][^>]*>/i);
  const description = descMatch ? descMatch[1].trim() : '';

  const keywordsMatch = html.match(/<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']+)["'][^>]*>/i);
  const keywords = keywordsMatch ? keywordsMatch[1].trim() : '';

  const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["'][^>]*>/i);
  const robots = robotsMatch ? robotsMatch[1].trim() : 'Not set';

  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';

  const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i);
  const ogTitle = ogTitleMatch ? ogTitleMatch[1].trim() : '';

  const ogDescMatch = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i);
  const ogDescription = ogDescMatch ? ogDescMatch[1].trim() : '';

  const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i);
  const ogImage = ogImageMatch ? ogImageMatch[1].trim() : '';
  
  const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);

  // Structural Counts
  const imageCount = (html.match(/<img[^>]+>/gi) || []).length;
  const scriptCount = (html.match(/<script[^>]*>/gi) || []).length;
  const stylesheetCount = (html.match(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi) || []).length;

  // Accessibility checks
  const altTagsMissing = (html.match(/<img(?![^>]*\balt=)[^>]*>/gi) || []).length;
  const hasLang = /<html[^>]*lang=["'][^"']+["'][^>]*>/i.test(html);

  return {
    seo: {
      title,
      description,
      keywords,
      robots,
      canonical,
      ogTitle,
      ogDescription,
      ogImage,
      lang: hasLang ? 'Found' : 'Missing',
    },
    performance: {
      images: imageCount,
      scripts: scriptCount,
      stylesheets: stylesheetCount,
    },
    accessibility: {
      hasAltTags: altTagsMissing === 0 && imageCount > 0,
      hasHeadings: !!h1Match,
      hasLang: hasLang,
      colorContrast: true, // Assuming true for fallback backend
    }
  };
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const targetUrl = event.queryStringParameters?.url;
  if (!targetUrl) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required unencoded URL parameter "url"' })
    };
  }

  // Ensure fully qualified domain if relative path provided
  const absoluteUrl = targetUrl.startsWith('http') 
    ? targetUrl 
    : `https://thinkments.com${targetUrl.startsWith('/') ? '' : '/'}${targetUrl}`;

  const startTime = Date.now();

  try {
    const res = await fetch(absoluteUrl);
    const loadTime = Date.now() - startTime;
    
    if (!res.ok) {
        return {
           statusCode: 200, // Safe error fallback mapping for the frontend Inspector
           body: JSON.stringify({
              url: targetUrl,
              status: 'error',
              seo: {},
              performance: { loadTime },
              accessibility: { hasAltTags: false, hasHeadings: false, hasLang: false, colorContrast: false },
              errors: [`Target URL returned HTTP ${res.status}: ${res.statusText}`],
              warnings: [],
              suggestions: ['Check if the URL is published and accessible without authentication.']
           })
        };
    }

    const html = await res.text();
    const sizeKb = Math.round(html.length / 1024);
    
    const parsedData = extractSeoAndPerformance(html);
    const errors: string[] = [];
    const warnings: string[] = [];
    const suggestions: string[] = [];

    // Analyze Rules natively
    const seo = parsedData.seo;
    if (!seo.title || seo.title.length < 30) warnings.push('Title tag is missing or too short (recommended: 50-60 chars)');
    if (seo.title && seo.title.length > 60) warnings.push('Title tag is too long (recommended: 50-60 chars)');
    
    if (!seo.description || seo.description.length < 120) warnings.push('Meta description is too short (recommended: 150-160 chars)');
    if (seo.description && seo.description.length > 160) warnings.push('Meta description is too long (recommended: 150-160 chars)');

    if (!parsedData.accessibility.hasHeadings) errors.push('Page is missing an H1 tag. Critical for SEO structure.');
    if (!parsedData.accessibility.hasLang) warnings.push('Missing HTML lang attribute.');

    if (parsedData.performance.images > 20) suggestions.push('High image count detected. Ensure images are natively lazy-loaded.');

    const status = errors.length > 0 ? 'error' : (warnings.length > 0 ? 'warning' : 'success');

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: targetUrl,
        status: status,
        seo: parsedData.seo,
        performance: {
          loadTime,
          size: sizeKb,
          ...parsedData.performance
        },
        accessibility: parsedData.accessibility,
        errors,
        warnings,
        suggestions
      }),
    };

  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({
          url: targetUrl,
          status: 'error',
          seo: {},
          performance: { loadTime: Date.now() - startTime },
          accessibility: { hasAltTags: false, hasHeadings: false, hasLang: false, colorContrast: false },
          errors: ['Failed to fetch URL. Is the domain resolving properly?'],
          warnings: [],
          suggestions: []
      })
    };
  }
};
