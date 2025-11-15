"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { slidesData } from "./data";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Sidebar from "./components/Sidebar";

export default function Home() {
    useEffect(() => {
        const container = document.getElementById('webyx-container');
        if (container) {
          container.classList.add('ready');
        }
      }, []);

  return (
    <main>
      <div id="webyx-container">
        <TopBar />
        <Swiper direction={"vertical"} className="h-full w-full">
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id} className="webyx-section">
              <div className="tiktok-symulacja video-loaded">
                <video
                  className="player"
                  src={slide.mp4Url}
                  autoPlay
                  muted
                  loop
                />
                <BottomBar />
                <Sidebar />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
