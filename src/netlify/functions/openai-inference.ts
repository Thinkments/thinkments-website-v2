import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { systemPrompt, userMessage, jsonMode = false, isGpt4 = false } = JSON.parse(event.body || '{}');

    if (!userMessage) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required field: userMessage' }),
      };
    }

    const apiKey = process.env.OPENAI_API_KEY;

    // Safety fallback if API key is not configured
    if (!apiKey) {
      console.warn('OPENAI_API_KEY missing. Returning fallback data.');
      return handleFallback(systemPrompt);
    }

    const messages = [];
    if (systemPrompt) {
      messages.push({ role: 'system', content: systemPrompt });
    }
    messages.push({ role: 'user', content: userMessage });

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: isGpt4 ? 'gpt-4o' : 'gpt-4o-mini',
        messages: messages,
        temperature: 0.7,
        ...(jsonMode && { response_format: { type: 'json_object' } })
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenAI API Error:', errorData);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to communicate with OpenAI API', details: errorData }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        content: data.choices[0].message.content,
      }),
    };
  } catch (error) {
    console.error('Error generating inference:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

// Fallback utility handling missing API keys gracefully so frontend never breaks
function handleFallback(system: string) {
  let fallbackContent = '';

  // E-commerce Web Architect simulation format
  if (system.includes('HTML/CSS') || system.includes('e-commerce')) {
    fallbackContent = JSON.stringify({
      primaryColor: '#000000',
      secondaryColor: '#F3F4F6',
      font: 'Inter, sans-serif',
      heroTitle: 'Live API Offline',
      heroSubtitle: 'Please configure OPENAI_API_KEY in the .env file to generate live interfaces.'
    });
  } 
  // IP Board Member simulation format
  else if (system.includes('patent') || system.includes('legal')) {
    fallbackContent = JSON.stringify({
      summary: "This is a fallback response. The live OpenAI API is not configured.",
      patent: { recommended: false, reasoning: "Add OPENAI_API_KEY to enable functionality." },
      trademark: { recommended: false, reasoning: "Add OPENAI_API_KEY to enable functionality." },
      copyright: { recommended: false, reasoning: "Add OPENAI_API_KEY to enable functionality." }
    });
  } 
  // Empty raw text fallback
  else {
    fallbackContent = "API Key not configured. Simulated fallback active.";
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: false,
      isFallback: true,
      content: fallbackContent
    }),
  };
};

export { handler };
