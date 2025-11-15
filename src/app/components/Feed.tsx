"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { slidesData } from "../data";

const Feed = () => {
  return (
    <div className="h-screen w-screen">
      <Swiper direction={"vertical"} className="h-full w-full">
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-full w-full flex items-center justify-center bg-black">
              <video
                className="h-full w-full object-contain"
                src={slide.mp4Url}
                autoPlay
                muted
                loop
              />
              <div className="absolute bottom-10 left-4 text-white">
                <h2 className="text-lg font-bold">{slide.author.name}</h2>
                <p>{slide.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feed;
