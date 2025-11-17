"use client";

import React, { useState } from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Sidebar from './Sidebar';
import CommentsModal from './CommentsModal';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isCommentsOpen, setCommentsOpen] = useState(false);

  return (
    <div id="webyx-container" className="relative h-screen w-screen overflow-hidden bg-black">
      <div className="tiktok-symulacja h-full w-full">
        <TopBar />
        <main className="h-full w-full pt-16">{children}</main>
        <CommentsModal isOpen={isCommentsOpen} onOpenChange={setCommentsOpen} />
      </div>
    </div>
  );
}
