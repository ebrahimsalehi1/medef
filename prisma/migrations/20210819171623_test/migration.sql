/*
  Warnings:

  - You are about to drop the column `cityName` on the `ebi_city` table. All the data in the column will be lost.
  - Added the required column `city_name` to the `Ebi_City` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ebi_city` DROP COLUMN `cityName`,
    ADD COLUMN `city_name` VARCHAR(191) NOT NULL;
