"use client";

import React, { useState } from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Sidebar from './Sidebar';
import LoginModal from './LoginModal';
import CommentsModal from './CommentsModal';
import { useStore } from '@/lib/store';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { activeModal, setActiveModal } = useStore();

  // Mock functions to toggle states
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);
  const openLoginModal = () => setActiveModal('login');
  const openCommentsModal = () => setActiveModal('comments');
  const closeModal = () => setActiveModal(null);

  return (
    <div className={`tiktok-symulacja ${isLoggedIn ? 'is-logged-in' : ''} video-loaded`}>
      <TopBar />
      <main>
        {children}
        <button onClick={openLoginModal} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          Open Login Modal
        </button>
        <button onClick={openCommentsModal} style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          Open Comments Modal
        </button>
      </main>
      <Sidebar />
      <BottomBar />
      <LoginModal isVisible={activeModal === 'login'} onClose={closeModal} />
      <CommentsModal isVisible={activeModal === 'comments'} onClose={closeModal} />
    </div>
  );
};

export default AppLayout;
