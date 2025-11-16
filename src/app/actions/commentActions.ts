'use server';

import { db } from '@/lib/db';
import { comments, users } from '@/lib/models/schema';
import { Comment } from '@/lib/types';
import { and, eq, isNull } from 'drizzle-orm';

type CommentWithReplies = Comment & { user: { id: string; name: string; avatarUrl: string } };

export const getComments = async (slideId: string): Promise<CommentWithReplies[]> => {
  const topLevelComments = await db
    .select({
      id: comments.id,
      text: comments.text,
      createdAt: comments.createdAt,
      user: {
        id: users.id,
        name: users.username,
        avatarUrl: users.avatar,
      },
    })
    .from(comments)
    .leftJoin(users, eq(comments.userId, users.id))
    .where(eq(comments.slideId, slideId));

  // @ts-ignore
  return topLevelComments;
};

export const addComment = async (formData: FormData) => {
  const commentText = formData.get('comment') as string;
  const slideId = formData.get('slideId') as string;

  // TODO: Replace with actual user ID from session
  const userId = 1;

  if (!commentText || !slideId) {
    return { success: false, error: 'Missing required fields' };
  }

  await db.insert(comments).values({
    text: commentText,
    slideId: slideId,
    userId,
  });

  return { success: true };
};
