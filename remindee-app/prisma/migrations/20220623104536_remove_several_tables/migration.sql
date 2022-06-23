/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `freeuser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `premiumuser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `admin` DROP FOREIGN KEY `Admin_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `freeuser` DROP FOREIGN KEY `FreeUser_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `premiumuser` DROP FOREIGN KEY `PremiumUser_user_id_fkey`;

-- DropTable
DROP TABLE `admin`;

-- DropTable
DROP TABLE `freeuser`;

-- DropTable
DROP TABLE `premiumuser`;
