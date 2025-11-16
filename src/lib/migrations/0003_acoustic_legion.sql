ALTER TABLE "likes" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "slides" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "likes" CASCADE;--> statement-breakpoint
DROP TABLE "slides" CASCADE;--> statement-breakpoint
ALTER TABLE "comments" DROP CONSTRAINT "comments_slide_id_slides_id_fk";
--> statement-breakpoint
ALTER TABLE "comments" DROP CONSTRAINT "comments_parent_id_comments_id_fk";
--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_slide_id_users_id_fk" FOREIGN KEY ("slide_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments" DROP COLUMN "parent_id";