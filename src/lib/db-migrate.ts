import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const migrationClient = postgres(process.env.DATABASE_URL, { max: 1 });

async function main() {
  console.log('Running migrations...');
  await migrate(drizzle(migrationClient), { migrationsFolder: 'src/lib/migrations' });
  console.log('Migrations completed.');
  await migrationClient.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
