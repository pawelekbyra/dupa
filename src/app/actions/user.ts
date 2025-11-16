"use server";

import { sql } from "@/lib/db";
import { users } from "@/lib/models/schema";
import { compare, hash } from "bcryptjs";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { sign, verify } from "jsonwebtoken";
import { z } from "zod";
import { cookies } from "next/headers";
import type { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

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

const SignInSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
});

export async function signIn(prevState: any, formData: FormData) {
  const parsed = SignInSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { error: "Invalid form data" };
  }

  const { username, password } = parsed.data;

  try {
    const db = drizzle(sql);
    const user = await db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1)
      .then((res) => res[0]);

    if (!user || !user.passwordHash) {
      return { error: "Invalid username or password" };
    }

    const isPasswordValid = await compare(password, user.passwordHash);

    if (!isPasswordValid) {
      return { error: "Invalid username or password" };
    }

    if (!JWT_SECRET) {
      console.error("JWT_SECRET is not defined.");
      return { error: "Server configuration error." };
    }

    const token = sign({ userId: user.id, username: user.username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    cookies().set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    return { success: true };
  } catch (error) {
    console.error("Error signing in:", error);
    return { error: "An unexpected error occurred." };
  }
}

// Funkcja do jednorazowego dodania użytkownika.
// UWAGA: Używać tylko w celach deweloperskich!
export async function seedUser() {
  const passwordHash = await hash("Pablo", 10);
  try {
    const db = drizzle(sql);
    await db
      .insert(users)
      .values({
        email: "pablo@wp.pl",
        username: "Pablo",
        passwordHash,
      })
      .onConflictDoNothing() // Nie rób nic, jeśli użytkownik już istnieje
      .execute();
    console.log("Użytkownik Pablo został pomyślnie dodany do bazy danych.");
    return { success: true };
  } catch (error) {
    console.error("Błąd podczas dodawania użytkownika:", error);
    return { error: "Nie udało się dodać użytkownika." };
  }
}

interface UserPayload extends JwtPayload {
  userId: string;
  username: string;
}

export async function getUser() {
  const session = cookies().get("session")?.value;
  if (!session) {
    return null;
  }
  if (!JWT_SECRET) {
    console.error("JWT_SECRET is not defined.");
    return null;
  }
  try {
    const decoded = verify(session, JWT_SECRET) as UserPayload;
    return {
      id: decoded.userId,
      username: decoded.username,
    };
  } catch (error) {
    console.error("Invalid session token:", error);
    return null;
  }
}

export async function signOut() {
  cookies().delete("session");
}
