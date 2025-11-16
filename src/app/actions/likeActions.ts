'use server';

import { db } from '@/lib/db';
import { postLikes, posts } from '@/lib/models/schema';
import { and, eq, sql } from 'drizzle-orm';
import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export const toggleLike = async (postId: string) => {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, error: 'Unauthorized' };
  }
  const userId = parseInt(session.user.id);

  const existingLike = await db
    .select()
    .from(postLikes)
    .where(and(eq(postLikes.postId, postId), eq(postLikes.userId, userId)))
    .get();

  if (existingLike) {
    await db
      .delete(postLikes)
      .where(eq(postLikes.id, existingLike.id));
    await db
      .update(posts)
      .set({ likesCount: sql`${posts.likesCount} - 1` })
      .where(eq(posts.id, postId));
    revalidatePath('/');
    return { success: true, liked: false };
  } else {
    await db.insert(postLikes).values({ postId, userId });
    await db
      .update(posts)
      .set({ likesCount: sql`${posts.likesCount} + 1` })
      .where(eq(posts.id, postId));
    revalidatePath('/');
    return { success: true, liked: true };
  }
};
