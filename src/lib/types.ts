import { posts, comments } from './models/schema';

export type Post = typeof posts.$inferSelect;
export type Comment = typeof comments.$inferSelect;

export type HtmlSlideData = {
  htmlContent: string;
};
