"use client";

import React from 'react';
import { Post } from '@/lib/types';

interface PostItemProps {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
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
    </div>
  );
}
