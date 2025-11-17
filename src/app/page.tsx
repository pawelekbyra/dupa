import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
import BottomBar from "@/components/BottomBar";
import TippingModal from "@/components/TippingModal";
import FirstLoginModal from "@/components/FirstLoginModal";
import AuthorProfileModal from "@/components/AuthorProfileModal";
import CommentsModal from "@/components/CommentsModal";

export default function Home() {
  return (
    <main style={{ height: "100vh" }}>
      <div id="app-frame">
        <div className="tiktok-symulacja video-loaded">
          <TopBar />
          <Sidebar />
          <BottomBar />
        </div>
      </div>
      <TippingModal />
      <FirstLoginModal />
      <AuthorProfileModal />
      <CommentsModal />
    </main>
  );
}
