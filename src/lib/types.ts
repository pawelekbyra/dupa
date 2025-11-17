import { posts } from './models/schema';

export type Post = typeof posts.$inferSelect;
