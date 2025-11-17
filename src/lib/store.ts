import { create } from 'zustand';
import { Comment, Post } from './types';

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

interface AppState {
  activeModal: string | null;
  currentPost: Post | null; // Można zdefiniować dokładniejszy typ
  setActiveModal: (modal: string | null) => void;
  setCurrentPost: (post: Post | null) => void;
}

export const useStore = create<AppState>((set) => ({
  activeModal: null,
  currentPost: null,
  setActiveModal: (modal) => set({ activeModal: modal }),
  setCurrentPost: (post) => set({ currentPost: post }),
}));
