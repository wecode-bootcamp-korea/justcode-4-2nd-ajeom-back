/*
  Warnings:

  - You are about to drop the column `thumbanil_url` on the `posts` table. All the data in the column will be lost.
  - Added the required column `thumbnail_url` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `posts` DROP COLUMN `thumbanil_url`,
    ADD COLUMN `thumbnail_url` VARCHAR(191) NOT NULL,
    MODIFY `body` VARCHAR(191) NULL,
    MODIFY `subtitle` VARCHAR(191) NULL,
    MODIFY `is_publiced` BOOLEAN NULL;
