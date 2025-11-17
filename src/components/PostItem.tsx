'use client';

import { Box } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';

const PostItem = () => {
  return (
    <Box position="relative" width="100%" height="100%" bg="black">
      {/* Video player would go here */}
      <Box as="video"
        width="100%"
        height="100%"
        objectFit="cover"
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" // mock video
        autoPlay
        muted
        loop
      />

      <Sidebar />
      <BottomBar />
    </Box>
  );
};

export default PostItem;
