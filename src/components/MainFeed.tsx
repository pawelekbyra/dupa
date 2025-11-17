'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import { Post } from '@/lib/types';
import Sidebar from './layout/Sidebar';
import BottomBar from './layout/BottomBar';

interface MainFeedProps {
  posts: Post[];
}

const MainFeed: React.FC<MainFeedProps> = ({ posts }) => {
  return (
    <Swiper
      direction={'vertical'}
      slidesPerView={1}
      mousewheel={true}
      keyboard={{
        enabled: true,
      }}
      modules={[Mousewheel, Keyboard]}
      className="h-full"
    >
      {posts.map((post) => (
        <SwiperSlide key={post.id} className="relative bg-black">
          <video src={post.videoUrl!} className="h-full w-full object-cover" autoPlay loop muted />
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              <Sidebar />
              <BottomBar />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainFeed;
