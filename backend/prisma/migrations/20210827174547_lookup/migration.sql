-- CreateTable
CREATE TABLE `Ebi_Lookup` (
    `lookup_id` VARCHAR(191) NOT NULL,
    `lookup_title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`lookup_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ebi_Lookup_Value` (
    `lookup_value_id` INTEGER NOT NULL AUTO_INCREMENT,
    `lookup_key` VARCHAR(191) NOT NULL,
    `lookup_value` VARCHAR(191) NOT NULL,
    `lookup_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`lookup_value_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ebi_Lookup_Value` ADD FOREIGN KEY (`lookup_id`) REFERENCES `Ebi_Lookup`(`lookup_id`) ON DELETE CASCADE ON UPDATE CASCADE;
