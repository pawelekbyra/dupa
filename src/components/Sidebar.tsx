'use client';

import { Heart, MessageCircle, Send, Gift, UserCircle } from 'lucide-react';
import { useModalStore } from '@/lib/store';

const Sidebar = () => {
  const { openLoginModal, openTippingModal, openCommentsModal } = useModalStore();

  return (
    <div className="absolute top-1/2 right-2 -translate-y-1/2 flex flex-col items-center gap-4 text-white z-10">
      <button
        className="flex flex-col items-center gap-1"
        onClick={openLoginModal}
        data-testid="user-button"
      >
        <UserCircle size={40} />
      </button>
      <button className="flex flex-col items-center gap-1" data-testid="heart-button">
        <Heart size={32} />
        <span className="text-xs font-bold">1.2M</span>
      </button>
      <button
        className="flex flex-col items-center gap-1"
        onClick={openCommentsModal}
        data-testid="comments-button"
      >
        <MessageCircle size={32} />
        <span className="text-xs font-bold">12.3K</span>
      </button>
      <button
        className="flex flex-col items-center gap-1"
        onClick={openTippingModal}
        data-testid="tipping-button"
      >
        <Gift size={32} />
        <span className="text-xs font-bold">Tip</span>
      </button>
      <button className="flex flex-col items-center gap-1" data-testid="send-button">
        <Send size={32} />
        <span className="text-xs font-bold">Share</span>
      </button>
    </div>
  );
};

export default Sidebar;
