"use client";

import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { getPosts } from "@/app/actions/posts";

export default function MainFeed() {
  const [slides, setSlides] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await getPosts({});
      setSlides(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory">
      {slides.map((slide) => (
        <PostItem key={slide.id} slide={slide} />
      ))}
    </div>
  );
}
