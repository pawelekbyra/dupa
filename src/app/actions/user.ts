"use server";

import { sql } from "@/lib/db";
import { users } from "@/lib/models/schema";
import { hash } from "bcryptjs";
import { drizzle } from "drizzle-orm/neon-http";
import { z } from "zod";

const SignUpSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(8),
});

export async function signUp(prevState: any, formData: FormData) {
  const parsed = SignUpSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { error: "Invalid form data" };
  }

  const { email, username, password } = parsed.data;

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
    return { error: "A user with this email or username already exists." };
  }
}
