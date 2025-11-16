'use server';

import { z } from 'zod';
import { db } from '@/lib/db';
import { posts, post_likes, users } from '@/lib/models/schema';
import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { and, desc, eq, sql } from 'drizzle-orm';
import { UTApi } from 'uploadthing/server';

const utapi = new UTApi();

const PostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  videoUrl: z.string().optional(),
  imageUrl: z.string().optional(),
});

export async function createPost(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: 'Not authenticated' };
  }

  const validatedFields = PostSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  const { title, description, videoUrl, imageUrl } = validatedFields.data;

  try {
    await db.insert(posts).values({
      userId: session.user.id,
      title,
      description,
      videoUrl,
      imageUrl,
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { error: 'Failed to create post' };
  }
}

export async function getPosts(cursor?: string, limit: number = 10) {
  const allPosts = await db
    .select({
      id: posts.id,
      videoUrl: posts.videoUrl,
      imageUrl: posts.imageUrl,
      title: posts.title,
      description: posts.description,
      createdAt: posts.createdAt,
      updatedAt: posts.updatedAt,
      likesCount: posts.likesCount,
      commentsCount: posts.commentsCount,
      isPublished: posts.isPublished,
      author: {
        id: users.id,
        username: users.username,
        avatar: users.avatar,
      },
    })
    .from(posts)
    .leftJoin(users, eq(posts.userId, users.id))
    .orderBy(desc(posts.createdAt))
    .limit(limit + 1) // Fetch one extra to determine if there's a next page
    .offset(cursor ? parseInt(cursor, 10) : 0);

  const nextCursor = allPosts.length > limit ? (cursor ? parseInt(cursor, 10) : 0) + limit : null;
  const postsData = allPosts.slice(0, limit);

  return { posts: postsData, nextCursor: nextCursor?.toString() || null };
}

export async function getPostById(id: string) {
  try {
    const [post] = await db.select().from(posts).where(eq(posts.id, id));
    return post;
  } catch (error) {
    return null;
  }
}

export async function deletePost(id: string) {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: 'Not authenticated' };
  }

  try {
    const [post] = await db.select().from(posts).where(eq(posts.id, id));
    if (!post || post.userId !== session.user.id) {
      return { error: 'Post not found or you are not the owner' };
    }

    await db.delete(posts).where(eq(posts.id, id));
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { error: 'Failed to delete post' };
  }
}

export async function likePost(postId: string) {
    const session = await auth();
    if (!session?.user?.id) {
        return { error: 'Not authenticated' };
    }

    const userId = session.user.id;

    try {
        const [existingLike] = await db
            .select()
            .from(post_likes)
            .where(and(eq(post_likes.postId, postId), eq(post_likes.userId, userId)));

        if (existingLike) {
            await db.delete(post_likes).where(eq(post_likes.id, existingLike.id));
            await db.update(posts).set({ likesCount: sql`${posts.likesCount} - 1` }).where(eq(posts.id, postId));
        } else {
            await db.insert(post_likes).values({ postId, userId });
            await db.update(posts).set({ likesCount: sql`${posts.likesCount} + 1` }).where(eq(posts.id, postId));
        }

        revalidatePath('/');
        return { success: true };
    } catch (error) {
        return { error: 'Failed to like post' };
    }
}
