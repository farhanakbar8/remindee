/*
  Warnings:

  - You are about to drop the column `date` on the `tasklist` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `tasklist` table. All the data in the column will be lost.
  - You are about to drop the column `timeExpired` on the `tasklist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tasklist` DROP COLUMN `date`,
    DROP COLUMN `time`,
    DROP COLUMN `timeExpired`;
