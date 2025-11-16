import { create } from 'zustand';
import { Comment } from './types';

interface CommentsState {
  comments: Comment[];
  replyingTo: string | null;
  setComments: (comments: Comment[]) => void;
  setReplyingTo: (commentId: string | null) => void;
}

export const useCommentsStore = create<CommentsState>((set) => ({
  comments: [],
  replyingTo: null,
  setComments: (comments) => set({ comments }),
  setReplyingTo: (commentId) => set({ replyingTo: commentId }),
}));
