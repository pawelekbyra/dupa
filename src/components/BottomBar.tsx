'use client';

import { Box, Progress, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const BottomBar = () => {
  // Mock data
  const authorName = '@pawelele';
  const videoTitle = 'My first Ting Tong video!';
  const videoDescription =
    'This is a description of the video. It can be a bit longer and wrap to the next line.';
  const progress = 45; // mock progress in %

  return (
    <Box
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      p="4"
      pb="calc(1rem + env(safe-area-inset-bottom))"
      zIndex="docked"
      bgGradient="linear(to-t, blackAlpha.800, transparent)"
      color="white"
    >
      <Progress
        value={progress}
        size="xs"
        colorScheme="pink"
        mb="3"
        borderRadius="full"
      />
      <VStack align="start" spacing="1">
        <Text fontWeight="bold" fontSize="md">
          {authorName}
        </Text>
        <Text fontSize="sm">{videoTitle}</Text>
        <Text fontSize="xs" noOfLines={2}>
          {videoDescription}
        </Text>
      </VStack>
    </Box>
  );
};

export default BottomBar;
