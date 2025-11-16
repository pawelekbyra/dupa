'use server';

import { db } from '@/lib/db';
import { users } from '@/lib/models/schema';
import { eq } from 'drizzle-orm';
import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export const updateUserProfile = async (formData: FormData) => {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, error: 'Unauthorized' };
  }
  const userId = parseInt(session.user.id);

  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const username = formData.get('username') as string;
  const avatar = formData.get('avatar') as string;

  await db
    .update(users)
    .set({
      firstName,
      lastName,
      username,
      avatar,
    })
    .where(eq(users.id, userId));

  revalidatePath(`/profile/${userId}`);
  revalidatePath('/');

  return { success: true };
};
