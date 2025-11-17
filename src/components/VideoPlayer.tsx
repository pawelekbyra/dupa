// src/components/VideoPlayer.tsx
import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="tiktok-symulacja">
      <video
        crossOrigin=""
        playsInline
        webkit-playsinline="true"
        muted
        autoPlay
        preload="auto"
        poster=""
        className="player"
      ></video>
      <div className="video-controls">
        <div className="video-controls-left">
          <button className="volume-button" data-action="toggle-volume">
            <svg className="volume-on-icon" style={{ display: 'none' }} fill="white" viewBox="0 0 24 24" width="28" height="28">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
            </svg>
            <svg className="volume-off-icon" fill="white" viewBox="0 0 24 24" width="28" height="28">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path>
            </svg>
          </button>
          <button className="cc-button" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 24 24" width="28" fill="#FFFFFF">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2v-.5H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2v-.5H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z" />
            </svg>
          </button>
          <button className="fullscreen-button" data-action="toggle-fullscreen">
            <svg className="fullscreen-enter-icon" viewBox="0 0 24 24" fill="white" width="28" height="28">
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path>
            </svg>
            <svg className="fullscreen-exit-icon" style={{ display: 'none' }} viewBox="0 0 24 24" fill="white" width="28" height="28">
              <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path>
            </svg>
          </button>
          <button className="info-button" data-action="open-info-modal">
            <svg className="info-icon-pulsing" fill="white" viewBox="0 0 24 24" width="28" height="28">
              <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="pause-overlay" aria-hidden="true">
        <svg className="pause-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <div className="replay-overlay" aria-hidden="true">
        <svg className="replay-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
        </svg>
      </div>
    </div>
  );
};

export default VideoPlayer;
