'use client';

import React from 'react';
import TopBar from '@/components/TopBar';
import MainFeed from '@/components/MainFeed';

const AppLayout = () => {
  return (
    <div id="webyx-container">
      <div id="app-frame">
        <TopBar />
        <main>
          <MainFeed />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
