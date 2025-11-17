'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  VStack,
  Text,
  Avatar,
  Input,
  IconButton,
} from '@chakra-ui/react';
import { Send } from 'lucide-react';
import React from 'react';
import { useStore } from '@/lib/store';

const MockComment = ({ name, text }: { name: string; text: string }) => (
  <Box display="flex" alignItems="start" gap={3} mb={4}>
    <Avatar name={name} size="sm" />
    <Box>
      <Text fontWeight="bold" fontSize="sm">
        {name}
      </Text>
      <Text fontSize="sm">{text}</Text>
    </Box>
  </Box>
);

const CommentsModal = () => {
  const { activeModal, setActiveModal } = useStore();
  const isOpen = activeModal === 'comments';
  const onClose = () => setActiveModal(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" size="full">
      <ModalOverlay />
      <ModalContent
        bg="gray.800"
        color="white"
        mt="auto"
        mb="0"
        borderTopRadius="20px"
        maxH="60vh"
      >
        <ModalCloseButton />
        <ModalHeader textAlign="center" borderBottomWidth="1px" borderColor="gray.700">
          Comments
        </ModalHeader>

        <ModalBody>
          <VStack spacing={4} align="stretch">
            <MockComment name="John Doe" text="This is an amazing video!" />
            <MockComment name="Jane Smith" text="I totally agree. Great content!" />
            <MockComment name="Peter Jones" text="Wow, just wow. 🤯" />
          </VStack>
        </ModalBody>

        <Box p={4} borderTopWidth="1px" borderColor="gray.700">
          <Box display="flex" gap={2}>
            <Input placeholder="Add a comment..." variant="filled" bg="gray.700" />
            <IconButton
              aria-label="Send comment"
              icon={<Send />}
              colorScheme="pink"
            />
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default CommentsModal;
