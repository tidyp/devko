-- VSCode Mysql 접속: mysql.exe -uroot -p

-- SQL CLI COMMAND
-- mysql -u root -p devko < test.sql

CREATE DATABASE IF NOT EXISTS devko;
-- SHOW DATABASES;

-- USERS 테이블
DROP TABLE devko.users;
CREATE TABLE IF NOT EXISTS users (
     id VARCHAR(64),
     userName VARCHAR(45),
     googleId VARCHAR(45),
     googleEmail VARCHAR(45),
     naverId VARCHAR(45),
     naverEmail VARCHAR(45),
     profileImage TEXT,
     workPosition VARCHAR(64),
     interestArea VARCHAR(64),
     selfDescription TEXT,
     createdAt DATETIME,
     updatedAt DATETIME,
     grade INTEGER,
     notification TINYINT(1)
);

SELECT * FROM devko.users;

-- POSTS 테이블
DROP TABLE devko.posts;
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
DROP TABLE devko.comments;
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
