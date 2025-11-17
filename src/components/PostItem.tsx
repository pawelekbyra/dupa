"use client";

import React, { useRef, useState } from 'react';

const PostItem = ({ post }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPress = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="webyx-section" style={{ display: 'block' }}>
      <div className="tiktok-symulacja">
        <video
          ref={videoRef}
          src={post.videoUrl}
          loop
          onClick={handleVideoPress}
          className="player"
        />
        <div className="pause-overlay" style={{ opacity: isPlaying ? 0 : 1 }}>
          {/* Pause Icon */}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
