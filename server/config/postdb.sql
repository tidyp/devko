-- VSCode Mysql 접속: mysql.exe -uroot -p
-- SQL CLI COMMAND: mysql -u root -p devko < postdb.sql

-- POSTS 테이블
DROP TABLE IF EXISTS devko.posts;
CREATE TABLE IF NOT EXISTS posts (
     userId VARCHAR(64),
     id INT AUTO_INCREMENT PRIMARY KEY,
     category VARCHAR(45),
     title VARCHAR(45),
     content TEXT,
     createdAt DATETIME,
     updatedAt DATETIME
);

SELECT * FROM devko.posts;

-- COMMENTS 테이블
DROP TABLE IF EXISTS devko.comments;
CREATE TABLE IF NOT EXISTS comments (
     userId VARCHAR(64),
     postId INT,
     id INT AUTO_INCREMENT PRIMARY KEY,
     mainId INT,
     content TEXT,
     createdAt DATETIME,
     updatedAt DATETIME
);

SELECT * FROM devko.comments;

-- TAGS 테이블
DROP TABLE IF EXISTS devko.tags;
CREATE TABLE IF NOT EXISTS tags (
    postId INT,
    id INT,
    name TEXT
);

-- LIKES 테이블
DROP TABLE IF EXISTS devko.likes;
CREATE TABLE IF NOT EXISTS likes (
    userId VARCHAR(64),
    postId INT,
    count INT DEFAULT 0
);

-- VIEWS 테이블
DROP TABLE IF EXISTS devko.views;
CREATE TABLE IF NOT EXISTS views (
    postId INT,
    count INT DEFAULT 0
);

-- TEAMS 테이블
DROP TABLE IF EXISTS devko.teams;
CREATE TABLE IF NOT EXISTS teams  (
    userId VARCHAR(64),
    tagID INT,
    commentId INT,
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45),
    content TEXT,
    location VARCHAR(45),
    category VARCHAR(45),
    peopleNumber INT,
    workPosition VARCHAR(45),
    startDate DATETIME,
    endDate DATETIME,
    createdAt DATETIME,
    updatedAt DATETIME
);

-- EVENTS 테이블
DROP TABLE IF EXISTS devko.events;
CREATE TABLE IF NOT EXISTS events (
    userId VARCHAR(64),
    tagID INT,
    commentId INT,
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45),    
    content TEXT,
    location VARCHAR(45),
    category VARCHAR(45),
    startDate DATETIME,
    endDate DATETIME,
    createdAt DATETIME,
    updatedAt DATETIME
);

