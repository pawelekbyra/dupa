'use client';

import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

const slidesData = [
  {
    id: 'slide-001',
    author: {
      name: 'Paweł',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    title: 'Ting Tong',
    description: 'Aplikacja napiwkowa do skrolowania wideo',
    mp4Url: 'https://pawelperfect.pl/wp-content/uploads/2024/04/start.mp4',
    access: 'public',
    initialLikes: 123,
    initialComments: 45,
    likeId: 'post_1',
    isLiked: false,
  },
  // Add more slides here
];

const MainFeed = () => {
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper', {
      direction: 'vertical',
      loop: true,
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <div className="swiper" id="main-feed">
      <div className="swiper-wrapper">
        {slidesData.map((slide) => (
          <div className="swiper-slide" key={slide.id}>
            <video src={slide.mp4Url} playsInline webkit-playsinline="true" muted autoPlay preload="auto" className="player"></video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainFeed;
