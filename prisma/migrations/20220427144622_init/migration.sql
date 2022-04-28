-- AlterTable
ALTER TABLE `books` MODIFY `bookcover_url` VARCHAR(300) NOT NULL,
    MODIFY `description` VARCHAR(300) NOT NULL;

-- AlterTable
ALTER TABLE `posts` MODIFY `body` LONGTEXT NOT NULL,
    MODIFY `summary` VARCHAR(300) NOT NULL,
    MODIFY `thumbnail_url` VARCHAR(300) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `description` VARCHAR(300) NULL;
