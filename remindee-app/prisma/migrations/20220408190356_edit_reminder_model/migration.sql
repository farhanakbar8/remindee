/*
  Warnings:

  - You are about to drop the column `dateTime` on the `reminder` table. All the data in the column will be lost.
  - You are about to drop the column `timeExpired` on the `reminder` table. All the data in the column will be lost.
  - Added the required column `date` to the `Reminder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Reminder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reminder` DROP COLUMN `dateTime`,
    DROP COLUMN `timeExpired`,
    ADD COLUMN `date` VARCHAR(191) NOT NULL,
    ADD COLUMN `time` VARCHAR(191) NOT NULL;
