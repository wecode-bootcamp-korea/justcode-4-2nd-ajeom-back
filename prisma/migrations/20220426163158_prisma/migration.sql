/*
  Warnings:

  - You are about to drop the column `is_publiced` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `keyword_id` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `thumbanil_url` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the `user_Keyword` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bookcover_url` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_published` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail_url` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_Keyword` DROP FOREIGN KEY `user_Keyword_keyword_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_Keyword` DROP FOREIGN KEY `user_Keyword_user_id_fkey`;

-- AlterTable
ALTER TABLE `books` ADD COLUMN `bookcover_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `posts` DROP COLUMN `is_publiced`,
    DROP COLUMN `keyword_id`,
    DROP COLUMN `thumbanil_url`,
    ADD COLUMN `is_published` BOOLEAN NOT NULL,
    ADD COLUMN `thumbnail_url` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `user_Keyword`;

-- CreateTable
CREATE TABLE `user_keywords` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `keyword_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_keywords` ADD CONSTRAINT `user_keywords_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_keywords` ADD CONSTRAINT `user_keywords_keyword_id_fkey` FOREIGN KEY (`keyword_id`) REFERENCES `keywords`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
