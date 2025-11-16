'use server';

import { db } from '@/lib/db';
import { comments, users } from '@/lib/models/schema';
import { Comment } from '@/lib/types';
import { and, eq, isNull } from 'drizzle-orm';
import { auth } from '@/lib/auth';

type CommentWithReplies = Comment & { user: { id: string; name: string; avatarUrl: string } };

export const getComments = async (postId: string): Promise<CommentWithReplies[]> => {
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
    .where(eq(comments.postId, postId));

  // @ts-ignore
  return topLevelComments;
};

export const addComment = async (formData: FormData) => {
  try {
    const session = await auth();
    if (!session.user?.id) {
        throw new Error("User ID not found in session.");
    }
    const userId = parseInt(session.user.id, 10);

    const commentText = formData.get('comment') as string;
    const postId = formData.get('postId') as string;

    if (!commentText || !postId) {
      return { success: false, error: 'Missing required fields' };
    }

    await db.insert(comments).values({
      text: commentText,
      postId: postId,
      userId,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Unauthorized: You must be logged in to comment.' };
  }
};
