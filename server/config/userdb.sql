-- VSCode Mysql 접속: mysql.exe -uroot -p
-- SQL CLI COMMAND: mysql -u root -p devko < userdb.sql

CREATE DATABASE IF NOT EXISTS devko;
-- USE devko;
-- SHOW DATABASES;

-- FK 사용 가능 여부
-- SET FOREIGN_KEY_CHECKS = 1;

-- GOOGLE USERS 테이블
DROP TABLE IF EXISTS devko.usersgoogle;
CREATE TABLE IF NOT EXISTS usersgoogle (
     id INT AUTO_INCREMENT PRIMARY KEY,
     googleId VARCHAR(128) UNIQUE,
     googleEmail VARCHAR(128),
     googleImage TEXT
);

SELECT * FROM devko.usersgoogle;

-- NAVER USERS 테이블
DROP TABLE IF EXISTS devko.usersnaver;
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
    id VARCHAR(64),
    userId VARCHAR(64)
);

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
     naverId INT,
     FOREIGN KEY (googleId) REFERENCES devko.usersgoogle(id) ON DELETE CASCADE,
     FOREIGN KEY (naverId) REFERENCES devko.usersnaver(id) ON DELETE CASCADE,
     FOREIGN KEY (id) REFERENCES devko.followers(id) ON DELETE CASCADE
);

SELECT * FROM devko.users;
