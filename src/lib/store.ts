import { create } from 'zustand';

type ModalState = {
  isLoginModalOpen: boolean;
  isTippingModalOpen: boolean;
  isCommentsModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openTippingModal: () => void;
  closeTippingModal: () => void;
  openCommentsModal: () => void;
  closeCommentsModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isLoginModalOpen: false,
  isTippingModalOpen: false,
  isCommentsModalOpen: false,
  openLoginModal: () => set({ isLoginModalOpen: true }),
  closeLoginModal: () => set({ isLoginModalOpen: false }),
  openTippingModal: () => set({ isTippingModalOpen: true }),
  closeTippingModal: () => set({ isTippingModalOpen: false }),
  openCommentsModal: () => set({ isCommentsModalOpen: true }),
  closeCommentsModal: () => set({ isCommentsModalOpen: false }),
}));
