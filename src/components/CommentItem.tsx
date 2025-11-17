"use client";

import React from 'react';

export default function CommentItem() {
  return (
    <div className="flex gap-4">
      <img src="https://placehold.co/40x40" alt="Avatar" className="h-10 w-10 rounded-full" />
      <div className="flex flex-col">
        <p className="text-sm font-bold text-gray-400">@username</p>
        <p className="text-base">This is a comment.</p>
        <p className="text-xs text-gray-500">1h ago</p>
      </div>
    </div>
  );
}
