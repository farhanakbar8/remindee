/*
  Warnings:

  - You are about to drop the column `fullName` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `fullName`,
    ADD COLUMN `name` VARCHAR(191) NULL;
