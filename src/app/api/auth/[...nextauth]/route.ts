// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Na tym etapie zwracamy statycznego użytkownika do celów testowych.
        // W przyszłości ta logika powinna zostać zastąpiona przez weryfikację
        // użytkownika w bazie danych.
        if (credentials) {
          return { id: "1", name: "Test User", email: "test@example.com" };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin", // Opcjonalnie: niestandardowa strona logowania
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
