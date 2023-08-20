-- AlterTable
ALTER TABLE `Post` MODIFY `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `User` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `portfolio_banner` TEXT NULL;

-- CreateTable
CREATE TABLE `PortfolioDesign` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bg_color` VARCHAR(191) NOT NULL,
    `secondary_color` VARCHAR(191) NOT NULL,
    `show_subscribe_box` BOOLEAN NOT NULL,
    `show_latest_post` BOOLEAN NOT NULL,
    `posts_bio_type` ENUM('Latest_Post', 'Short_Text') NOT NULL DEFAULT 'Latest_Post',
    `authorId` INTEGER NOT NULL,
    `show_free_footer` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `PortfolioDesign_authorId_key`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PortfolioDesign` ADD CONSTRAINT `PortfolioDesign_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
