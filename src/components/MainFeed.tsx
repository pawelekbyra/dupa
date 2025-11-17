"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PostItem from './PostItem';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';
import { Post } from '@/lib/types';

interface MainFeedProps {
  posts: Post[];
}

export default function MainFeed({ posts }: MainFeedProps) {
  return (
    <Swiper
      direction="vertical"
      className="h-full"
    >
      {Array.isArray(posts) && posts.map((post) => (
        <SwiperSlide key={post.id} className="relative">
          <PostItem post={post} />
          <Sidebar />
          <BottomBar />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
