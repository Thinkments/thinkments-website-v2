import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { city, niche } = JSON.parse(event.body || '{}');

    if (!city || !niche) {
      return { statusCode: 400, body: JSON.stringify({ error: 'City and Niche are required' }) };
    }

    const systemPrompt = `You are "The Texas Cartographer", an AI agent that maps automated local programmatic SEO properties for marketing agencies.
    Generate a structural SEO mapping for the city: "${city}" and the niche: "${niche}".
    
    You must return a JSON object exactly matching this interface:
    {
      "city": "${city}",
      "niche": "${niche}",
      "url": string (e.g., "/dallas-plumbing-seo"),
      "healthScore": number (a realistic initial AI-assigned health score based on market saturation, 60-99),
      "metadata": {
        "suggestedTitle": string,
        "primaryKeyword": string,
        "difficulty": string (e.g., "High", "Medium", "Low")
      }
    }`;

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      // Graceful fallback
      return {
        statusCode: 200,
        body: JSON.stringify({
          city,
          niche,
          url: `/${city.toLowerCase().replace(/\s+/g, '-')}-${niche.toLowerCase().replace(/\s+/g, '-')}-fallback`,
          healthScore: 85,
          metadata: {
            suggestedTitle: `${niche} Services in ${city} [MOCK]`,
            primaryKeyword: `${niche} ${city}`,
            difficulty: "Medium"
          }
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
    console.error('Cartographer Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Programmatic mapping failure' }),
    };
  }
};
