-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2024 at 11:33 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portofolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_file_graphic_design`
--

CREATE TABLE `tbl_file_graphic_design` (
  `id_file_graphic_design` int(11) NOT NULL,
  `id_graphic_design` int(11) NOT NULL,
  `file_graphic_design` text NOT NULL,
  `status_file_graphic_design` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_file_graphic_design`
--

INSERT INTO `tbl_file_graphic_design` (`id_file_graphic_design`, `id_graphic_design`, `file_graphic_design`, `status_file_graphic_design`) VALUES
(1, 1, 'Logo - 1.jpg', 1),
(2, 1, 'Logo - 2.jpg', 1),
(3, 1, 'Logo - 3.jpg', 1),
(4, 2, 'Instagram - 1.jpg', 1),
(5, 2, 'Instagram - 2.jpg', 1),
(6, 2, 'Instagram - 3.jpg', 1),
(7, 3, 'Twibbon - 1.jpg', 1),
(8, 3, 'Twibbon - 2.jpg', 1),
(9, 3, 'Twibbon - 3.jpg', 1),
(10, 4, 'Thumbnail - 1.jpg', 1),
(11, 4, 'Thumbnail - 2.jpg', 1),
(12, 4, 'Thumbnail - 3.jpg', 1),
(13, 5, 'Stationery - 1.jpg', 1),
(14, 5, 'Stationery - 2.jpg', 1),
(15, 5, 'Stationery - 3.jpg', 1),
(16, 6, 'Other - 1.jpg', 1),
(17, 6, 'Other - 2.jpg', 1),
(18, 6, 'Other - 3.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_file_illustration`
--

CREATE TABLE `tbl_file_illustration` (
  `id_file_illustration` int(11) NOT NULL,
  `id_illustration` int(11) NOT NULL,
  `file_illustration` text NOT NULL,
  `status_file_illustration` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_file_illustration`
--

INSERT INTO `tbl_file_illustration` (`id_file_illustration`, `id_illustration`, `file_illustration`, `status_file_illustration`) VALUES
(1, 1, 'Vector Art - 1.jpg', 1),
(2, 1, 'Vector Art - 2.jpg', 1),
(3, 1, 'Vector Art - 3.jpg', 1),
(4, 2, 'Microstock - 1.jpg', 1),
(5, 2, 'Microstock - 2.jpg', 1),
(6, 2, 'Microstock - 3.jpg', 1),
(7, 3, 'Storyboard - 1.jpg', 1),
(8, 3, 'Storyboard - 2.jpg', 1),
(9, 3, 'Storyboard - 3.jpg', 1),
(10, 4, 'Coloring Book - 1.jpg', 1),
(11, 4, 'Coloring Book - 2.jpg', 1),
(12, 4, 'Coloring Book - 3.jpg', 1),
(13, 5, 'Other - 1.jpg', 1),
(14, 5, 'Other - 2.jpg', 1),
(15, 5, 'Other - 3.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_file_ui_ux_design`
--

CREATE TABLE `tbl_file_ui_ux_design` (
  `id_file_ui_ux_design` int(11) NOT NULL,
  `id_ui_ux_design` int(11) NOT NULL,
  `file_ui_ux_design` text NOT NULL,
  `status_file_ui_ux_design` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_file_ui_ux_design`
--

INSERT INTO `tbl_file_ui_ux_design` (`id_file_ui_ux_design`, `id_ui_ux_design`, `file_ui_ux_design`, `status_file_ui_ux_design`) VALUES
(1, 1, 'Web - 1.jpg', 1),
(2, 1, 'Web - 2.jpg', 1),
(3, 1, 'Web - 3.jpg', 1),
(4, 2, 'Mobile - 1.jpg', 1),
(5, 2, 'Mobile - 2.jpg', 1),
(6, 2, 'Mobile - 3.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_file_web_development`
--

CREATE TABLE `tbl_file_web_development` (
  `id_file_web_development` int(11) NOT NULL,
  `id_web_development` int(11) NOT NULL,
  `file_web_development` text NOT NULL,
  `status_file_web_development` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_file_web_development`
--

INSERT INTO `tbl_file_web_development` (`id_file_web_development`, `id_web_development`, `file_web_development`, `status_file_web_development`) VALUES
(1, 1, 'Web - 1.png', 1),
(2, 1, 'Web - 2.png', 1),
(3, 1, 'Web - 3.png', 1),
(4, 2, 'Web - 4.png', 1),
(5, 2, 'Web - 5.png', 1),
(6, 2, 'Web - 6.png', 1),
(7, 3, 'Web - 7.png', 1),
(8, 3, 'Web - 8.png', 1),
(9, 3, 'Web - 9.png', 1),
(10, 4, 'Web - 10.png', 1),
(11, 4, 'Web - 11.png', 1),
(12, 4, 'Web - 12.png', 1),
(13, 5, 'Web - 13.png', 1),
(14, 5, 'Web - 14.png', 1),
(15, 5, 'Web - 15.png', 1),
(16, 5, 'Web - 16.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_graphic_design`
--

CREATE TABLE `tbl_graphic_design` (
  `id_graphic_design` int(11) NOT NULL,
  `judul_graphic_design` varchar(100) NOT NULL,
  `deskripsi_graphic_design` text NOT NULL,
  `link_graphic_design` text DEFAULT NULL,
  `status_graphic_design` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_graphic_design`
--

INSERT INTO `tbl_graphic_design` (`id_graphic_design`, `judul_graphic_design`, `deskripsi_graphic_design`, `link_graphic_design`, `status_graphic_design`) VALUES
(1, 'Logo Design', 'Explore my collection of logo designs and branding projects that capture the essence of each client’s vision. From startups to established businesses, my designs focus on creating strong, recognizable brand identities that leave a lasting impression.', 'https://drive.google.com/drive/folders/1_P8w6Ak6JnUpHMC8CZMCkKyJgt4iAWRS?usp=drive_link', 1),
(2, 'Social Media Content', 'Explore my portfolio of social media content design created for educational and community organizations like MAN 2 Model Medan, PEMA Fasilom-TI, and Rumah Izin. These posts are designed to reflect the values and missions of each organization, fostering community engagement.', 'https://drive.google.com/drive/folders/1kccMlhMNmr3262uKcVyhdfDaKbsRfBho?usp=drive_link', 1),
(3, 'Twibbon', 'Explore a collection of custom twibbon designs tailored to enhance social media events. My designs combine aesthetic appeal with strong messaging to help you achieve your engagement goals.', 'https://drive.google.com/drive/folders/13bML_DLxHab-rlmWmzPHepwD6hC12jc4?usp=drive_link', 1),
(4, 'YouTube Thumbnail', 'Experienced in designing custom YouTube thumbnails that stand out in the crowded video landscape. Utilizing bold visuals and compelling text, my thumbnails help videos attract more viewers and convey the essence of the content effectively.', 'https://drive.google.com/drive/folders/1agWYjiQy2Sb7zDvICi3mLwJFfUIUieX5?usp=drive_link', 1),
(5, 'Stationery', 'I specialize in designing elegant and professional stationery that perfectly represents your brand\'s identity. From business cards and letterheads to envelopes and other office essentials, my designs ensure consistency, attention to detail, and a polished look that leaves a lasting impression.', 'https://drive.google.com/drive/folders/1reT_LWnr7wMjWbVtvgbRt2iJCCTeqGaV?usp=drive_link', 1),
(6, 'Other', 'My graphic design portfolio features a wide array of projects, including stationery, banner, brochure, and the others. I combine creativity with a professional touch to produce designs that not only look great but also serve their intended purpose effectively.', 'https://drive.google.com/drive/folders/1EqPDfKdJtAlsqt2fWyIYTUrLZeKlZHrO?usp=drive_link', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_illustration`
--

CREATE TABLE `tbl_illustration` (
  `id_illustration` int(11) NOT NULL,
  `judul_illustration` varchar(100) NOT NULL,
  `deskripsi_illustration` text NOT NULL,
  `link_illustration` text DEFAULT NULL,
  `status_illustration` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_illustration`
--

INSERT INTO `tbl_illustration` (`id_illustration`, `judul_illustration`, `deskripsi_illustration`, `link_illustration`, `status_illustration`) VALUES
(1, 'Vector Art', 'Combining artistry and technology, I create detailed vector portraits that highlight the unique features and personality of each subject. These digital artworks are versatile, scalable, and perfect for various applications, from custom illustrations to corporate projects.', 'https://drive.google.com/drive/folders/1oRhpiPqMqVViGVDZ_fmivbjRv_UpWrJ5?usp=drive_link', 1),
(2, 'Microstock', 'Access a curated portfolio of innovative microstock illustrations that bring creativity and versatility to your projects. Each piece is designed to provide visual interest and support diverse themes, making them ideal for a wide range of uses.', 'https://drive.google.com/drive/folders/1_mKk-EgIt_K95cV7HIZLWoAX9EUu3ICi?usp=drive_link', 1),
(3, 'Storyboard', 'Specializing in the art of visual storytelling, I create detailed storyboards that transform concepts into compelling short videos. Each frame is meticulously designed to ensure a seamless flow of scenes, delivering a clear and impactful narrative.', 'https://drive.google.com/drive/folders/1c_qNqTWWuferz0AK9nYoO_iS6h919p_d?usp=drive_link', 1),
(4, 'Coloring Book', 'I design engaging and creative coloring books that inspire imagination and relaxation for all ages. From intricate patterns to themed illustrations, my work showcases a balance of artistic detail and user-friendly layouts, ensuring an enjoyable experience for coloring enthusiasts. Each page is thoughtfully crafted to spark creativity and bring vibrant ideas to life.', 'https://drive.google.com/drive/folders/1wUOLbOoO8P_ppC9wJ27aFN5N5O8qPz8u?usp=drive_link', 1),
(5, 'Other', 'Discover our collection of innovative design work, encompassing everything from engaging greeting cards to dynamic mascots. Our portfolio reflects a passion for crafting visually compelling and memorable designs tailored to diverse needs.', 'https://drive.google.com/drive/folders/1TpiKh4_bfSJ7T5fclqpllt8OCGBRTTSd?usp=drive_link', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_komentar`
--

CREATE TABLE `tbl_komentar` (
  `id_komentar` int(11) NOT NULL,
  `nama_komentar` varchar(100) NOT NULL,
  `isi_komentar` text NOT NULL,
  `halaman_komentar` enum('Home','Graphic Design','Illustration','Web Development','UI/UX Design','Photography') NOT NULL,
  `waktu_komentar` datetime NOT NULL,
  `status_komentar` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_photography`
--

CREATE TABLE `tbl_photography` (
  `id_photography` int(11) NOT NULL,
  `file_photography` text NOT NULL,
  `status_photography` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_photography`
--

INSERT INTO `tbl_photography` (`id_photography`, `file_photography`, `status_photography`) VALUES
(1, 'Photo - 1.jpg', 1),
(2, 'Photo - 2.jpg', 1),
(3, 'Photo - 3.jpg', 1),
(4, 'Photo - 4.jpg', 1),
(5, 'Photo - 5.jpg', 1),
(6, 'Photo - 6.jpg', 1),
(7, 'Photo - 7.jpg', 1),
(8, 'Photo - 8.jpg', 1),
(9, 'Photo - 9.jpg', 1),
(10, 'Photo - 10.jpg', 1),
(11, 'Photo - 11.jpg', 1),
(12, 'Photo - 12.jpg', 1),
(13, 'Photo - 13.jpg', 1),
(14, 'Photo - 14.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_ui_ux_design`
--

CREATE TABLE `tbl_ui_ux_design` (
  `id_ui_ux_design` int(11) NOT NULL,
  `judul_ui_ux_design` varchar(100) NOT NULL,
  `deskripsi_ui_ux_design` text NOT NULL,
  `link_ui_ux_design` text DEFAULT NULL,
  `status_ui_ux_design` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_ui_ux_design`
--

INSERT INTO `tbl_ui_ux_design` (`id_ui_ux_design`, `judul_ui_ux_design`, `deskripsi_ui_ux_design`, `link_ui_ux_design`, `status_ui_ux_design`) VALUES
(1, 'Web Design', 'Highlighting a range of web designs crafted according to detailed client briefs. Each design is a testament to my commitment to translating client ideas into visually compelling and user-friendly websites.', 'https://drive.google.com/drive/folders/1wQ_UpaKtWixyiWXsj85OaDuRe7aZusA1?usp=drive_link', 1),
(2, 'Mobile App Design', 'Browse through my mobile app design projects where functionality meets style. Each design is meticulously crafted to provide a visually appealing and user-friendly experience, enhancing overall app performance.', 'https://drive.google.com/drive/folders/18k6HukApHcGJ9gWvkJqY0AmTJdobNydc?usp=drive_link', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_web_development`
--

CREATE TABLE `tbl_web_development` (
  `id_web_development` int(11) NOT NULL,
  `judul_web_development` varchar(100) NOT NULL,
  `deskripsi_web_development` text NOT NULL,
  `link_web_development` text DEFAULT NULL,
  `status_web_development` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_web_development`
--

INSERT INTO `tbl_web_development` (`id_web_development`, `judul_web_development`, `deskripsi_web_development`, `link_web_development`, `status_web_development`) VALUES
(1, 'Paham Hukum', 'Building and designing the personal website of Paham Hukum using PHP, MySQL, and CodeIgniter 3, that expected to provide more knowledge to the public and can become a media of communication between people who need legal consultation and legal experts.', 'https://pahamhukum.id/', 1),
(2, 'CV. Tamanta Indo Ekspor', 'Building and designing the personal website of CV. Tamanta Indo Ekspor using PHP, MySQL, and CodeIgniter 3, that shows information about the company and services that offered by CV. Tamanta Indo Ekspor.', 'https://tamantaindoekspor.com/id/index.php', 1),
(3, 'Dashboard of PED Division, Telkom Regional 1', 'Modifying the dashboard of PED division, Telkom Regional 1, which contains information about witel data, cb, zfm and zrmm, etc.', NULL, 1),
(4, 'Konflix', 'Duplicating the Netflix webstie using PHP, MySQL, and CodeIgniter 3 to fulfill the assignment for Database Systems subject.', NULL, 1),
(5, 'Almanak HKBP', 'Building a dashboard to monitor HKBP services that presents information about districts, resorts, huria, and the servants. The dashboard also provides information about almanac that includes reflections.', NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_file_graphic_design`
--
ALTER TABLE `tbl_file_graphic_design`
  ADD PRIMARY KEY (`id_file_graphic_design`),
  ADD KEY `id_graphic_design` (`id_graphic_design`);

--
-- Indexes for table `tbl_file_illustration`
--
ALTER TABLE `tbl_file_illustration`
  ADD PRIMARY KEY (`id_file_illustration`),
  ADD KEY `id_illustration` (`id_illustration`);

--
-- Indexes for table `tbl_file_ui_ux_design`
--
ALTER TABLE `tbl_file_ui_ux_design`
  ADD PRIMARY KEY (`id_file_ui_ux_design`),
  ADD KEY `id_ui_ux_design` (`id_ui_ux_design`);

--
-- Indexes for table `tbl_file_web_development`
--
ALTER TABLE `tbl_file_web_development`
  ADD PRIMARY KEY (`id_file_web_development`),
  ADD KEY `id_web_development` (`id_web_development`);

--
-- Indexes for table `tbl_graphic_design`
--
ALTER TABLE `tbl_graphic_design`
  ADD PRIMARY KEY (`id_graphic_design`);

--
-- Indexes for table `tbl_illustration`
--
ALTER TABLE `tbl_illustration`
  ADD PRIMARY KEY (`id_illustration`);

--
-- Indexes for table `tbl_komentar`
--
ALTER TABLE `tbl_komentar`
  ADD PRIMARY KEY (`id_komentar`);

--
-- Indexes for table `tbl_photography`
--
ALTER TABLE `tbl_photography`
  ADD PRIMARY KEY (`id_photography`);

--
-- Indexes for table `tbl_ui_ux_design`
--
ALTER TABLE `tbl_ui_ux_design`
  ADD PRIMARY KEY (`id_ui_ux_design`);

--
-- Indexes for table `tbl_web_development`
--
ALTER TABLE `tbl_web_development`
  ADD PRIMARY KEY (`id_web_development`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_file_graphic_design`
--
ALTER TABLE `tbl_file_graphic_design`
  MODIFY `id_file_graphic_design` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tbl_file_illustration`
--
ALTER TABLE `tbl_file_illustration`
  MODIFY `id_file_illustration` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_file_ui_ux_design`
--
ALTER TABLE `tbl_file_ui_ux_design`
  MODIFY `id_file_ui_ux_design` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_file_web_development`
--
ALTER TABLE `tbl_file_web_development`
  MODIFY `id_file_web_development` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_graphic_design`
--
ALTER TABLE `tbl_graphic_design`
  MODIFY `id_graphic_design` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_illustration`
--
ALTER TABLE `tbl_illustration`
  MODIFY `id_illustration` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_komentar`
--
ALTER TABLE `tbl_komentar`
  MODIFY `id_komentar` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_photography`
--
ALTER TABLE `tbl_photography`
  MODIFY `id_photography` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_ui_ux_design`
--
ALTER TABLE `tbl_ui_ux_design`
  MODIFY `id_ui_ux_design` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_web_development`
--
ALTER TABLE `tbl_web_development`
  MODIFY `id_web_development` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_file_graphic_design`
--
ALTER TABLE `tbl_file_graphic_design`
  ADD CONSTRAINT `id_graphic_design` FOREIGN KEY (`id_graphic_design`) REFERENCES `tbl_graphic_design` (`id_graphic_design`);

--
-- Constraints for table `tbl_file_illustration`
--
ALTER TABLE `tbl_file_illustration`
  ADD CONSTRAINT `id_illustration` FOREIGN KEY (`id_illustration`) REFERENCES `tbl_illustration` (`id_illustration`);

--
-- Constraints for table `tbl_file_ui_ux_design`
--
ALTER TABLE `tbl_file_ui_ux_design`
  ADD CONSTRAINT `id_ui_ux_design` FOREIGN KEY (`id_ui_ux_design`) REFERENCES `tbl_ui_ux_design` (`id_ui_ux_design`);

--
-- Constraints for table `tbl_file_web_development`
--
ALTER TABLE `tbl_file_web_development`
  ADD CONSTRAINT `id_web_development` FOREIGN KEY (`id_web_development`) REFERENCES `tbl_web_development` (`id_web_development`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
