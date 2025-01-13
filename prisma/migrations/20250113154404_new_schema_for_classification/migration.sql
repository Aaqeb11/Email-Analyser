/*
  Warnings:

  - You are about to drop the `EmailSummary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EmailSummary" DROP CONSTRAINT "EmailSummary_emailId_fkey";

-- DropTable
DROP TABLE "EmailSummary";

-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EntityInstance" (
    "id" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EntityInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailEntity" (
    "id" TEXT NOT NULL,
    "emailId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "entityInstanceId" TEXT NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmailEntity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entity_name_key" ON "Entity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "EntityInstance_entityId_name_key" ON "EntityInstance"("entityId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "EmailEntity_emailId_entityId_entityInstanceId_key" ON "EmailEntity"("emailId", "entityId", "entityInstanceId");

-- AddForeignKey
ALTER TABLE "EntityInstance" ADD CONSTRAINT "EntityInstance_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailEntity" ADD CONSTRAINT "EmailEntity_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "Email"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailEntity" ADD CONSTRAINT "EmailEntity_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailEntity" ADD CONSTRAINT "EmailEntity_entityInstanceId_fkey" FOREIGN KEY ("entityInstanceId") REFERENCES "EntityInstance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
