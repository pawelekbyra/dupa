// src/components/SwiperProvider.tsx
'use client';

import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const SwiperProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    new Swiper('.swiper', {
      direction: 'vertical',
      loop: true,
    });

    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('preloader-hiding');
        setTimeout(() => {
          preloader.remove();
        }, 500);
      }
    }, 1000);
  }, []);

  return <>{children}</>;
};

export default SwiperProvider;
