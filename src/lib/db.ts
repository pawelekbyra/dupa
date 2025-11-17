import { neon } from '@neondatabase/serverless';
import { drizzle, NeonHttpDatabase } from 'drizzle-orm/neon-http';
import * as schema from './models/schema';

let db: NeonHttpDatabase<typeof schema>;

if (process.env.MOCK_API === 'true') {
  // W trybie MOCK_API, eksportujemy zmockowany obiekt, który
  // formalnie spełnia typ, ale jego metody rzucą błąd przy próbie użycia.
  // To zapobiega błędom w `page.tsx`, który nie powinien go używać w tym trybie.
  db = {} as NeonHttpDatabase<typeof schema>;
} else {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set for non-mock API');
  }
  const sql = neon(process.env.DATABASE_URL);
  db = drizzle(sql, { schema });
}

export { db };
