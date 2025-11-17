"use client";

import React from 'react';
import TopBar from './TopBar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-black">
      <TopBar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
