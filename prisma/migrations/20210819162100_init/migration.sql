-- CreateTable
CREATE TABLE `Ebi_Users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_login` VARCHAR(191) NOT NULL,
    `user_pass` VARCHAR(191) NOT NULL,
    `user_nicename` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `user_url` VARCHAR(191) NOT NULL,
    `user_registered` DATETIME(3) NOT NULL,
    `user_activation_key` VARCHAR(191) NOT NULL,
    `user_status` INTEGER NOT NULL,
    `display_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ebi_UserMeta` (
    `umeta_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `meta_key` VARCHAR(191) NOT NULL,
    `meta_value` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`umeta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ebi_Options` (
    `option_id` INTEGER NOT NULL AUTO_INCREMENT,
    `option_name` VARCHAR(191) NOT NULL,
    `option_value` VARCHAR(191) NOT NULL,
    `autoload` BOOLEAN NOT NULL,

    PRIMARY KEY (`option_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
