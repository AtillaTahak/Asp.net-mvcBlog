USE [master]
GO
/****** Object:  Database [blog]    Script Date: 31.3.2017 08:16:37 ******/
CREATE DATABASE [blog]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'blog', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\blog.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'blog_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\blog_log.ldf' , SIZE = 5184KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [blog] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [blog].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [blog] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [blog] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [blog] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [blog] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [blog] SET ARITHABORT OFF 
GO
ALTER DATABASE [blog] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [blog] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [blog] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [blog] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [blog] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [blog] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [blog] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [blog] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [blog] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [blog] SET  DISABLE_BROKER 
GO
ALTER DATABASE [blog] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [blog] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [blog] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [blog] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [blog] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [blog] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [blog] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [blog] SET RECOVERY FULL 
GO
ALTER DATABASE [blog] SET  MULTI_USER 
GO
ALTER DATABASE [blog] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [blog] SET DB_CHAINING OFF 
GO
ALTER DATABASE [blog] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [blog] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [blog] SET DELAYED_DURABILITY = DISABLED 
GO
USE [blog]
GO
/****** Object:  Table [dbo].[admin]    Script Date: 31.3.2017 08:16:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[admin](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[KAdi] [nvarchar](50) NULL,
	[Pass] [nvarchar](50) NULL,
 CONSTRAINT [PK_admin] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Haber]    Script Date: 31.3.2017 08:16:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Haber](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[HaberBaslik] [nvarchar](50) NULL,
	[HaberIcerik] [nvarchar](100) NULL,
	[Haber] [text] NULL,
	[HaberResim] [text] NULL,
	[Kategori] [int] NULL,
	[Tarih] [date] NULL CONSTRAINT [DF_Haber_Tarih]  DEFAULT (getdate()),
	[YorumId] [int] NULL,
	[HaberResimK] [text] NULL,
 CONSTRAINT [PK_Haber] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Hakkimda]    Script Date: 31.3.2017 08:16:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Hakkimda](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[HakkimdaYazi] [text] NULL,
	[HakkimdaFoto] [text] NULL,
	[HakkimdaResim] [text] NULL,
	[HakkimdaAd] [nvarchar](50) NULL,
	[HakkimdaSoyAd] [nvarchar](50) NULL,
 CONSTRAINT [PK_Hakkimda] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Yorumlar]    Script Date: 31.3.2017 08:16:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Yorumlar](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Yorum] [nvarchar](100) NULL,
	[YorumAd] [nvarchar](50) NULL,
	[YorumMail] [nvarchar](50) NULL,
	[YorumOnay] [int] NULL,
	[YorumId] [int] NULL,
 CONSTRAINT [PK_Yorumlar] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[admin] ON 

INSERT [dbo].[admin] ([id], [KAdi], [Pass]) VALUES (1, N'Mustafa', N'123456')
SET IDENTITY_INSERT [dbo].[admin] OFF
SET IDENTITY_INSERT [dbo].[Haber] ON 

INSERT [dbo].[Haber] ([id], [HaberBaslik], [HaberIcerik], [Haber], [HaberResim], [Kategori], [Tarih], [YorumId], [HaberResimK]) VALUES (1, N'Şok ŞOk', N'Mustafa Uçan', N'ne olduğuunu bilmiyorum ', N'/images/upload/blog-thumb-style2-image4.jpg', 1, CAST(N'2016-11-09' AS Date), 1, N'/images/upload/recent-thumbnail1.jpg')
INSERT [dbo].[Haber] ([id], [HaberBaslik], [HaberIcerik], [Haber], [HaberResim], [Kategori], [Tarih], [YorumId], [HaberResimK]) VALUES (3, N'Deneme Haber', N'Bu bir denemedir', N'Bakalım nasil olacak inşallah güzel olacak', N'/images/buyuk/Chrysanthemum9bd59734-671a-418a-a732-991de7468db6.jpg', 1, CAST(N'2016-06-15' AS Date), NULL, N'/images/kck/Hydrangeas - Kopya8ebd7798-5d56-4c27-b8f5-2ce9f59cdf3c.jpg')
SET IDENTITY_INSERT [dbo].[Haber] OFF
SET IDENTITY_INSERT [dbo].[Hakkimda] ON 

INSERT [dbo].[Hakkimda] ([id], [HakkimdaYazi], [HakkimdaFoto], [HakkimdaResim], [HakkimdaAd], [HakkimdaSoyAd]) VALUES (1, N'vs vsvs vsvs vsvs vsvs vsvs vsvs vsvs vsvs vsvs vsvs vsvs vsvs vssvs vsvs vsvs vsvs vsvs vs', N'/images/upload/team1.jpg', N'/images/upload/about-us-feature-image.jpg', NULL, NULL)
SET IDENTITY_INSERT [dbo].[Hakkimda] OFF
SET IDENTITY_INSERT [dbo].[Yorumlar] ON 

INSERT [dbo].[Yorumlar] ([id], [Yorum], [YorumAd], [YorumMail], [YorumOnay], [YorumId]) VALUES (1, NULL, N'Atilla', N'Taha@sada.com', NULL, 1)
INSERT [dbo].[Yorumlar] ([id], [Yorum], [YorumAd], [YorumMail], [YorumOnay], [YorumId]) VALUES (2, N'asdasd', N'MAhmut', N'mahmut@mahmut', NULL, 1)
INSERT [dbo].[Yorumlar] ([id], [Yorum], [YorumAd], [YorumMail], [YorumOnay], [YorumId]) VALUES (3, N'asdasdasdasdas', N'Atilla', N'atilla@malatya.com', NULL, 3)
SET IDENTITY_INSERT [dbo].[Yorumlar] OFF
USE [master]
GO
ALTER DATABASE [blog] SET  READ_WRITE 
GO
