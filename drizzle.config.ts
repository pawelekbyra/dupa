import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/models/schema.ts",
  out: "./src/lib/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
