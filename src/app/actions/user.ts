"use server";

import { sql } from "@/lib/db";
import { users } from "@/lib/models/schema";
import { hash } from "bcryptjs";
import { drizzle } from "drizzle-orm/neon-http";

export async function signUp(formData: FormData) {
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!email || !username || !password) {
    return { error: "Missing required fields" };
  }

  const passwordHash = await hash(password, 10);

  try {
    const db = drizzle(sql);
    await db
      .insert(users)
      .values({ email, username, passwordHash })
      .execute();
    return { success: true };
  } catch (error) {
    console.error("Error signing up:", error);
    return { error: "Error signing up" };
  }
}
