-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.6.4-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para inventario
CREATE DATABASE IF NOT EXISTS `inventario` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `inventario`;

-- Volcando estructura para tabla inventario.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(90) NOT NULL,
  `brand` varchar(80) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla inventario.products: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
REPLACE INTO `products` (`id`, `name`, `brand`, `created_at`, `updated_at`) VALUES
	(1, 'Ryzen 7 SSg G8d', 'AMD', '2021-01-01 00:00:00', '2021-10-21 20:21:28'),
	(2, 'iPhone 13', 'Apple', '2021-01-01 00:00:00', '2021-01-01 00:00:00'),
	(3, 'Xiaomi Redmi Note 10 Pro', 'Xiaomi', '2021-01-01 00:00:00', '2021-01-01 00:00:00'),
	(4, 'Moto E7', 'Motorola', '2021-01-01 00:00:00', '2021-01-01 00:00:00'),
	(5, 'Huawei Nova 8', 'Huawei', '2021-01-01 00:00:00', '2021-01-01 00:00:00'),
	(6, 'Sansung Galaxi s7 Blue', 'Sansung', '2021-10-21 10:13:22', '2021-10-21 18:42:48'),
	(7, 'Huawei Honos plus H7', 'Huawei', '2021-10-21 18:46:41', NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
