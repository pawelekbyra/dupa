// src/app/page.tsx
import AppLayout from '@/components/AppLayout';
import TopBar from '@/components/TopBar';
import BottomBar from '@/components/BottomBar';
import Sidebar from '@/components/Sidebar';
import VideoPlayer from '@/components/VideoPlayer';
import Preloader from '@/components/Preloader';
import LoginPanel from '@/components/LoginPanel';
import LoggedInMenu from '@/components/LoggedInMenu';
import AlertBox from '@/components/AlertBox';
import { TippingModal, FirstLoginModal, AuthorProfileModal, CommentsModal, VideoPlayerModal, NotificationPopup, AccountModal, CropModal, PwaInstallBar, PwaIosInstructions, PwaDesktopModal, WelcomeModal, ImageLightbox, InfoModal } from '@/components/Modals';
import SwiperProvider from '@/components/SwiperProvider';
import { slidesData } from '@/lib/data';

export default function Home() {
  return (
    <SwiperProvider>
      <AppLayout>
        <Preloader />
        <div id="app-frame">
          <TopBar />
          <LoginPanel />
          <LoggedInMenu />
          <div id="webyx-container" className="swiper">
            <div className="swiper-wrapper">
              {slidesData.map((slide) => (
                <div className="webyx-section swiper-slide" key={slide.id}>
                  <VideoPlayer />
                  <Sidebar />
                  <BottomBar />
                </div>
              ))}
            </div>
          </div>
        </div>
        <AlertBox />
        <TippingModal />
        <FirstLoginModal />
        <AuthorProfileModal />
        <CommentsModal />
        <VideoPlayerModal />
        <NotificationPopup />
        <AccountModal />
        <CropModal />
        <PwaInstallBar />
        <PwaIosInstructions />
        <PwaDesktopModal />
        <WelcomeModal />
        <ImageLightbox />
        <InfoModal />
      </AppLayout>
    </SwiperProvider>
  );
}
