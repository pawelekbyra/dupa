'use client';

import React from 'react';
import { Post } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="relative h-screen w-screen snap-start">
      {post.videoUrl && (
        <video
          src={post.videoUrl}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
        />
      )}
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      )}
      <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black/50 to-transparent w-full">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={post.author.avatar} />
            <AvatarFallback>{post.author.username.charAt(0)}</AvatarFallback>
          </Avatar>
          <p className="font-bold">{post.author.username}</p>
        </div>
        <h3 className="text-lg font-bold">{post.title}</h3>
        <p className="text-sm">{post.description}</p>
      </div>
    </div>
  );
};

export default PostItem;
