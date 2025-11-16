export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Comment {
  id: string;
  text: string;
  user: User;
  replies: Comment[];
  createdAt: string;
}
