CREATE DATABASE  IF NOT EXISTS `deitalian` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `deitalian`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: deitalian
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `Name` varchar(50) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Phone` varchar(11) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Comments` varchar(200) NOT NULL,
  `Order ID` varchar(3) NOT NULL,
  KEY `fk_order_id` (`Order ID`),
  CONSTRAINT `fk_order_id` FOREIGN KEY (`Order ID`) REFERENCES `order` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES ('Abdullah','abdullahimran1712@gmail.com','Ghazali 1','03027344848','','76'),('Abdullah','abdullahimran1712@gmail.com','address','03027344848','','84'),('AFAQ','afaq6522@gmail.com','ghazali','-03432843289','','95');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `burgers`
--

DROP TABLE IF EXISTS `burgers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `burgers` (
  `ID` varchar(3) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` int NOT NULL,
  `Location` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `burgers`
--

LOCK TABLES `burgers` WRITE;
/*!40000 ALTER TABLE `burgers` DISABLE KEYS */;
INSERT INTO `burgers` VALUES ('B1','Italian Special Burger',599,'italian-special-buger'),('B2','Zinger Burger',550,'zinger-burger'),('B3','Beef Burger',550,'beef-burger'),('B4','Chicken Burger Grill',450,'chicken-burger-grill'),('B5','Double Cheese Burger',799,'double-cheese-burger'),('B6','Big Bang Burger',899,'big-bang-burger');
/*!40000 ALTER TABLE `burgers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `OID` varchar(3) NOT NULL,
  `MID` varchar(50) NOT NULL,
  `Category` varchar(50) NOT NULL,
  `Quantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES ('84','B1','burgers',3),('95','B2','burgers',2),('95','P8','pizzas',3);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contactus`
--

DROP TABLE IF EXISTS `contactus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contactus` (
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Comments` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactus`
--

LOCK TABLES `contactus` WRITE;
/*!40000 ALTER TABLE `contactus` DISABLE KEYS */;
INSERT INTO `contactus` VALUES ('Abd','abdullahimran1712@gmail.com','Goofy');
/*!40000 ALTER TABLE `contactus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deals`
--

DROP TABLE IF EXISTS `deals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deals` (
  `ID` varchar(3) NOT NULL,
  `Description` varchar(70) NOT NULL,
  `Price` int NOT NULL,
  `Location` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deals`
--

LOCK TABLES `deals` WRITE;
/*!40000 ALTER TABLE `deals` DISABLE KEYS */;
INSERT INTO `deals` VALUES ('D1','Burger, Leg piece, Fries, Drink',750,'deal-1'),('D2','Burger, Fries, Drink',550,'deal-2'),('D3','2 Burger, Fries, 2 Drink',999,'deal-3');
/*!40000 ALTER TABLE `deals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drinks`
--

DROP TABLE IF EXISTS `drinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drinks` (
  `ID` varchar(3) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` int NOT NULL,
  `Location` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drinks`
--

LOCK TABLES `drinks` WRITE;
/*!40000 ALTER TABLE `drinks` DISABLE KEYS */;
INSERT INTO `drinks` VALUES ('SD1','Coca cola',210,'coca-cola'),('SD2','Sprite',200,'sprite'),('SD3','Fanta',200,'fanta');
/*!40000 ALTER TABLE `drinks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fries`
--

DROP TABLE IF EXISTS `fries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fries` (
  `ID` varchar(3) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` int NOT NULL,
  `Location` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fries`
--

LOCK TABLES `fries` WRITE;
/*!40000 ALTER TABLE `fries` DISABLE KEYS */;
INSERT INTO `fries` VALUES ('F1','Italian Special Fries',750,'italian-special-fries'),('F2','Loaded Fries',650,'loaded-fries'),('F3','BBQ Fries',550,'bbq-fries');
/*!40000 ALTER TABLE `fries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `ID` varchar(3) NOT NULL,
  `Date` date NOT NULL,
  `Total Price` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES ('76','2024-05-20',100),('84','2024-05-20',1897),('95','2024-05-20',5100);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pastas`
--

DROP TABLE IF EXISTS `pastas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pastas` (
  `ID` varchar(3) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` int NOT NULL,
  `Location` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pastas`
--

LOCK TABLES `pastas` WRITE;
/*!40000 ALTER TABLE `pastas` DISABLE KEYS */;
INSERT INTO `pastas` VALUES ('Pa1','Special Buttherfly Pasta',899,'special-butterfly-pasta'),('Pa2','Crusted Pasta',850,'crusted-pasta'),('Pa3','Cajun Pasta',850,'cajun-pasta'),('Pa4','Alfredo Fettuccine Pasta',850,'alfredo-fettuccine-pasta'),('Pa5','Moroccan Pasta',850,'moroccan-pasta'),('Pa6','Penne Arabiata',850,'penne-arabiata');
/*!40000 ALTER TABLE `pastas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pizzas`
--

DROP TABLE IF EXISTS `pizzas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pizzas` (
  `ID` varchar(3) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Size` varchar(30) NOT NULL,
  `Price` int NOT NULL,
  `Location` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pizzas`
--

LOCK TABLES `pizzas` WRITE;
/*!40000 ALTER TABLE `pizzas` DISABLE KEYS */;
INSERT INTO `pizzas` VALUES ('P1','Ranch Tikka','Small',1890,'ranch-tikka'),('P10','Creamy Tikka','Small',550,'creamy-tikka'),('P11','Creamy Tikka','Medium',1200,'creamy-tikka'),('P12','Creamy Tikka','Large',1890,'creamy-tikka'),('P13','Grilled Chicken','Small',550,'grilled-chicken'),('P14','Grilled Chicken','Medium',1200,'grilled-chicken'),('P15','Grilled Chicken','Large',1890,'grilled-chicken'),('P16','Chicken Wing Bite','Small',580,'chicken-wing-bite'),('P17','Chicken Wing Bite','Medium',1250,'chicken-wing-bite'),('P18','Chicken Wing Bite','Large',1950,'chicken-wing-bite'),('P2','Ranch Tikka','Medium',1200,'ranch-tikka'),('P3','Ranch Tikka','Large',1890,'ranch-tikka'),('P4','Florida Feast Fajita','Small',550,'florida-feast-fajita'),('P5','Florida Feast Fajita','Medium',1200,'florida-feast-fajita'),('P6','Florida Feast Fajita','Large',1890,'florida-feast-fajita'),('P7','Chicken Pepperoni','Small',600,'chicken-pepperoni'),('P8','Chicken Pepperoni','Medium',1300,'chicken-pepperoni'),('P9','Chicken Pepperoni','Large',2000,'chicken-pepperoni');
/*!40000 ALTER TABLE `pizzas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `steak`
--

DROP TABLE IF EXISTS `steak`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `steak` (
  `ID` varchar(3) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` int NOT NULL,
  `Location` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `steak`
--

LOCK TABLES `steak` WRITE;
/*!40000 ALTER TABLE `steak` DISABLE KEYS */;
INSERT INTO `steak` VALUES ('S1','Italian Special Steak',1899,'italian-special-steak'),('S2','Mushroom Steak',1799,'mushroom-steak'),('S3','Mexican Steak',1799,'mexican-steak'),('S4','Jalapeno Steak',1799,'jalapeno-steak'),('S5','Milano Steak',1799,'milano-steak'),('S6','Tarragon Steak',1799,'tarragon-steak');
/*!40000 ALTER TABLE `steak` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-30 16:48:34
