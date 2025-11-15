"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { slidesData } from "./data";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Sidebar from "./components/Sidebar";
import LoginPanel from "./components/LoginPanel";

export default function Home() {
    const [isLoginPanelActive, setLoginPanelActive] = useState(false);

    useEffect(() => {
        const container = document.getElementById('webyx-container');
        if (container) {
          container.classList.add('ready');
        }
      }, []);

    const toggleLoginPanel = () => {
        setLoginPanelActive(!isLoginPanelActive);
    };

  return (
    <main>
      <div id="webyx-container">
        <TopBar onToggleLogin={toggleLoginPanel} />
        <LoginPanel isActive={isLoginPanelActive} />
        <Swiper
            direction={"vertical"}
            className="h-full w-full"
            modules={[Mousewheel]}
            mousewheel
        >
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
