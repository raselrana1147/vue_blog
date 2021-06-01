-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2021 at 06:26 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vue_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1=active,2=inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(58, 'PHP', 1, '2021-05-27 12:35:05', '2021-05-27 12:35:05'),
(59, 'Python', 1, '2021-05-27 12:35:17', '2021-05-27 12:35:17'),
(60, 'Java', 1, '2021-05-27 12:35:23', '2021-05-27 12:35:23'),
(61, 'Perl', 1, '2021-05-27 12:35:33', '2021-05-27 12:35:33'),
(62, 'Ruby', 1, '2021-05-27 12:35:38', '2021-05-27 12:35:38'),
(63, 'Javascript', 1, '2021-05-27 12:35:45', '2021-05-27 12:35:45'),
(64, 'Inonic', 1, '2021-05-27 12:35:56', '2021-05-27 12:35:56');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2021_04_09_140440_create_categories_table', 2),
(4, '2021_04_18_165649_create_posts_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tag` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `category_id`, `title`, `author_id`, `image`, `tag`, `slug`, `description`, `created_at`, `updated_at`) VALUES
(3, 58, 'Start new bussines', 1, '1619371862.jpeg', '[\"Start\",\"new\",\"bussines\"]', 'start-new-bussines', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2021-04-18 11:23:35', '2021-04-25 11:31:02'),
(9, 59, 'Last one', 1, '1619371830.jpeg', '[\"Last\",\"one\"]', 'last-one', 'fdsf fdsfds fdsfsd  n bhgtjrt', '2021-04-23 11:05:22', '2021-04-25 11:30:35'),
(11, 61, 'গুরুত্বপূর্ণ লিংক', 1, '1621874106.jpeg', '[\"\\u0997\\u09c1\\u09b0\\u09c1\\u09a4\\u09cd\\u09ac\\u09aa\\u09c2\\u09b0\\u09cd\\u09a3\",\"\\u09b2\\u09bf\\u0982\\u0995\"]', 'গুরুত্বপূর্ণ-লিংক', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '2021-05-24 10:35:08', '2021-05-24 10:35:08'),
(12, 62, 'dsfsdgdsfg', 1, '1621874184.jpeg', '[\"dsfsdgdsfg\"]', 'dsfsdgdsfg', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '2021-05-24 10:36:25', '2021-05-24 10:36:25'),
(13, 63, 'বলে ধারণা করা হচ্ছে।', 1, '1621874629.png', '[\"\\u09ac\\u09b2\\u09c7\",\"\\u09a7\\u09be\\u09b0\\u09a3\\u09be\",\"\\u0995\\u09b0\\u09be\",\"\\u09b9\\u099a\\u09cd\\u099b\\u09c7\\u0964\"]', 'বলে-ধারণা-করা-হচ্ছে।', 'পূর্ব-মধ্য বঙ্গোপসাগর ও তৎসংলগ্ন এলাকায় অবস্থানরত ঘূর্ণিঝড় ইয়াস যে পথে এগোচ্ছে, তাতে এই ঝড় অতি শক্তিশালী ঘূর্ণিঝড় হিসেবে ভারতের ওডিশা ও পশ্চিমবঙ্গের উপকূলীয় এলাকার মাঝামাঝিতে আঘাত হানবে বলে ধারণা করা হচ্ছে।\n সোমবার সন্ধ্যায় ভারতের আবহাওয়া অধিদপ্তরের সর্বশেষ বুলেটিনে বলা হয়েছে, গত ছয় ঘণ্টায় ঘূর্ণিঝড় ইয়াস ঘণ্টায় ৭ কিলোমিটার বেগে উত্তর ও উত্তর-পশ্চিম দিকে এগিয়েছে। এটা আরও উত্তর ও উত্তর-পশ্চিম দিকে এগোবে বলে ধারণা করা হচ্ছে। আগামী ১২ ঘণ্টায় শক্তি সঞ্চয় করে ইয়াস প্রবল ঘূর্ণিঝড়ে রূপ নেবে। পরের ২৪ ঘণ্টায় আরও শক্তি নিয়ে হয়ে উঠবে অতি প্রবল ঘূর্ণিঝড়।\n\nঘূর্ণিঝড়টি আরও উত্তর ও উত্তর-পশ্চিম দিকে এগিয়ে বুধবার সকাল নাগাদ ওডিশা ও পশ্চিমবঙ্গ উপকূলের কাছাকাছি পৌঁছাবে। ওই দিন দুপুর নাগাদ ওডিশার পারাদ্বীপ এবং পশ্চিমবঙ্গের সাগরদ্বীপের মধ্যে ওডিশার বালাসোরের কাছ দিয়ে উপকূল অতিক্রম করবে বলে ধারণা করা হচ্ছে।', '2021-05-24 10:43:49', '2021-05-24 10:43:49'),
(14, 64, 'ি সব বড়', 1, '1621874735.jpeg', '[\"\\u09bf\",\"\\u09b8\\u09ac\",\"\\u09ac\\u09dc\"]', 'ি-সব-বড়', 'বলা হচ্ছে ১৯২৯ এবং ২০০৯ সালের মহামন্দার চেয়েও করোনা বৈশ্বিক অর্থনীতিতে বড় ধরনের নেতিবাচক প্রভাব ফেলেছে। ২০২০ সালে কেবল চীন ছাড়া অর্থনৈতিক সংকোচন দেখেছে বিশ্বের বাকি সব বড় অর্থনীতির দেশগুলো। কার্যকর একটি টিকা আসার আগ পর্যন্ত সংক্রমণ মোকাবিলায় হিমশিম খেতে হয়েছে যুক্তরাষ্ট্র, যুক্তরাজ্যের মতো বড় অর্থনীতিগুলোকেও। বিশ্বব্যাংকের তথ্য অনুযায়ী, করোনাভাইরাসের কারণে সৃষ্ট মহামারিতে ২০২০ সালে বৈশ্বিক অর্থনীতি ৪ দশমিক ৩ শতাংশ সংকুচিত হয়েছে। \n\nতবে সংস্থাটি মনে করছে, ২০২১ সালে ৪ শতাংশ প্রবৃদ্ধি আসতে পারে। তবে করোনার মধ্য দিয়ে ইতিমধ্যে নতুন বছরেরও সাড়ে চার মাস কেটে গেছে। চলতি বছরের প্রথম প্রান্তিকে বিশ্বের কোন দেশের অর্থনীতি কতটুকু ঘুরে দাঁড়িয়েছে, তাই এখন দেখার বিষয়।', '2021-05-24 10:45:35', '2021-05-24 10:45:35');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Rasel Rana', 'raselrana1147@gmail.com', NULL, '123', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
