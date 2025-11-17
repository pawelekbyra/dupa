"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PostItem from './PostItem';
import { Post } from '@/lib/types';
import { useStore } from '@/lib/store';

interface MainFeedProps {
  posts: Post[];
}

export default function MainFeed({ posts }: MainFeedProps) {
  const { setActiveModal } = useStore();

  return (
    <Swiper
      direction="vertical"
      className="h-full"
    >
      {Array.isArray(posts) && posts.map((post) => (
        <SwiperSlide key={post.id}>
          <PostItem post={post} onCommentClick={() => setActiveModal('comments')} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
