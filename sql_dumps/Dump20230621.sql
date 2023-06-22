-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mc
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('159b36cc-39d4-4209-a7ac-1c9a6e3f8b2a','3047ae19fdf54685f4ba6400a0a58bbb8106726974ce9933f70570c9e720ba14','2023-06-20 13:48:35.030','20230620134834_init',NULL,NULL,'2023-06-20 13:48:35.007',1),('41abecb7-bbbb-4cf1-8d97-7aa4f9a2cb69','195eb13e678550cc4aee18abcebfa8403a0181ce83ead76f240a81396c363c6d','2023-06-18 15:55:12.960','20230618155512_init',NULL,NULL,'2023-06-18 15:55:12.925',1),('4a2a3475-c4a8-4780-9c10-5e05987ca962','cbfc81308067b711a4b1732fff901c16ea49f65de3d265c49649e8ee8cf3fed8','2023-06-17 12:15:27.705','20230617121527_init',NULL,NULL,'2023-06-17 12:15:27.656',1),('59487de6-c122-465d-b6f6-c9acab7cc611','9bb5358190b89fc634348d63f6032f47beb61d681a0e72d90fe29784208abb39','2023-06-18 18:55:48.360','20230618185548_init',NULL,NULL,'2023-06-18 18:55:48.305',1),('6d8f5c42-92bc-4d2d-ad6e-c13ef88615a4','fe9f73d98d1393d9505d6022c66a1475c70acbc99068de910eb8f5c2f3194d74','2023-06-18 20:23:55.836','20230618202355_init',NULL,NULL,'2023-06-18 20:23:55.811',1),('7bd960ee-22d6-4644-be9b-18ea257ad6d9','60395ba7f26d1077629f8022941c3ac3f323f53a9341c419fb9d679655b970d4','2023-06-21 12:50:43.605','20230621125043_init',NULL,NULL,'2023-06-21 12:50:43.574',1),('9a96fde2-2d6d-454a-8926-ddaf1591aabf','7a22f21ba7be3bd8ab557e918c78927abbc31a234a59afca6c58553e28cd5beb','2023-06-18 10:43:34.812','20230618104334_init',NULL,NULL,'2023-06-18 10:43:34.722',1),('9c7c314d-1862-418c-92df-92fab2b34e80','00cee1b5283411751a514604d352189bee2bc97bcb2d767013fee60a0a90175f','2023-06-20 10:42:44.147','20230620104244_init',NULL,NULL,'2023-06-20 10:42:44.096',1),('a01c66f0-27ea-4d72-b1cc-7f5d9e5cd2c4','57a2876797f3c2144069bb852df44819313bf727af9e5b667e39ae412f5fd32a','2023-06-20 09:57:26.775','20230620095726_init',NULL,NULL,'2023-06-20 09:57:26.748',1),('c11c5506-0342-48f9-8ad1-c79e71ec095c','672c5601b03a4e9f26f8cf8f8ee7df0587bc9a1b81272a12c4df0010997d8104','2023-06-17 12:12:36.863','20230617121236_init',NULL,NULL,'2023-06-17 12:12:36.574',1),('d17dcd95-7abf-457e-85a0-6ef54a1737fb','1f6e6757605588b5e8d5b0b102dbc9db2ac236f2d8d5dad85ae1deacfb053b19','2023-06-17 12:25:23.359','20230617122523_init',NULL,NULL,'2023-06-17 12:25:23.210',1),('d9079ed8-2ea2-461b-a833-bbe1ab490710','d02ececf97e4849fe3101e09baa48341dfb0c9bce02976cfaf5c8e30ed588dfe','2023-06-19 08:55:15.283','20230619085515_init',NULL,NULL,'2023-06-19 08:55:15.230',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provider` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `providerAccountId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `refresh_token` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `access_token` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expires_at` int DEFAULT NULL,
  `token_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scope` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_token` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `session_state` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Account_provider_providerAccountId_key` (`provider`,`providerAccountId`),
  KEY `Account_userId_fkey` (`userId`),
  CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `os` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ram` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ssd` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `screen` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `networks` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `published` tinyint(1) NOT NULL DEFAULT '0',
  `authorId` int NOT NULL,
  `price` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tsStandard` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Product_authorId_fkey` (`authorId`),
  CONSTRAINT `Product_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (21,'iOS 15','4','185','2532x1170','USB, Bluetooth, WIFI','New 2023 model',0,1,'15000','1687352054234-85404.png','GPRS, EDGE, HSDPA, HSUPA, HSPA+, DC-HSPA+, LTE','Ugrabi super cenu iPhone 13 telefona uz postpaid tarifu u Mobi E-katalog. Vreme je za novi telefon!','Apple iPhone 13 128GB'),(22,'iOS 16','5','255','2796 x 1290','USB, WiFi, Bluetooth','Big ram',0,1,'98000','1687352453234-iphone14Pro.png','GPRS, EDGE, HSDPA, HSUPA, HSPA+, DC-HSPA+, LTE','Good phone witch good cam','Apple iPhone 14 Pro Max 256GB');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `admin` int DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `emailVerifed` datetime(3) DEFAULT NULL,
  `hashedPasword` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'mc@localhost.com','mc',1,'2023-06-18 10:01:42.211',NULL,'$2b$12$3TLz1XMwonwM55wFZW0Gnu/kc7lCTX90vUBFjdqpFdRPZeQKt8Gmu','2023-06-18 10:01:42.211');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-21 19:11:14
