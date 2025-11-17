'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { slidesData } from '@/lib/data';
import PostItem from '@/components/PostItem';

const MainFeed = () => {
  return (
    <Swiper
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="tiktok-symulacja"
    >
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <PostItem slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainFeed;
