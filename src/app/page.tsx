import { db } from '@/lib/db';
import { posts } from '@/lib/models/schema';
import MainFeed from '@/components/MainFeed';
import { slidesData } from './data';
import { Post } from '@/lib/types';

export default async function Home() {
  let allPosts: Post[];

  if (process.env.MOCK_API === 'true') {
    allPosts = slidesData.map(slide => ({
      id: slide.id,
      videoUrl: slide.mp4Url,
      likesCount: slide.likes,
      commentsCount: slide.comments,
      userId: 1,
      title: 'Mock Post',
      description: 'This is a mock post.',
      createdAt: new Date(),
      updatedAt: new Date(),
      isPublished: true,
      imageUrl: null,
      type: 'public',
    }));
  } else {
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
