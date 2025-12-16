-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: zenith_db
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `streaming_content`
--

DROP TABLE IF EXISTS `streaming_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `streaming_content` (
  `id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `duration` int NOT NULL,
  `thumbnail_url` varchar(255) NOT NULL,
  `video_url` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `watch_progress` varchar(5) DEFAULT NULL,
  `rating` double NOT NULL,
  `year` int NOT NULL,
  `genre` varchar(255) NOT NULL,
  `cast` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `streaming_content`
--

LOCK TABLES `streaming_content` WRITE;
/*!40000 ALTER TABLE `streaming_content` DISABLE KEYS */;
INSERT INTO `streaming_content` VALUES ('038b0f11-9a15-4133-9172-9c034d4859ba','The witcher',0,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpQa4kPsu6vyXAGfOOHSuscIGwdQuxyOs0Lp-EndlqkhFdcxNPg0kt-lws9e49GAqx2wxRg&s=10','https://www.youtube.com/watch?v=HK9dU6JIroU','Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.','',7.9,2019,'Action, Epic, Adventure, Fantasy, Dark',' Henry Cavill','2025-12-13 18:17:55'),('1890c4fb-eeac-4f0c-8ef4-9368f18027aa','Thor',5670,'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR5V69XD4HLqLY0A7zOAZvYKVyxym2pklgn8OcdBA1gsiRWPPwS','https://www.youtube.com/watch?v=JOddp-nlNvQ','The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.','',7,2011,'Epic, Fantasy','Chris Hemsworth','2025-12-16 12:33:22'),('1afdcc34-3abd-4a0d-92a4-714b7be6c43b','Cloverfield',5400,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNav0Z6mlnpz7vmGDiIdD8OXJWZiNiAO1n0bIgDEg0Ncroftss','https://www.youtube.com/watch?v=_afPFLvh2qg','A group of friends venture deep into the streets of New York on a rescue mission during a rampaging monster attack.','',7,2008,'Horror, Action','sdf','2025-12-13 18:17:55'),('1c8e9c7e-0bdb-4916-8041-bbf1325c254b','Terminator: Dark Fate',6345,'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxB88XEPGxAk9KUo1X4I_BVSSmiu3faTmLFCOmB2_ZfgKXJHTU','https://www.youtube.com/watch?v=oxy8udgWRmo','An augmented human and Sarah Connor must stop an advanced liquid Terminator from hunting down a young girl, whose fate is critical to the human race.','',6.2,2019,'Horror, Action','Arnold Schwarzenegger','2025-12-13 18:17:55'),('24ad0419-0129-42bb-9c04-f66e9086d465','Stranger Things Season 1',345,'https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg','https://www.youtube.com/watch?v=b9EkMc79ZSU','Stranger Things Season 1 (2016) follows the mysterious disappearance of 12-year-old Will Byers in the 1980s small town of Hawkins, Indiana, uncovering a secret government lab, a terrifying alternate dimension called the \"Upside Down,\" and a powerful young girl with psychokinetic abilities, \"Eleven,\" who helps Will\'s friends find him, while his mother, Joyce, and Police Chief Hopper uncover the conspiracy, leading to a nostalgic blend of sci-fi horror and adventure.','',5.4,1925,'Action','sadfsdf','2025-12-13 18:17:55'),('46f2cae1-df03-4ba0-8aba-21ca066aa401','Terminator 2: Judgment Day',120,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_cfuxD0ls5KYJiwKIQsXrE3ZS5OKbDVl1imnTcnvOFanBadiwMwYPr7UVVJMoQ7RJp4_W&s=10','https://www.youtube.com/watch?v=MC_muc_FJ9k','A cyborg from the future, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from an even more advanced and powerful cyborg.','',8.7,1991,'Drama','sdf','2025-12-13 18:17:55'),('59a0d7d5-bec9-490f-bca1-f0c7f4bdbbae','Fast Five',7200,'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxCH_bnVcZFmFqfcXsOE53aS1FxbTThiR4Z_sl2lz9t5Y5IjJd','https://www.youtube.com/watch?v=PQpzECsxHK8','Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom while in the sights of a powerful Brazilian drug lord and a dangerous federal agent.','',5.4,1925,'Car action, crime, thriller','srsdf','2025-12-13 18:17:55'),('5f0fbb51-cb15-4717-860d-31e52ee7e916','Stranger Things',5000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxAU5r7WU26MZ0nPj_DB_bXb8PSoMxKS8G3F2NFiUvHZr7Wya','https://www.youtube.com/watch?v=iKZyYdwS3Wg','Stranger Things Season 1 (2016) follows the mysterious disappearance of 12-year-old Will Byers in the 1980s small town of Hawkins, Indiana, uncovering a secret government lab, a terrifying alternate dimension called the \"Upside Down,\" and a powerful young girl with psychokinetic abilities, \"Eleven,\" who helps Will\'s friends find him, while his mother, Joyce, and Police Chief Hopper uncover the conspiracy, leading to a nostalgic blend of sci-fi horror and adventure.','',5.4,1925,'Horror, Mystery, Fantasy','sdfsdf','2025-12-13 18:17:55'),('6813c927-eee1-4fe3-9c9f-f5a8fd22be40','The Cabin in the Woods',6700,'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYZNVONhFNpMm4dzjAuZpc9XNzXmES9XXRoz7Ww51yE9KvPdtF','https://www.youtube.com/watch?v=MzbMwS6lVpE','Five teens visit a remote cabin and explore its cellar, finding strange items. When Dana reads from a book there, she unleashes zombie killers. But the situation is more complex than it appears.','',7,2011,'Horror, Comedy','Kristen Connolly, Chris Hemsworth','2025-12-13 18:17:55'),('9991b6cc-4735-415b-9f81-1a97000ba69b','Justice League',5000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL6NBbW28AzAAabD970wYFpR2-DWqIAzQegDb3gPqyleQOtSuR','https://www.youtube.com/watch?v=3cxixDgHUYw','Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy.','',6,2017,'Fantasy, Action','Ben Affleck, Gal Gabot','2025-12-16 13:32:13'),('cc599989-4882-4ba5-9edd-d4e2a2c13ad4','Bad Boys: Ride or Die',5400,'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSa4IYyp_J5GrWMQgm3MAChgyVMJcUP3K5DlXRr8miBdbAH9dnw','https://www.youtube.com/watch?v=ZTQyMmz-cQE','Bad Boys: Ride or Die: Directed by Adil El Arbi, Bilall Fallah. With Will Smith, Martin Lawrence, Vanessa Hudgens, Alexander Ludwig.','',6.5,2024,'Action, Cop, Comedy','Will smith','2025-12-13 18:17:55');
/*!40000 ALTER TABLE `streaming_content` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-16 19:54:39
