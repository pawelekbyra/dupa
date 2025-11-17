"use client";

import React from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';
import LoginPanel from './LoginPanel';
import AccountModal from './AccountModal';
import { useStore } from '@/lib/store';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { activeModal, setActiveModal } = useStore();

  return (
    <div id="webyx-container" className="relative flex h-screen w-screen flex-col overflow-hidden bg-black">
      <TopBar />

      <main className="relative flex-grow">
        {children}
      </main>

      {/* Overlays */}
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
