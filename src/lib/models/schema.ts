import {
  pgTable,
  serial,
  pgEnum,
  boolean,
  text,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  username: varchar("username", { length: 255 }).unique().notNull(),
  passwordHash: text("password_hash").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  avatar: text("avatar"),
  role: text("role").default("user"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const postType = pgEnum("post_type", ["public", "secretPatron", "secretPWA"]);

export const posts = pgTable("posts", {
  id: text("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  videoUrl: text("video_url"),
  imageUrl: text("image_url"),
  title: text("title").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  likesCount: integer("likes_count").default(0),
  commentsCount: integer("comments_count").default(0),
  isPublished: boolean("is_published").default(true),
  type: postType("type").default("public"),
});

export const postLikes = pgTable("post_likes", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  postId: text("post_id")
    .references(() => posts.id)
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});


export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  postId: text("post_id")
    .references(() => posts.id)
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
