-- CreateTable
CREATE TABLE "Ebi_Users" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_login" TEXT NOT NULL,
    "user_pass" TEXT NOT NULL,
    "user_nicename" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_url" TEXT NOT NULL,
    "user_registered" DATETIME NOT NULL,
    "user_activation_key" TEXT NOT NULL,
    "user_status" INTEGER NOT NULL,
    "display_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Ebi_UserMeta" (
    "umeta_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "meta_key" TEXT NOT NULL,
    "meta_value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Ebi_Options" (
    "option_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "option_name" TEXT NOT NULL,
    "option_value" TEXT NOT NULL,
    "autoload" BOOLEAN NOT NULL
);
