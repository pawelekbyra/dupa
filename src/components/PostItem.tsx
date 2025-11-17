"use client";

import React from 'react';
import { Post } from '@/lib/types';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';

interface PostItemProps {
  post: Post;
  onCommentClick: () => void;
}

export default function PostItem({ post, onCommentClick }: PostItemProps) {
  return (
    <div className="relative h-full w-full">
      {post.videoUrl && (
        <video
          src={post.videoUrl}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      <Sidebar onCommentClick={onCommentClick} />
      <BottomBar />
    </div>
  );
}
