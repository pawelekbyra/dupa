"use client";

import React, { useEffect } from 'react';
import Preloader from './Preloader';
import { useTranslation } from '@/context/LanguageContext';
import TopBar from './TopBar';
import { useStore } from '@/store/useStore';
import { shallow } from 'zustand/shallow';
import CommentsModal from './CommentsModal';
import InfoModal from './InfoModal';
import AccountPanel from './AccountPanel';
import BottomBar from './BottomBar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { activeModal, setActiveModal } = useStore(
    (state) => ({
      activeModal: state.activeModal,
      setActiveModal: state.setActiveModal,
    }),
    shallow
  );

  useEffect(() => {
    const setAppHeight = () => {
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', setAppHeight);
    setAppHeight();

    return () => window.removeEventListener('resize', setAppHeight);
  }, []);

  return (
    <div className="flex h-full flex-col relative">
      <TopBar />
      <div className="flex-1 overflow-auto z-10">
        {children}
      </div>
      <BottomBar />
      {activeModal === 'comments' && <CommentsModal />}
      {activeModal === 'info' && <InfoModal />}
      {activeModal === 'account' && <AccountPanel />}
    </div>
  );
}
