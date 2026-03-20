import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { targetCity, industry } = JSON.parse(event.body || '{}');

    if (!targetCity) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Target City is required' }) };
    }

    const systemPrompt = `You are "The Prospector", an aggressive target acquisition bot scouting for vulnerable businesses to pitch marketing services to.
    Generate a realistic, highly vulnerable local lead in the city: "${targetCity}" and industry: "${industry || 'Any'}".
    
    You must return a JSON object exactly matching this interface:
    {
      "name": string (A realistic local business name),
      "city": "${targetCity}",
      "industry": string (A specific industry like "Dental", "Roofing", "HVAC"),
      "score": number (SEO health score, very low: 12-42),
      "revenueEst": string (e.g., "$1M-3M"),
      "issues": string[] (Array of exactly 3 critical marketing vulnerabilities, e.g. "Missing Meta Tags", "Weak Local Backlinks")
    }`;

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      // Graceful fallback
      return {
        statusCode: 200,
        body: JSON.stringify({
          name: `${targetCity} Elite [MOCK]`,
          city: targetCity,
          industry: industry || 'Home Services',
          score: 35,
          revenueEst: '$500k-1M',
          issues: ['Missing SSL', 'No Local Schema', 'Terrible Load Speed']
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
        temperature: 0.8,
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
    console.error('Prospector Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Acquisition scraping failure' }),
    };
  }
};
