"use client";

import { useState } from "react";
import clsx from "clsx";

type SidebarProps = {
  author: {
    avatar: string;
  };
  stats: {
    likes: number;
    comments: number;
  };
  isLiked: boolean;
};

const Sidebar = ({ author, stats, isLiked: initialIsLiked }: SidebarProps) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likes, setLikes] = useState(stats.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleComments = () => {
    // Logic to open comments modal
  };

  const handleShare = () => {
    // Logic to share
  };

  const handleTip = () => {
    // Logic to open tipping modal
  };

  return (
    <div
      className={clsx(
        "sidebar",
        "absolute top-1/2 right-1 transform -translate-y-1/2 flex flex-col items-center gap-2 z-[10052]"
      )}
    >
      <div className="relative w-12 h-12 mb-1.5">
        <button
          className="w-full h-full rounded-full bg-none border-none p-0 cursor-pointer block"
          aria-label="Profil autora"
        >
          <img
            src={author.avatar}
            alt="Profil"
            loading="lazy"
            decoding="async"
            className="w-full h-full rounded-full border-2 border-black block bg-white"
          />
        </button>
        <div
          className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-5 h-5 bg-accent text-white border-2 border-black rounded-full flex items-center justify-center font-bold text-lg leading-none"
          aria-hidden="true"
        >
          +
        </div>
      </div>
      <button
        className={`bg-none border-none font-inherit text-inherit flex flex-col items-center cursor-pointer text-xs gap-0.5 transition-transform duration-200 ${
          isLiked ? "text-accent" : ""
        }`}
        aria-label="Polub"
        aria-pressed={isLiked}
        onClick={handleLike}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-8 h-8 stroke-white stroke-[1.5] transition-colors duration-200"
          fill={isLiked ? "currentColor" : "none"}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <div className="text-center leading-tight text-white">{likes}</div>
      </button>
      <button
        className="bg-none border-none font-inherit text-inherit flex flex-col items-center cursor-pointer text-xs gap-0.5"
        aria-label="Komentarze"
        onClick={handleComments}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-8 h-8 stroke-white stroke-[1.5] fill-none"
        >
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
        <div className="text-center leading-tight text-white">
          {stats.comments}
        </div>
      </button>
      <button
        className="bg-none border-none font-inherit text-inherit flex flex-col items-center cursor-pointer text-xs gap-0.5"
        aria-label="Szeruj"
        onClick={handleShare}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-8 h-8 stroke-white stroke-[1.5] fill-none"
        >
          <path d="M15 5l6 6-6 6M21 11H9a6 6 0 0 0-6 6" />
        </svg>
        <div className="text-center leading-tight text-white">Szeruj</div>
      </button>
      <button
        className="bg-none border-none font-inherit text-inherit flex flex-col items-center cursor-pointer text-xs gap-0.5"
        aria-label="Napiwek"
        onClick={handleTip}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-8 h-8 stroke-white stroke-[1.5] fill-none"
        >
          <rect x="2" y="7" width="20" height="12" rx="2" ry="2" />
          <path d="M2 10h20" />
          <circle cx="18" cy="13" r="2" />
        </svg>
        <div className="text-center leading-tight text-white">Napiwek</div>
      </button>
    </div>
  );
};

export default Sidebar;
