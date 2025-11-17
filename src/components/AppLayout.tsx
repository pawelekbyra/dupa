'use client';

import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import LoginModal from './modals/LoginModal';
import TippingModal from './modals/TippingModal';
import CommentsModal from './modals/CommentsModal';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    new Swiper('.swiper', {
      direction: 'vertical',
      loop: true,
    });
  }, []);

  return (
    <>
      <div className="swiper h-screen">
        <div className="swiper-wrapper">{children}</div>
      </div>
      <LoginModal />
      <TippingModal />
      <CommentsModal />
    </>
  );
};

export default AppLayout;
