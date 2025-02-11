ALTER TABLE "users" ADD COLUMN "roles" varchar(255) DEFAULT 'user' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "role";