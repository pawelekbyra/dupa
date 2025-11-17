import { create } from 'zustand';

interface UIState {
  isUserLoggedIn: boolean;
  currentLang: string;
  lastFocusedElement: HTMLElement | null;
  isSidebarOpen: boolean;
  isTippingModalOpen: boolean;
  isFirstLoginModalOpen: boolean;
  isAuthorProfileModalOpen: boolean;
  isCommentsModalOpen: boolean;

  login: () => void;
  logout: () => void;
  setLang: (lang: string) => void;
  setLastFocusedElement: (element: HTMLElement) => void;
  toggleSidebar: () => void;
  openTippingModal: () => void;
  closeTippingModal: () => void;
  openFirstLoginModal: () => void;
  closeFirstLoginModal: () => void;
  openAuthorProfileModal: () => void;
  closeAuthorProfileModal: () => void;
  openCommentsModal: () => void;
  closeCommentsModal: () => void;
}

const useUIStore = create<UIState>((set) => ({
  isUserLoggedIn: false,
  currentLang: 'pl',
  lastFocusedElement: null,
  isSidebarOpen: false,
  isTippingModalOpen: false,
  isFirstLoginModalOpen: false,
  isAuthorProfileModalOpen: false,
  isCommentsModalOpen: false,

  login: () => set({ isUserLoggedIn: true }),
  logout: () => set({ isUserLoggedIn: false }),
  setLang: (lang) => set({ currentLang: lang }),
  setLastFocusedElement: (element) => set({ lastFocusedElement: element }),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openTippingModal: () => set({ isTippingModalOpen: true }),
  closeTippingModal: () => set({ isTippingModalOpen: false }),
  openFirstLoginModal: () => set({ isFirstLoginModalOpen: true }),
  closeFirstLoginModal: () => set({ isFirstLoginModalOpen: false }),
  openAuthorProfileModal: () => set({ isAuthorProfileModalOpen: true }),
  closeAuthorProfileModal: () => set({ isAuthorProfileModalOpen: false }),
  openCommentsModal: () => set({ isCommentsModalOpen: true }),
  closeCommentsModal: () => set({ isCommentsModalOpen: false }),
}));

export default useUIStore;
