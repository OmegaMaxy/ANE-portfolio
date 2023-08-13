/*
  Warnings:

  - You are about to drop the column `bioText` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `bioText`,
    ADD COLUMN `bio_text` LONGTEXT NULL;
