-- VSCode Mysql 접속: mysql.exe -uroot -p
-- SQL CLI COMMAND: mysql -u root -p devko < userdb.sql

DROP DATABASE IF EXISTS devko;
CREATE DATABASE IF NOT EXISTS devko;
USE devko;

-- USERS 테이블
DROP TABLE IF EXISTS devko.users;
CREATE TABLE IF NOT EXISTS users (
     id VARCHAR(64) PRIMARY KEY,
     userName VARCHAR(45),
     profileImage TEXT,
     interestPosition VARCHAR(45),
     interestArea VARCHAR(45),
     selfDescription VARCHAR(100),
     createdAt DATETIME,
     updatedAt DATETIME,
     grade INT,
     notification INT,
     googleId INT,
     naverId INT
);

SELECT * FROM devko.users;

-- GOOGLE USERS 테이블
DROP TABLE IF EXISTS devko.usersgoogle;
CREATE TABLE IF NOT EXISTS usersgoogle (
     id INT AUTO_INCREMENT PRIMARY KEY,
     googleId VARCHAR(128) UNIQUE,
     googleEmail VARCHAR(128),
     googleImage TEXT
);

SELECT * FROM devko.usersgoogle;

CREATE TABLE IF NOT EXISTS usersnaver (
     id INT AUTO_INCREMENT PRIMARY KEY,
     naverId VARCHAR(128) UNIQUE,
     naverEmail VARCHAR(128),
     naverImage TEXT
);

SELECT * FROM devko.usersnaver;

-- FOLLOWERS 테이블
DROP TABLE IF EXISTS devko.followers;
CREATE TABLE IF NOT EXISTS followers (
    id VARCHAR(64) PRIMARY KEY,
    userId VARCHAR(64)
);

SELECT * FROM devko.followers;