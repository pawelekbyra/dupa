"use client";

import React from 'react';
import TopBar from './TopBar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      <TopBar />
      <main className="h-full w-full">
        {children}
      </main>
    </div>
  );
}
