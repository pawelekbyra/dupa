'use server';

import { db } from '@/lib/db';
import { comments, users } from '@/lib/models/schema';
import { Comment } from '@/lib/types';
import { eq } from 'drizzle-orm';
import { alias } from 'drizzle-orm/pg-core';

type CommentWithReplies = Comment & { user: { id: string; name: string; avatarUrl: string } };

async function fetchReplies(commentId: number): Promise<CommentWithReplies[]> {
  const replyComments = await db
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
    .where(eq(comments.parentId, commentId));

  const repliesWithNested = await Promise.all(
    replyComments.map(async (comment) => {
      const replies = await fetchReplies(comment.id);
      return { ...comment, replies };
    })
  );

  // @ts-ignore
  return repliesWithNested;
}

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
    .where(eq(comments.slideId, parseInt(slideId, 10)) && !comments.parentId);

  const commentsWithReplies = await Promise.all(
    topLevelComments.map(async (comment) => {
      const replies = await fetchReplies(comment.id);
      return { ...comment, replies };
    })
  );

  // @ts-ignore
  return commentsWithReplies;
};

export const addComment = async (formData: FormData) => {
  const commentText = formData.get('comment') as string;
  const slideId = formData.get('slideId') as string;
  const parentId = formData.get('parentId') as string | null;

  // TODO: Replace with actual user ID from session
  const userId = 1;

  if (!commentText || !slideId) {
    return { success: false, error: 'Missing required fields' };
  }

  await db.insert(comments).values({
    text: commentText,
    slideId: parseInt(slideId, 10),
    userId,
    parentId: parentId ? parseInt(parentId, 10) : null,
  });

  return { success: true };
};
