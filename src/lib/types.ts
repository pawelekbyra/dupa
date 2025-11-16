export interface User {
  id: string;
  username: string;
  avatar: string | null;
}

export interface Post {
  id: string;
  videoUrl: string | null;
  imageUrl: string | null;
  title: string;
  description: string | null;
  author: User;
  createdAt: Date;
  updatedAt: Date;
  likesCount: number | null;
  commentsCount: number | null;
  isPublished: boolean | null;
}

export interface Comment {
  id: string;
  text: string;
  user: User;
  replies: Comment[];
  createdAt: string;
}
