-- AddForeignKey
ALTER TABLE `Imgs` ADD CONSTRAINT `Imgs_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
