import React from "react";
import { Heart, MessageCircle, Send, UserCircle } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="absolute top-1/2 right-4 z-10 flex -translate-y-1/2 flex-col gap-4">
      <button className="flex flex-col items-center text-white">
        <UserCircle size={32} />
        <span className="text-xs">Profile</span>
      </button>
      <button className="flex flex-col items-center text-white">
        <Heart size={32} />
        <span className="text-xs">Like</span>
      </button>
      <button className="flex flex-col items-center text-white">
        <MessageCircle size={32} />
        <span className="text-xs">Comment</span>
      </button>
      <button className="flex flex-col items-center text-white">
        <Send size={32} />
        <span className="text-xs">Tip</span>
      </button>
    </aside>
  );
};

export default Sidebar;
