-- AlterTable
ALTER TABLE `PortfolioDesign` MODIFY `bg_color` VARCHAR(191) NULL DEFAULT 'white',
    MODIFY `secondary_color` VARCHAR(191) NULL DEFAULT 'main.500',
    MODIFY `show_subscribe_box` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `show_latest_post` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `show_free_footer` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Post` MODIFY `content` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `profile_picture` TEXT NULL;
