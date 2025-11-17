import { create } from 'zustand';

type StoreState = {
  isLoggedIn: boolean;
  activeModal: string | null;
  setActiveModal: (modal: string | null) => void;
  likeChanges: Record<string, { likes: number; isLiked: boolean }>;
  toggleLike: (slideId: string, initialLikes: number, initialIsLiked: boolean) => void;
};

export const useStore = create<StoreState>((set) => ({
  isLoggedIn: false,
  activeModal: null,
  setActiveModal: (modal) => set({ activeModal: modal }),
  likeChanges: {},
  toggleLike: (slideId, initialLikes, initialIsLiked) => {
    set((state) => {
      const currentLikeState = state.likeChanges[slideId] || { likes: initialLikes, isLiked: initialIsLiked };
      return {
        likeChanges: {
          ...state.likeChanges,
          [slideId]: {
            likes: currentLikeState.isLiked ? currentLikeState.likes - 1 : currentLikeState.likes + 1,
            isLiked: !currentLikeState.isLiked,
          },
        },
      };
    });
  },
}));
