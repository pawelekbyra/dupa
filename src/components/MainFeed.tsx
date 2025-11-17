"use client";

import React, { useState } from 'react';
import PostItem from './PostItem';

const mockPosts = [
  {
    id: 1,
    author: '@author1',
    title: 'Post 1',
    description: 'Description for post 1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 123,
    comments: 45,
  },
  {
    id: 2,
    author: '@author2',
    title: 'Post 2',
    description: 'Description for post 2',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 678,
    comments: 90,
  },
];

const MainFeed = () => {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <div className="main-feed" style={{ display: 'block' }}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default MainFeed;
