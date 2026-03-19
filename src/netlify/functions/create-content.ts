import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const payload = JSON.parse(event.body || '{}');

    // In a production environment, this is where you'd connect to Supabase
    // e.g. await supabase.from('content').insert([{ ...payload }]);
    
    // For now, simulate a successful DB insertion
    console.log('Received payload for creation:', payload);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: `${payload.type || 'Content'} created successfully.`,
        data: {
          id: `content-${Date.now()}`,
          ...payload,
          createdAt: new Date().toISOString(),
        },
      }),
    };
  } catch (error) {
    console.error('Error creating content:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Failed to create content',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};

export { handler };
