/*
  Warnings:

  - The `receiver` column on the `Email` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sender` column on the `Email` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Email" DROP COLUMN "receiver",
ADD COLUMN     "receiver" JSONB,
DROP COLUMN "sender",
ADD COLUMN     "sender" JSONB;
