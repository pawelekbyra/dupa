import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const runDrop = async () => {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is not set');
  }

  const sql = postgres(connectionString, { max: 1 });
  const db = drizzle(sql);

  console.log('Dropping all tables...');
  await sql.unsafe('DROP SCHEMA public CASCADE; CREATE SCHEMA public;');
  console.log('All tables dropped successfully!');
  process.exit(0);
};

runDrop().catch((err) => {
  console.error('Dropping tables failed:', err);
  process.exit(1);
});
