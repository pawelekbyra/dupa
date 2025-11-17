import { comments, posts } from './models/schema';

export type Post = typeof posts.$inferSelect;
export type Comment = typeof comments.$inferSelect;
