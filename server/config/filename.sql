-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: devko
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `userId` varchar(64) DEFAULT NULL,
  `postId` int DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `mainId` int DEFAULT NULL,
  `content` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `googleusers`
--

DROP TABLE IF EXISTS `googleusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `googleusers` (
  `id` varchar(64) DEFAULT NULL,
  `googleId` varchar(45) DEFAULT NULL,
  `googleEmail` varchar(45) DEFAULT NULL,
  `googleImage` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `googleusers`
--

LOCK TABLES `googleusers` WRITE;
/*!40000 ALTER TABLE `googleusers` DISABLE KEYS */;
INSERT INTO `googleusers` VALUES ('880b545e-e309-4078-81cb-f92172bf7cf6','107428526624837926406','tidyp1030@gmail.com','https://lh3.googleusercontent.com/a/ACg8ocKWapjggGlC-kFFv4FFNjua6OJuxZg51gP4Q5SV0moA5A=s96-c');
/*!40000 ALTER TABLE `googleusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `userId` varchar(64) DEFAULT NULL,
  `postId` int DEFAULT NULL,
  `count` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (NULL,1,0),(NULL,2,0),(NULL,3,0),(NULL,4,-35),(NULL,5,0),(NULL,6,0),(NULL,7,0),(NULL,8,0),(NULL,9,0),(NULL,10,0),(NULL,11,0),(NULL,12,0),(NULL,13,0),(NULL,14,0),(NULL,15,0),(NULL,16,0),(NULL,17,0),(NULL,18,0),(NULL,19,0),(NULL,20,0),(NULL,21,0),(NULL,22,0),(NULL,23,0),(NULL,24,0),(NULL,25,0),(NULL,26,0),(NULL,27,0),(NULL,28,0),(NULL,29,0),(NULL,30,0),(NULL,31,0),(NULL,32,0),(NULL,33,0),(NULL,34,0),(NULL,35,0);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `userId` varchar(64) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `content` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES ('880b545e-e309-4078-81cb-f92172bf7cf6',1,'discuss','213','123','2024-01-15 00:19:22','2024-01-15 00:19:22'),('880b545e-e309-4078-81cb-f92172bf7cf6',2,'discuss','1','1','2024-01-15 00:59:14','2024-01-15 00:59:14'),('880b545e-e309-4078-81cb-f92172bf7cf6',3,'qna','ㅂㅈㄷㅂ','ㅂㅈㄷㅂㅈㄷ','2024-01-15 00:59:18','2024-01-15 00:59:18'),('880b545e-e309-4078-81cb-f92172bf7cf6',4,'qna','zxc','zxc','2024-01-15 00:59:21','2024-01-15 00:59:21'),('880b545e-e309-4078-81cb-f92172bf7cf6',5,'discuss','fqw','fqw','2024-01-15 02:32:20','2024-01-15 02:32:20'),('880b545e-e309-4078-81cb-f92172bf7cf6',6,'discuss','fqw','fqw','2024-01-15 02:32:21','2024-01-15 02:32:21'),('880b545e-e309-4078-81cb-f92172bf7cf6',7,'discuss','fqw','fqw','2024-01-15 02:32:21','2024-01-15 02:32:21'),('880b545e-e309-4078-81cb-f92172bf7cf6',8,'discuss','fqw','fqw','2024-01-15 02:32:21','2024-01-15 02:32:21'),('880b545e-e309-4078-81cb-f92172bf7cf6',9,'discuss','fqw','fqw','2024-01-15 02:32:21','2024-01-15 02:32:21'),('880b545e-e309-4078-81cb-f92172bf7cf6',10,'discuss','fqw','fqw','2024-01-15 02:32:22','2024-01-15 02:32:22'),('880b545e-e309-4078-81cb-f92172bf7cf6',11,'discuss','fqw','fqw','2024-01-15 02:32:22','2024-01-15 02:32:22'),('880b545e-e309-4078-81cb-f92172bf7cf6',12,'','','','2024-01-15 03:20:55','2024-01-15 03:20:55'),('880b545e-e309-4078-81cb-f92172bf7cf6',13,'discuss','123','123123','2024-01-15 03:36:45','2024-01-15 03:36:45'),('880b545e-e309-4078-81cb-f92172bf7cf6',14,'discuss','123','123123','2024-01-15 03:36:47','2024-01-15 03:36:47'),('880b545e-e309-4078-81cb-f92172bf7cf6',15,'discuss','123','123123','2024-01-15 03:37:19','2024-01-15 03:37:19'),('880b545e-e309-4078-81cb-f92172bf7cf6',16,'discuss','123','123123','2024-01-15 03:37:21','2024-01-15 03:37:21'),('880b545e-e309-4078-81cb-f92172bf7cf6',17,'','','','2024-01-15 03:37:32','2024-01-15 03:37:32'),('880b545e-e309-4078-81cb-f92172bf7cf6',18,'','','','2024-01-15 03:37:33','2024-01-15 03:37:33'),('880b545e-e309-4078-81cb-f92172bf7cf6',19,'event','123','12312312312','2024-01-15 03:37:36','2024-01-15 03:37:36'),('880b545e-e309-4078-81cb-f92172bf7cf6',20,'event','123','12312312312','2024-01-15 03:37:46','2024-01-15 03:37:46'),('880b545e-e309-4078-81cb-f92172bf7cf6',21,'event','123','12312312312','2024-01-15 03:37:47','2024-01-15 03:37:47'),('880b545e-e309-4078-81cb-f92172bf7cf6',22,'discuss','ㄴㅇㅁㄴㅇ','ㅁㄴㅇㅁㄴㅇ','2024-01-15 03:37:54','2024-01-15 03:37:54'),('880b545e-e309-4078-81cb-f92172bf7cf6',23,'discuss','ㄴㅇㅁㄴㅇ','ㅁㄴㅇㅁㄴㅇ','2024-01-15 03:38:03','2024-01-15 03:38:03'),('880b545e-e309-4078-81cb-f92172bf7cf6',24,'','1ㄷ212ㄷ','ㄷ12ㄷ12','2024-01-15 03:38:13','2024-01-15 03:38:13'),('880b545e-e309-4078-81cb-f92172bf7cf6',25,'event','123','123','2024-01-15 03:41:16','2024-01-15 03:41:16'),('880b545e-e309-4078-81cb-f92172bf7cf6',26,'qna','ㅇㅈㅇㅈ','ㅇㅈㅇ','2024-01-15 03:44:15','2024-01-15 03:44:15'),('880b545e-e309-4078-81cb-f92172bf7cf6',27,'event','','','2024-01-15 03:53:51','2024-01-15 03:53:51'),('880b545e-e309-4078-81cb-f92172bf7cf6',28,'','안녕','안녕안녕안녕','2024-01-15 04:03:12','2024-01-15 04:03:12'),('880b545e-e309-4078-81cb-f92172bf7cf6',29,'','안녕','안녕안녕','2024-01-15 04:03:31','2024-01-15 04:03:31'),('880b545e-e309-4078-81cb-f92172bf7cf6',30,'','ㅋㅌㅊㅋㅌㅊ','ㅋㅌㅊㅋㅌㅊ','2024-01-15 04:03:47','2024-01-15 04:03:47'),('880b545e-e309-4078-81cb-f92172bf7cf6',31,'qna','ㅇㅂㅈㅇㅈㅂ','ㅇㅂㅈㅇㅂㅈㅇㅂㅈ','2024-01-15 04:03:57','2024-01-15 04:03:57'),('880b545e-e309-4078-81cb-f92172bf7cf6',32,'','ㅇㅂㅈㅇ','ㅇㅂㅈㅇㅂㅈ','2024-01-15 04:04:33','2024-01-15 04:04:33'),('880b545e-e309-4078-81cb-f92172bf7cf6',33,'discuss','ㅇㅂㅈㅇㅂㅈ','ㅇㅂㅈㅇㅂㅈㅈ','2024-01-15 04:04:43','2024-01-15 04:04:43'),('880b545e-e309-4078-81cb-f92172bf7cf6',34,'discuss','dwqd','dqwdqwdq','2024-01-15 04:47:02','2024-01-15 04:47:02'),(NULL,35,'discuss','zxczx','zxcz','2024-01-15 16:37:58','2024-01-15 16:37:58');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `postId` int DEFAULT NULL,
  `id` int DEFAULT NULL,
  `name` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(64) DEFAULT NULL,
  `userName` varchar(45) DEFAULT NULL,
  `profileImage` text,
  `workPosition` varchar(64) DEFAULT NULL,
  `interestArea` varchar(64) DEFAULT NULL,
  `selfDescription` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `grade` int DEFAULT NULL,
  `notification` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersgoogle`
--

DROP TABLE IF EXISTS `usersgoogle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usersgoogle` (
  `id` varchar(64) DEFAULT NULL,
  `googleId` varchar(45) DEFAULT NULL,
  `googleEmail` varchar(45) DEFAULT NULL,
  `googleImage` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersgoogle`
--

LOCK TABLES `usersgoogle` WRITE;
/*!40000 ALTER TABLE `usersgoogle` DISABLE KEYS */;
/*!40000 ALTER TABLE `usersgoogle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersnaver`
--

DROP TABLE IF EXISTS `usersnaver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usersnaver` (
  `id` varchar(64) DEFAULT NULL,
  `naverId` varchar(45) DEFAULT NULL,
  `naverEmail` varchar(45) DEFAULT NULL,
  `naverImage` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersnaver`
--

LOCK TABLES `usersnaver` WRITE;
/*!40000 ALTER TABLE `usersnaver` DISABLE KEYS */;
/*!40000 ALTER TABLE `usersnaver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `views`
--

DROP TABLE IF EXISTS `views`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `views` (
  `postId` int DEFAULT NULL,
  `count` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `views`
--

LOCK TABLES `views` WRITE;
/*!40000 ALTER TABLE `views` DISABLE KEYS */;
INSERT INTO `views` VALUES (1,5),(2,0),(3,1),(4,51),(5,0),(6,0),(7,0),(8,0),(9,0),(10,0),(11,21),(12,0),(13,0),(14,0),(15,0),(16,0),(17,0),(18,0),(19,0),(20,0),(21,0),(22,1),(23,1),(24,0),(25,2),(26,2),(27,0),(28,0),(29,0),(30,0),(31,1),(32,0),(33,102),(34,3),(35,10);
/*!40000 ALTER TABLE `views` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-15 16:43:23
