-- CreateTable
CREATE TABLE `Ebi_Country` (
    `country_id` INTEGER NOT NULL AUTO_INCREMENT,
    `contry_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`country_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ebi_State` (
    `state_id` INTEGER NOT NULL AUTO_INCREMENT,
    `state_name` VARCHAR(191) NOT NULL,
    `country_id` INTEGER NOT NULL,

    PRIMARY KEY (`state_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ebi_State` ADD FOREIGN KEY (`country_id`) REFERENCES `Ebi_Country`(`country_id`) ON DELETE CASCADE ON UPDATE CASCADE;
