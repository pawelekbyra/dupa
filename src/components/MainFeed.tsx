'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import PostItem from './PostItem';
import { Box } from '@chakra-ui/react';

const MainFeed = () => {
  return (
    <Box height="100%" width="100%">
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        style={{ height: '100%', width: '100%' }}
      >
        <SwiperSlide>
          <PostItem />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default MainFeed;
