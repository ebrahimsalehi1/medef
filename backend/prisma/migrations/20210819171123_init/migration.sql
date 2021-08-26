-- CreateTable
CREATE TABLE `Ebi_City` (
    `city_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cityName` VARCHAR(191) NOT NULL,
    `state_id` INTEGER NOT NULL,

    PRIMARY KEY (`city_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ebi_City` ADD FOREIGN KEY (`state_id`) REFERENCES `Ebi_State`(`state_id`) ON DELETE CASCADE ON UPDATE CASCADE;
