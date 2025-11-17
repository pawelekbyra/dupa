import { db } from '@/lib/db';
import { posts } from '@/lib/models/schema';
import MainFeed from '@/components/MainFeed';
import { Post } from '@/lib/types';

export default async function Home() {
  let allPosts: Post[] = [];

  if (process.env.MOCK_API !== 'true') {
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
  } else {
    // Add mock data for local development
    allPosts = [
      { id: '1', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', title: 'Mock Post 1', userId: 1, createdAt: new Date(), updatedAt: new Date(), type: 'public', isPublished: true, likesCount: 10, commentsCount: 5, imageUrl: null, description: 'Mock description' },
      { id: '2', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', title: 'Mock Post 2', userId: 1, createdAt: new Date(), updatedAt: new Date(), type: 'public', isPublished: true, likesCount: 20, commentsCount: 15, imageUrl: null, description: 'Mock description' },
    ];
  }

  return <MainFeed posts={allPosts} />;
}
