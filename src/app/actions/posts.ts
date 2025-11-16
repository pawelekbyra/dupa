"use server";

import { slidesData } from "@/app/data";

export async function getPosts({
  cursor,
  limit = 10,
}: {
  cursor?: string;
  limit?: number;
}) {
  // W przyszłości tutaj będzie zapytanie Drizzle
  const posts = slidesData;
  const nextCursor = null;

  return { posts, nextCursor };
}
