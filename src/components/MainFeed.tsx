"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const MainFeed = () => {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-full"
    >
      <SwiperSlide>
        <div className="h-full w-full bg-red-500 flex items-center justify-center">
          <h1 className="text-white text-4xl">Slide 1</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full w-full bg-blue-500 flex items-center justify-center">
          <h1 className="text-white text-4xl">Slide 2</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full w-full bg-green-500 flex items-center justify-center">
          <h1 className="text-white text-4xl">Slide 3</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainFeed;
