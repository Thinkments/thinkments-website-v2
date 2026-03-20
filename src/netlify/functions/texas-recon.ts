import { Handler } from '@netlify/functions';
import * as cheerio from 'cheerio';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { targetUrl } = JSON.parse(event.body || '{}');

    if (!targetUrl) {
      return { statusCode: 400, body: JSON.stringify({ error: 'targetUrl is required' }) };
    }

    // Attempt to scrape the target domain for basic context
    let pageTitle = 'Unknown Website';
    let pageDescription = 'No description found';
    let h1 = 'No H1 found';
    
    try {
      // Ensure absolute URL
      const urlToFetch = targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`;
      const response = await fetch(urlToFetch, { 
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } 
      });
      
      if (response.ok) {
        const html = await response.text();
        const $ = cheerio.load(html);
        pageTitle = $('title').text().trim() || pageTitle;
        pageDescription = $('meta[name="description"]').attr('content')?.trim() || pageDescription;
        h1 = $('h1').first().text().trim() || h1;
      }
    } catch (scrapeErr) {
      console.warn('Failed to scrape target domain, falling back to pure generative insights', scrapeErr);
    }

    const domainClean = targetUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');

    const systemPrompt = `You are "The Texas Recon Agent", an aggressive, highly technical OSINT engine specializing in SEO warfare.
    Analyze the following competitor domain and the scraped metadata.
    Domain: ${domainClean}
    Title: ${pageTitle}
    Description: ${pageDescription}
    H1: ${h1}
    
    You must return a JSON object exactly matching this interface:
    {
      "domain": string,
      "domainAuthority": number (estimate between 10-85),
      "organicTraffic": string (e.g., "12,500/mo"),
      "paidSpend": string (e.g., "$5,400/mo"),
      "topKeyword": string,
      "vulnerabilities": [
        {
          "type": string (e.g. "Technical SEO", "Content Gap", "Backlink Profile"),
          "description": string (hostile analysis of weakness),
          "severity": "High" | "Medium" | "Low",
          "iconType": "AlertTriangle" | "ShieldAlert" | "Layout" | "TrendingDown"
        }
      ] (exactly 4 vulnerabilities),
      "attackVectors": [
        {
          "action": string (the exact hostile marketing strategy to deploy),
          "impact": "High" | "Medium" | "Low",
          "difficulty": "High" | "Medium" | "Low"
        }
      ] (exactly 3 vectors)
    }`;

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      // Graceful fallback for environments without an API key
      return {
        statusCode: 200,
        body: JSON.stringify({
          domain: domainClean,
          domainAuthority: 42,
          organicTraffic: "14,500/mo",
          paidSpend: "$8,200/mo",
          topKeyword: "Fallback Marketing Example",
          vulnerabilities: [
            { type: "Technical SEO", description: "[API KEY REQUIRED] Mobile page load time exceeds 4.2s. Core Web Vitals failing on CLS.", severity: "High", iconType: "AlertTriangle" },
            { type: "Content Gap", description: "[API KEY REQUIRED] Zero dedicated location pages for expanding suburbs.", severity: "Medium", iconType: "Layout" },
            { type: "Backlink Profile", description: "[API KEY REQUIRED] Heavy reliance on low-quality directory links.", severity: "High", iconType: "ShieldAlert" },
            { type: "Paid Over-Reliance", description: "[API KEY REQUIRED] Organic traffic represents only 15% of total lead volume.", severity: "Low", iconType: "TrendingDown" },
          ],
          attackVectors: [
            { action: "[API KEY REQUIRED] Deploy automated Programmatic SEO structure.", impact: "High", difficulty: "Medium" },
            { action: "[API KEY REQUIRED] Launch aggressive high-velocity Paid Ads targeted at their exact ad copy gaps.", impact: "High", difficulty: "Low" },
            { action: "[API KEY REQUIRED] Optimize technical core vitals to outrank them.", impact: "Medium", difficulty: "High" }
          ]
        })
      };
    }

    const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'system', content: systemPrompt }],
        temperature: 0.7,
        response_format: { type: 'json_object' }
      }),
    });

    if (!aiResponse.ok) {
      throw new Error('OpenAI API request failed');
    }

    const data = await aiResponse.json();
    const resultJson = JSON.parse(data.choices[0].message.content);

    return {
      statusCode: 200,
      body: JSON.stringify(resultJson),
    };

  } catch (error) {
    console.error('Texas Recon Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'OSINT failure' }),
    };
  }
};
