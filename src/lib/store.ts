import { create } from 'zustand';

interface AppState {
  activeModal: string | null;
  currentPost: any | null; // Można zdefiniować dokładniejszy typ
  setActiveModal: (modal: string | null) => void;
  setCurrentPost: (post: any | null) => void;
}

export const useStore = create<AppState>((set) => ({
  activeModal: null,
  currentPost: null,
  setActiveModal: (modal) => set({ activeModal: modal }),
  setCurrentPost: (post) => set({ currentPost: post }),
}));
