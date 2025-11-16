"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { slidesData } from "./data";
import Sidebar from "./components/Sidebar";
import { getUser } from "./actions/user"; // Importujemy nową funkcję

// Definicja typu dla użytkownika
interface User {
  id: string;
  username: string;
}

export default function Home() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const container = document.getElementById('webyx-container');
    if (container) {
      container.classList.add('ready');
    }

    // Sprawdź stan zalogowania użytkownika przy ładowaniu strony
    const fetchUser = async () => {
      const user = await getUser();
      if(user) {
        // Mapowanie obiektu użytkownika do oczekiwanego formatu
        setCurrentUser({ id: user.id, username: user.username });
      }
    };

    fetchUser();
  }, []);

  return (
    <main>
      <div id="webyx-container">
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
                <Sidebar videoId={slide.id} user={currentUser ? { userId: currentUser.id, userName: currentUser.username } : null} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
