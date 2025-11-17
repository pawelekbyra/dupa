'use client';

import { Avatar, Box, IconButton, Text, VStack } from '@chakra-ui/react';
import { Heart, MessageCircle, Send, Gift } from 'lucide-react';
import React from 'react';
import { useStore } from '@/lib/store';

const Sidebar = () => {
  const { setActiveModal } = useStore();
  // Mock data for counters
  const likes = '1.2M';
  const comments = '4.5K';

  return (
    <VStack
      position="absolute"
      top="50%"
      right="10px"
      transform="translateY(-50%)"
      zIndex="docked"
      spacing={4}
      color="white"
    >
      <Box textAlign="center">
        <Avatar
          size="md"
          name="Author Name"
          src="https://bit.ly/dan-abramov" // mock avatar
          mb={1}
        />
      </Box>

      <Box textAlign="center">
        <IconButton
          aria-label="Like"
          icon={<Heart size="32px" />}
          variant="ghost"
          colorScheme="whiteAlpha"
          _hover={{ bg: 'whiteAlpha.300' }}
          isRound
        />
        <Text fontSize="sm" fontWeight="bold">
          {likes}
        </Text>
      </Box>

      <Box textAlign="center">
        <IconButton
          aria-label="Comment"
          icon={<MessageCircle size="32px" />}
          variant="ghost"
          colorScheme="whiteAlpha"
          _hover={{ bg: 'whiteAlpha.300' }}
          isRound
          onClick={() => setActiveModal('comments')}
        />
        <Text fontSize="sm" fontWeight="bold">
          {comments}
        </Text>
      </Box>

      <Box textAlign="center">
        <IconButton
          aria-label="Share"
          icon={<Send size="32px" />}
          variant="ghost"
          colorScheme="whiteAlpha"
          _hover={{ bg: 'whiteAlpha.300' }}
          isRound
        />
        <Text fontSize="sm" fontWeight="bold">
          Share
        </Text>
      </Box>

      <Box textAlign="center">
        <IconButton
          aria-label="Tip"
          icon={<Gift size="32px" />}
          variant="ghost"
          colorScheme="whiteAlpha"
          _hover={{ bg: 'whiteAlpha.300' }}
          isRound
        />
        <Text fontSize="sm" fontWeight="bold">
          Tip
        </Text>
      </Box>
    </VStack>
  );
};

export default Sidebar;
