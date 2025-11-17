import { db } from '@/lib/db';
import { posts } from '@/lib/models/schema';
import MainFeed from '@/components/MainFeed';
import { slidesData } from './data';
import { Post } from '@/lib/types';

export default async function Home() {
  let allPosts: Post[];

  if (process.env.MOCK_API === 'true') {
    // Użyj danych-zaślepek i dostosuj je do typu Post
    allPosts = slidesData.map(slide => ({
      id: slide.id,
      userId: parseInt(slide.id), // Fake user ID
      videoUrl: slide.mp4Url,
      imageUrl: null,
      title: `Mock Post ${slide.id}`,
      description: 'This is a mock description.',
      createdAt: new Date(),
      updatedAt: new Date(),
      likesCount: slide.likes,
      commentsCount: slide.comments,
      isPublished: true,
      type: 'public',
    }));
  } else {
    // Użyj prawdziwej bazy danych
    allPosts = await db.select({
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
      type: posts.type,
    }).from(posts).orderBy(posts.createdAt);
  }

  return (
    <MainFeed posts={allPosts} />
  );
}
