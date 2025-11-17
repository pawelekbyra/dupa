"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useStore } from "@/lib/store";

export default function PostItem({ slide }: { slide: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });
  const setCurrentPost = useStore((state) => state.setCurrentPost);

  useEffect(() => {
    if (isInView) {
      setCurrentPost(slide);
    }
  }, [isInView, slide, setCurrentPost]);

  return (
    <section ref={ref} className="h-screen flex-shrink-0 snap-start relative">
      <video
        className="player h-full w-full object-cover"
        src={slide.mp4Url}
        autoPlay
        muted
        loop
      />
    </section>
  );
}
