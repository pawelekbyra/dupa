'use client';

import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import BottomBar from '@/components/BottomBar';

interface Slide {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  title: string;
  description: string;
  videoUrl: string;
  likes: string;
  comments: string;
}

interface PostItemProps {
  slide: Slide;
}

const PostItem: React.FC<PostItemProps> = ({ slide }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="tiktok-symulacja" onClick={togglePause}>
      <video
        ref={videoRef}
        className="player"
        src={slide.videoUrl}
        autoPlay
        loop
        muted
      ></video>
      <div className={`pause-overlay ${isPaused ? 'visible' : ''}`}>
        <svg className="pause-icon" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
        </svg>
      </div>
      <div className="video-controls">
        <button className="volume-button" onClick={toggleMute}>
          <svg className="volume-on-icon" viewBox="0 0 24 24" style={{ display: isMuted ? 'none' : 'block' }}>
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
          </svg>
          <svg className="volume-off-icon" viewBox="0 0 24 24" style={{ display: isMuted ? 'block' : 'none' }}>
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path>
          </svg>
        </button>
      </div>
      <Sidebar slide={slide} />
      <BottomBar slide={slide} />
    </div>
  );
};

export default PostItem;
