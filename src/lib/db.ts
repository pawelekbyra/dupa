import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

let db: any;

if (process.env.MOCK_API === 'true') {
  db = {};
} else {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
  }

  const sql = neon(process.env.DATABASE_URL);
  db = drizzle(sql);
}

export { db };
