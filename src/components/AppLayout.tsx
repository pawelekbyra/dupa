"use client";

import React from 'react';
import TopBar from './TopBar';
import LoginPanel from './LoginPanel';
import AccountModal from './AccountModal';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';
import { useStore } from '@/lib/store';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { activeModal, setActiveModal } = useStore();

  return (
    <div id="webyx-container" className="relative flex h-screen w-screen flex-col overflow-hidden bg-black">
      {/* TopBar będzie teraz częścią normalnego przepływu */}
      <TopBar />

      {/* Main content zajmie pozostałą przestrzeń */}
      <main className="relative flex-grow">
        {children}
      </main>

      <Sidebar />
      <BottomBar />

      <LoginPanel
        open={activeModal === 'login'}
        onOpenChange={(open) => !open && setActiveModal(null)}
      />

      <AccountModal
        open={activeModal === 'account'}
        onOpenChange={(open) => !open && setActiveModal(null)}
      />
    </div>
  );
}
