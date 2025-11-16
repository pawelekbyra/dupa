import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import { users, posts } from '../models/schema';
import bcrypt from 'bcryptjs';

dotenv.config({ path: '.env.local' });

const runSeed = async () => {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is not set');
  }

  const sql = postgres(connectionString, { max: 1 });
  const db = drizzle(sql);

  console.log('Seeding database...');

  // Create a user
  const hashedPassword = await bcrypt.hash('password123', 10);
  const [user] = await db
    .insert(users)
    .values({
      email: 'pawel.polutek@example.com',
      username: 'Paweł Polutek',
      passwordHash: hashedPassword,
      avatar: '/assets/img/avatar-pawel-polutek.png',
    })
    .returning();

  // Create posts
  await db.insert(posts).values([
    {
      userId: user.id,
      title: 'Big Buck Bunny',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description: 'Królik w akcji!',
    },
    {
      userId: user.id,
      title: 'Elephants Dream',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      description: 'Sen słonia, tylko dla zalogowanych.',
    },
    {
      userId: user.id,
      title: 'For Bigger Blazes',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      description: 'Tajemniczy film tylko dla użytkowników PWA.',
    },
    {
      userId: user.id,
      title: 'Are You Satisfied (Marina and the Diamonds cover)',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      description: 'Jedna z moich ulubionych piosenek w moim wykonaniu. Mam nadzieję, że się Wam spodoba!',
    },
  ]);

  console.log('Database seeded successfully!');
  process.exit(0);
};

runSeed().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
