import { db } from '@/lib/db';
import { posts } from '@/lib/models/schema';
import MainFeed from '@/components/MainFeed';

export default async function Home() {
  const allPosts = await db.select({
    id: posts.id,
    userId: posts.userId,
    videoUrl: posts.videoUrl,
    imageUrl: posts.imageUrl,
    title: posts.title,
    description: posts.description,
    createdAt: posts.createdAt,
    updatedAt: posts.updatedAt,
    likesCount: posts.likesCount,
    commentsCount: posts.commentsCount,
    isPublished: posts.isPublished,
  }).from(posts).orderBy(posts.createdAt);

  return (
    <MainFeed posts={allPosts} />
  );
}
