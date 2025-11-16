// src/lib/auth.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function auth() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    // W Server Actions (gdzie to będzie używane), możesz rzucić błąd
    // aby zapobiec nieautoryzowanemu zapisowi danych.
    throw new Error("Unauthorized: Session not found.");
  }

  return session;
}
