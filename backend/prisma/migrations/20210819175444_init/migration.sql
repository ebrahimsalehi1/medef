/*
  Warnings:

  - You are about to drop the column `contry_name` on the `ebi_country` table. All the data in the column will be lost.
  - Added the required column `country_name` to the `Ebi_Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ebi_country` DROP COLUMN `contry_name`,
    ADD COLUMN `country_name` VARCHAR(191) NOT NULL;
