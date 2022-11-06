-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2022 at 11:49 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teste`
--

-- --------------------------------------------------------

--
-- Table structure for table `carrinho_de_produtos`
--

CREATE TABLE `carrinho_de_produtos` (
  `id` int(200) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `preco` decimal(60,2) NOT NULL,
  `quantidade` int(200) DEFAULT NULL,
  `img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jogos`
--

CREATE TABLE `jogos` (
  `id` int(200) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `preco` decimal(60,2) NOT NULL,
  `quantidade` int(200) NOT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jogos`
--

INSERT INTO `jogos` (`id`, `nome`, `preco`, `quantidade`, `descricao`, `img`) VALUES
(1, 'God of War', '100.00', 41, 'Jogo do Cleitão.', 'godofwar.png'),
(2, 'Resident Evil 4', '150.00', 47, 'Jogo bom de zumbi.', 'residentevil4.jpg'),
(20, 'Call of Duty II', '30.00', 78, NULL, 'callofduty.jpg'),
(21, 'Far Cry 3', '50.00', 29, NULL, 'farcry3.jpg'),
(22, 'The Elder Scrolls V: Skyrim', '80.00', 5, 'Rpg mundo aberto.', 'skyrim.jpg'),
(23, 'The Witcher 3', '500.00', 87, 'Bruxão bolado.', 'thewitcher3.jpg'),
(24, 'Tomb Raider', '50.00', 5, 'Altas aventuras.', 'tomraider.jpg'),
(25, 'Saints Row', '30.00', 5, NULL, 'saintsrow.jpg'),
(26, 'Red Dead Redemption', '80.00', 5, NULL, 'reddead.jpg'),
(27, 'Need for Speed', '10.00', 7, NULL, 'needforspeed.jpg'),
(28, 'Mad Max', '40.00', 7, NULL, 'madmax.jpg'),
(29, 'Grand Theft Auto V', '150.00', 87, 'Rockstar', 'gta5.png'),
(30, 'Battlefield 4', '90.00', 7, NULL, 'bf4.jpg'),
(31, 'Battlefield 3', '90.00', 8, NULL, 'bf3.jpg'),
(32, 'Assassins Creed Odyssey', '120.00', 8, NULL, 'assassinscreed.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `pagamentos`
--

CREATE TABLE `pagamentos` (
  `id` int(11) NOT NULL,
  `tipo_pagamento` varchar(200) NOT NULL,
  `usuario` varchar(200) NOT NULL,
  `total_compra` decimal(60,2) NOT NULL,
  `data_compra` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pagamentos`
--

INSERT INTO `pagamentos` (`id`, `tipo_pagamento`, `usuario`, `total_compra`, `data_compra`) VALUES
(15, 'pix', 'Gabriel', '1570.00', '11/06/2022 07:06:12 pm'),
(16, 'cartao', 'Gabriel', '200.00', '11/06/2022 07:08:27 pm'),
(17, 'pix', 'Gabriel', '100.00', '11/06/2022 07:12:17 pm'),
(18, 'pix', 'Gabriel', '0.00', '11/06/2022 07:12:32 pm'),
(19, 'cartao', 'user', '610.00', '11/06/2022 07:16:13 pm'),
(20, 'pix', 'user', '180.00', '11/06/2022 07:18:52 pm'),
(21, 'pix', 'joana', '200.00', '11/06/2022 07:20:09 pm'),
(22, 'pix', 'joana', '0.00', '11/06/2022 07:21:31 pm'),
(23, 'pix', 'joana', '180.00', '11/06/2022 07:28:34 pm'),
(24, 'cartao', 'joao', '250.00', '11/06/2022 07:30:06 pm'),
(25, 'pix', 'joao', '100.00', '11/06/2022 07:31:10 pm'),
(26, 'pix', 'joana', '250.00', '11/06/2022 07:36:17 pm'),
(27, 'cartao', 'joana', '150.00', '11/06/2022 07:37:15 pm'),
(28, 'pix', 'roberto', '100.00', '11/06/2022 07:48:06 pm');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(200) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `cpf` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `senha` varchar(200) NOT NULL,
  `logado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `cpf`, `email`, `senha`, `logado`) VALUES
(1, 'root', '00022233344', 'root@yahoo.com.br', 'rootfs', 0),
(2, 'joao', '11063867889', 'joao@gmail.com', '123', 0),
(3, 'roberto', '110999222-89', 'roberto@gmail.com', '123', 0),
(4, 'joana', '111.222.333-44', 'joana', 'joana', 0),
(9, 'kevin', '888.999.222-56', 'kevein@gmail.com', '1234', 0),
(20, 'Gabriel', '123.456.678-99', 'gabriel@yahoo.com', '123', 0),
(21, 'user', '12345678911', 'user@hotmail.com', '12345', 0),
(22, 'roberto', '567.678.998-78', 'robertin@yahoo.com.br', 'roberto', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carrinho_de_produtos`
--
ALTER TABLE `carrinho_de_produtos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jogos`
--
ALTER TABLE `jogos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pagamentos`
--
ALTER TABLE `pagamentos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carrinho_de_produtos`
--
ALTER TABLE `carrinho_de_produtos`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `jogos`
--
ALTER TABLE `jogos`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `pagamentos`
--
ALTER TABLE `pagamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
