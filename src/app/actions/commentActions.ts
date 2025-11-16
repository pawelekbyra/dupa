'use server';

import { Comment } from '@/lib/types';

const mockComments: Comment[] = [
  {
    id: '1',
    text: 'This is the first comment!',
    user: { id: 'user1', name: 'John Doe', avatarUrl: 'https://github.com/shadcn.png' },
    replies: [
      {
        id: '3',
        text: 'This is a reply to the first comment.',
        user: { id: 'user2', name: 'Jane Smith', avatarUrl: 'https://github.com/shadcn.png' },
        replies: [],
        createdAt: new Date().toISOString(),
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    text: 'Great video, thanks for sharing.',
    user: { id: 'user3', name: 'Peter Jones', avatarUrl: 'https://github.com/shadcn.png' },
    replies: [],
    createdAt: new Date().toISOString(),
  },
];

export const getComments = async (slideId: string): Promise<Comment[]> => {
  console.log(`Fetching comments for slide ${slideId}...`);
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockComments;
};

export const addComment = async (formData: FormData) => {
  const commentText = formData.get('comment');
  console.log('New comment submitted:', commentText);
  // Here you would typically save the comment to the database
  return { success: true };
};
