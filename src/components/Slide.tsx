'use client';

import React, { useRef, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';

const Slide = ({ slide }: { slide: any }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  return (
    <div className="webyx-section swiper-slide" style={{ height: '100vh' }}>
      <div className="tiktok-symulacja video-loaded">
        <video
          ref={videoRef}
          src={slide.mp4Url}
          className="player"
          playsInline
          webkit-playsinline="true"
          muted
          autoPlay
          loop
        ></video>
        <Sidebar slide={slide} />
        <BottomBar slide={slide} progress={progress} />
      </div>
    </div>
  );
};

export default Slide;
