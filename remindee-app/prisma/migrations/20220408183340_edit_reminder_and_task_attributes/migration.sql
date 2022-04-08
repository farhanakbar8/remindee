/*
  Warnings:

  - You are about to drop the column `date` on the `reminder` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `reminder` table. All the data in the column will be lost.
  - You are about to drop the column `timer` on the `tasklist` table. All the data in the column will be lost.
  - Added the required column `timeExpired` to the `Reminder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeExpired` to the `TaskList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reminder` DROP COLUMN `date`,
    DROP COLUMN `time`,
    ADD COLUMN `dateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `timeExpired` TIME(0) NOT NULL;

-- AlterTable
ALTER TABLE `tasklist` DROP COLUMN `timer`,
    ADD COLUMN `dateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `hour` INTEGER NULL,
    ADD COLUMN `minute` INTEGER NULL,
    ADD COLUMN `timeExpired` DATETIME(3) NOT NULL;
