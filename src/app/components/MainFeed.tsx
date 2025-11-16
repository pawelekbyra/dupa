'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import PostItem from './PostItem';
import { getPosts } from '@/app/actions/postActions';
import type { Post } from '@/lib/types';

const MainFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async () => {
    if (!hasMore) return;

    const { posts: newPosts, nextCursor } = await getPosts(cursor);
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setCursor(nextCursor);
    if (!nextCursor) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleReachEnd = () => {
    fetchPosts();
  };

  return (
    <Swiper
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      modules={[Mousewheel, Pagination]}
      className="h-screen"
      onReachEnd={handleReachEnd}
    >
      {posts.map((post) => (
        <SwiperSlide key={post.id}>
          <PostItem post={post} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainFeed;
