/*
  Warnings:

  - Added the required column `isArchived` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRead` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isStarred` to the `messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "messages" ADD COLUMN     "isArchived" BOOLEAN NOT NULL,
ADD COLUMN     "isRead" BOOLEAN NOT NULL,
ADD COLUMN     "isStarred" BOOLEAN NOT NULL;
