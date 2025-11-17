'use client';

import { useContext, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import TopBar from '@/components/TopBar';
import Slide from '@/components/Slide';
import LoginPanel from '@/components/LoginPanel';
import NotificationsModal from '@/components/NotificationsModal';
import CommentsModal from '@/components/CommentsModal';
import { AppContext } from '@/components/AppProvider';

const MainFeed = () => {
  const { slides } = useContext(AppContext);

  useEffect(() => {
    if (slides.length > 0) {
      new Swiper('.swiper', {
        direction: 'vertical',
        loop: true,
      });
      const webyxContainer = document.getElementById('webyx-container');
      if (webyxContainer) {
        webyxContainer.classList.add('ready');
      }
    }
  }, [slides]);

  return (
    <div id="webyx-container" className="swiper">
      <div className="swiper-wrapper">
        {slides.map((slide) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  const { isPreloaderVisible, isLoginPanelVisible, isNotificationsModalVisible, toggleNotificationsModal, isCommentsModalVisible, toggleCommentsModal } = useContext(AppContext);

  return (
    <>
      {isPreloaderVisible && (
        <div id="preloader">
          <div className="preloader-icon-container">
            <img
              src="/jajk.png"
              alt="Logo aplikacji"
              className="splash-icon"
            />
          </div>
          <div className="preloader-content-container">
            <div className="language-selection">
              <h2>Wybierz Język / Select Language</h2>
              <div className="lang-buttons-container">
                <button data-lang="pl"><span>Polski</span></button>
                <button data-lang="en"><span>English</span></button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div id="app-frame" style={{ opacity: isPreloaderVisible ? 0 : 1 }}>
        <TopBar />
        {isLoginPanelVisible && <LoginPanel />}
        <MainFeed />
      </div>
      {isNotificationsModalVisible && <NotificationsModal onClose={toggleNotificationsModal} />}
      {isCommentsModalVisible && <CommentsModal onClose={toggleCommentsModal} />}
      <template id="slide-template">
        {/* Slide template will be cloned from here */}
      </template>
    </>
  );
}
