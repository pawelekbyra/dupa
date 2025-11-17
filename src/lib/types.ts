// src/lib/types.ts
export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

export interface Post {
  id: string;
  author: string;
  authorAvatar: string;
  videoUrl: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
}
