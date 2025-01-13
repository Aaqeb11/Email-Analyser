-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector" WITH SCHEMA "public";

-- AlterTable
ALTER TABLE "Email" ADD COLUMN     "embedding" vector(1536);
