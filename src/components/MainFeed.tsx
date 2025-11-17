"use client";

import React from 'react';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';
import { Post } from '@/lib/types';

interface MainFeedProps {
  posts: Post[];
}

export default function MainFeed({ posts }: MainFeedProps) {
  return (
    <div className="relative h-full w-full snap-start bg-gray-800">
      <div className="h-full w-full flex items-center justify-center">
        <h1 className="text-white text-2xl">
          Główny feed wideo
        </h1>
      </div>
      <Sidebar />
      <BottomBar />
    </div>
  );
}
