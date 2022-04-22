/*
  Warnings:

  - You are about to drop the column `dateTime` on the `tasklist` table. All the data in the column will be lost.
  - You are about to drop the column `hour` on the `tasklist` table. All the data in the column will be lost.
  - You are about to drop the column `minute` on the `tasklist` table. All the data in the column will be lost.
  - Added the required column `date` to the `TaskList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `TaskList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tasklist` DROP COLUMN `dateTime`,
    DROP COLUMN `hour`,
    DROP COLUMN `minute`,
    ADD COLUMN `date` VARCHAR(191) NOT NULL,
    ADD COLUMN `time` VARCHAR(191) NOT NULL;
