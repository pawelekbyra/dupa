'use client';

import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import TopBar from './TopBar';
import CommentsModal from './CommentsModal';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      id="app-container"
      bg="black"
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        id="app-frame"
        position="relative"
        bg="black"
        height="100%"
        width="100%"
        overflow="hidden"
        sx={{
          '@media (min-width: 600px)': {
            height: '100vh',
            width: 'calc(100vh * 9 / 16)',
            maxWidth: '100%',
            border: '1px solid',
            borderColor: 'gray.700',
            boxShadow: '0 0 80px rgba(0, 0, 0, 0.6)',
          },
        }}
      >
        <TopBar />
        <main>{children}</main>
        <CommentsModal />
        {/* BottomBar can be part of the children or placed here */}
      </Box>
    </Box>
  );
};

export default AppLayout;
