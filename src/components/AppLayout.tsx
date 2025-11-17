"use client";

import React, { useState } from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Sidebar from './Sidebar';
import NotificationsSheet from './NotificationsSheet';
import ProfileModal from './ProfileModal';
import SidebarItemModal from './SidebarItemModal';
import VideoControlModal from './VideoControlModal';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [activeSidebarItem, setActiveSidebarItem] = useState<string | null>(null);
  const [activeVideoControl, setActiveVideoControl] = useState<string | null>(null);

  const handleSidebarItemClick = (itemName: string) => {
    setIsSidebarOpen(false);
    setActiveSidebarItem(itemName);
  };

  const handleVideoControlClick = (controlName: string) => {
    setActiveVideoControl(controlName);
  };

  return (
    <div className="bg-background h-screen text-text-primary">
      <div className="relative h-full w-full md:max-w-[420px] md:mx-auto">
        <TopBar
          onMenuClick={() => setIsSidebarOpen(true)}
          onBellClick={() => setIsNotificationsOpen(true)}
          onProfileClick={() => setIsProfileModalOpen(true)}
        />
        <Sidebar
          open={isSidebarOpen}
          onOpenChange={setIsSidebarOpen}
          onItemClick={handleSidebarItemClick}
        />
        <NotificationsSheet
          open={isNotificationsOpen}
          onOpenChange={setIsNotificationsOpen}
        />
        <ProfileModal
          open={isProfileModalOpen}
          onOpenChange={setIsProfileModalOpen}
        />
        <SidebarItemModal
          open={!!activeSidebarItem}
          onOpenChange={() => setActiveSidebarItem(null)}
          itemName={activeSidebarItem}
        />
        <VideoControlModal
          open={!!activeVideoControl}
          onOpenChange={() => setActiveVideoControl(null)}
          controlName={activeVideoControl}
        />
        <main className="h-full overflow-y-auto pt-[56px] pb-[72px]">
          {children}
        </main>
        <BottomBar onControlClick={handleVideoControlClick} />
      </div>
    </div>
  );
}
