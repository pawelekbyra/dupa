
"use client";

import { useState } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";
import LoginModal from "./LoginModal";
import ShareModal from "./ShareModal";
import MoreOptionsModal from "./MoreOptionsModal";
import CommentsModal from "./CommentsModal";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isCommentsModalOpen, setCommentsModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [isMoreOptionsModalOpen, setMoreOptionsModalOpen] = useState(false);

  return (
    <div className="relative w-full h-screen bg-white">
      <TopBar onLoginClick={() => setLoginModalOpen(true)} />
      <main className="h-full pt-14">{children}</main>
      <Sidebar
        onCommentsClick={() => setCommentsModalOpen(true)}
        onShareClick={() => setShareModalOpen(true)}
        onMoreOptionsClick={() => setMoreOptionsModalOpen(true)}
      />
      <BottomBar />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
      <CommentsModal
        open={isCommentsModalOpen}
        onOpenChange={setCommentsModalOpen}
        slideId="1" // Hardcoded for now
      />
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />
      <MoreOptionsModal
        isOpen={isMoreOptionsModalOpen}
        onClose={() => setMoreOptionsModalOpen(false)}
      />
    </div>
  );
};

export default AppLayout;
