'use client';

import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { Menu, Bell } from 'lucide-react';
import React from 'react';

const TopBar = () => {
  return (
    <Flex
      as="header"
      position="absolute"
      top="0"
      left="0"
      right="0"
      height="var(--topbar-height, 60px)" // fallback height
      alignItems="center"
      justifyContent="space-between"
      px="4"
      zIndex="overlay"
      bg="rgba(0,0,0,0.5)"
      pt="env(safe-area-inset-top)"
    >
      <IconButton
        aria-label="Menu"
        icon={<Menu />}
        variant="ghost"
        color="white"
        _hover={{ bg: 'whiteAlpha.300' }}
      />
      <Text color="white" fontWeight="bold">
        Ting Tong
      </Text>
      <IconButton
        aria-label="Notifications"
        icon={<Bell />}
        variant="ghost"
        color="white"
        _hover={{ bg: 'whiteAlpha.300' }}
      />
    </Flex>
  );
};

export default TopBar;
