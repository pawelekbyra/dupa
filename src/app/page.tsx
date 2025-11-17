"use client";

import AppFrame from "@/components/AppFrame";
import TippingModal from "@/components/TippingModal";
import FirstLoginModal from "@/components/FirstLoginModal";
import CommentsModal from "@/components/CommentsModal";
import { useState } from "react";

export default function Home() {
  const [isTippingModalVisible, setIsTippingModalVisible] = useState(false);
  const [isFirstLoginModalVisible, setIsFirstLoginModalVisible] = useState(false);
  const [isCommentsModalVisible, setIsCommentsModalVisible] = useState(false);

  const slideData = {
    author: {
      avatar: "https://via.placeholder.com/50",
    },
    stats: {
      likes: 123,
      comments: 45,
    },
    isLiked: false,
    authorName: "Test Author",
    slideTitle: "Test Slide",
    slideDescription: "This is a test slide description.",
  };

  return (
    <main className="w-full h-screen bg-primary">
      <AppFrame slideData={slideData} />
      <TippingModal isVisible={isTippingModalVisible} onClose={() => setIsTippingModalVisible(false)} />
      <FirstLoginModal isVisible={isFirstLoginModalVisible} onClose={() => setIsFirstLoginModalVisible(false)} />
      <CommentsModal isVisible={isCommentsModalVisible} onClose={() => setIsCommentsModalVisible(false)} />
    </main>
  );
}
