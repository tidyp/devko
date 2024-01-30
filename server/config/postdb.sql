-- VSCode Mysql 접속: mysql.exe -uroot -p
-- SQL CLI COMMAND: mysql -u root -p devko < postdb.sql

-- FK 제약 삭제
SET FOREIGN_KEY_CHECKS = 0;

-- COMMENTS 테이블
DROP TABLE IF EXISTS devko.comments;
CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mainId INT,
    content TEXT,
    createdAt DATETIME,
    updatedAt DATETIME,
    category VARCHAR(45),
    postId INT,
    userId VARCHAR(64)
);

-- TAGS 테이블
DROP TABLE IF EXISTS devko.tags;
CREATE TABLE IF NOT EXISTS tags (
    id INT,
    name VARCHAR(100),
    category VARCHAR(45),
    postId INT
);

-- LIKES 테이블
DROP TABLE IF EXISTS devko.likes;
CREATE TABLE IF NOT EXISTS likes (
    count INT DEFAULT 0,
    category VARCHAR(45),
    postId INT,
    userId VARCHAR(64)
);

-- VIEWS 테이블
DROP TABLE IF EXISTS devko.views;
CREATE TABLE IF NOT EXISTS views (
    count INT DEFAULT 0,
    category VARCHAR(45),
    postId INT
);

-- DISCUSS 테이블
DROP TABLE IF EXISTS devko.discuss;
CREATE TABLE IF NOT EXISTS discuss (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(45) DEFAULT 'discuss',
    title VARCHAR(100),
    content TEXT,
    createdAt DATETIME,
    updatedAt DATETIME,
    userId VARCHAR(64)
);

-- Q&A 테이블
DROP TABLE IF EXISTS devko.questions;
CREATE TABLE IF NOT EXISTS questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(45) DEFAULT 'questions',
    title VARCHAR(100),
    content TEXT,
    createdAt DATETIME,
    updatedAt DATETIME,
    userId VARCHAR(64)
);

-- GROUP 테이블
DROP TABLE IF EXISTS devko.teams;
CREATE TABLE IF NOT EXISTS teams  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(45) DEFAULT 'teams',
    title VARCHAR(100),
    content TEXT,
    section VARCHAR(45),
    members INT,
    workPosition VARCHAR(45),
    startDate DATETIME,
    endDate DATETIME,
    location VARCHAR(45),
    createdAt DATETIME,
    updatedAt DATETIME,
    userId VARCHAR(64)
);

-- EVENT 테이블
DROP TABLE IF EXISTS devko.calendars;
CREATE TABLE IF NOT EXISTS calendars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(45) DEFAULT 'calendars',
    title VARCHAR(100),
    content TEXT,
    section VARCHAR(45),
    startDate DATETIME,
    endDate DATETIME,
    location VARCHAR(45),
    createdAt DATETIME,
    updatedAt DATETIME,
    userId VARCHAR(64)
);

-- ARTICLE 테이블
DROP TABLE IF EXISTS devko.articles;
CREATE TABLE IF NOT EXISTS articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(45) DEFAULT 'articles',
    title VARCHAR(100),
    content TEXT,
    link VARCHAR(100),
    createdAt DATETIME,
    updatedAt DATETIME,
    userId VARCHAR(64)
);