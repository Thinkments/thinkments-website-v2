import { Handler } from '@netlify/functions';
import fs from 'fs/promises';
import path from 'path';

export const handler: Handler = async (event) => {
  const { httpMethod, queryStringParameters, body } = event;
  const storeType = queryStringParameters?.type; // 'leads', 'clients', or 'media'

  if (!storeType || !['leads', 'clients', 'media'].includes(storeType)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid or missing type parameter. Must be leads, clients, or media.' }),
    };
  }

  try {
    // Resolve the data directory
    const tryPaths = [
      path.join(process.cwd(), 'src', 'data'),
      process.env.LAMBDA_TASK_ROOT ? path.join(process.env.LAMBDA_TASK_ROOT, 'src', 'data') : null,
      path.resolve(__dirname, '..', '..', '..', 'src', 'data')
    ].filter(Boolean) as string[];

    let targetDir = '';
    for (const p of tryPaths) {
      try {
        await fs.access(p);
        targetDir = p;
        break;
      } catch (e) {
        // keep trying
      }
    }

    if (!targetDir) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: `Could not access src/data directory.` }),
      };
    }

    const filePath = path.join(targetDir, `${storeType}.json`);
    
    // Ensure file exists
    try {
      await fs.access(filePath);
    } catch {
      await fs.writeFile(filePath, '[]', 'utf-8');
    }

    // --- GET: Read All ---
    if (httpMethod === 'GET') {
      const dbContent = await fs.readFile(filePath, 'utf-8');
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: dbContent,
      };
    }

    // --- POST: Insert New ---
    if (httpMethod === 'POST') {
      const payload = JSON.parse(body || '{}');
      const dbContent = await fs.readFile(filePath, 'utf-8');
      const records = JSON.parse(dbContent);
      
      const newRecord = { ...payload, id: Date.now().toString() };
      records.push(newRecord);
      
      await fs.writeFile(filePath, JSON.stringify(records, null, 2), 'utf-8');
      return {
        statusCode: 201,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecord),
      };
    }

    // --- PUT: Update Existing ---
    if (httpMethod === 'PUT') {
      const payload = JSON.parse(body || '{}');
      if (!payload.id) return { statusCode: 400, body: JSON.stringify({ error: 'Missing ID for update' }) };

      const dbContent = await fs.readFile(filePath, 'utf-8');
      const records = JSON.parse(dbContent);
      
      const idx = records.findIndex((r: any) => r.id === payload.id);
      if (idx === -1) {
        // If not found, insert
        records.push(payload);
      } else {
        records[idx] = { ...records[idx], ...payload };
      }
      
      await fs.writeFile(filePath, JSON.stringify(records, null, 2), 'utf-8');
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      };
    }

    // --- DELETE: Remove by ID ---
    if (httpMethod === 'DELETE') {
      const { id } = JSON.parse(body || '{}');
      if (!id) return { statusCode: 400, body: JSON.stringify({ error: 'Missing ID for delete' }) };

      const dbContent = await fs.readFile(filePath, 'utf-8');
      const records = JSON.parse(dbContent);
      
      const filtered = records.filter((r: any) => r.id !== id);
      
      await fs.writeFile(filePath, JSON.stringify(filtered, null, 2), 'utf-8');
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: true, deletedId: id }),
      };
    }

    return { statusCode: 405, body: 'Method Not Allowed' };

  } catch (error: any) {
    console.error(`[Ops Data API Error]`, error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to execute data operation', details: error.message }),
    };
  }
};
