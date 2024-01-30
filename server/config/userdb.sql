-- VSCode Mysql 접속: mysql.exe -uroot -p
-- SQL CLI COMMAND: mysql -u root -p devko < userdb.sql

-- DROP DATABASE IF EXISTS devko;
CREATE DATABASE IF NOT EXISTS devko;
USE devko;

-- FK 사용 가능 여부
-- SET FOREIGN_KEY_CHECKS = 1;

-- FK 제약 삭제
-- ALTER TABLE devko.usersgoogle DROP FOREIGN KEY usersgoogle_ibfk_1; 
-- ALTER TABLE devko.usersnaver DROP FOREIGN KEY usersnaver_ibfk_1;
-- ALTER TABLE devko.followers DROP FOREIGN KEY followers_ibfk_1;

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
     INDEX idx_googleId (googleId),
     INDEX idx_naverId (naverId)
);

SELECT * FROM devko.users;

-- GOOGLE USERS 테이블
DROP TABLE IF EXISTS devko.usersgoogle;
CREATE TABLE IF NOT EXISTS usersgoogle (
     id INT AUTO_INCREMENT PRIMARY KEY,
     googleId VARCHAR(128) UNIQUE,
     googleEmail VARCHAR(128),
     googleImage TEXT,
     FOREIGN KEY(id) REFERENCES users(googleId) ON DELETE CASCADE
);

SELECT * FROM devko.usersgoogle;

-- NAVER USERS 테이블
DROP TABLE IF EXISTS devko.usersnaver;
CREATE TABLE IF NOT EXISTS usersnaver (
     id INT AUTO_INCREMENT PRIMARY KEY,
     naverId VARCHAR(128) UNIQUE,
     naverEmail VARCHAR(128),
     naverImage TEXT,
     FOREIGN KEY(id) REFERENCES users(naverId) ON DELETE CASCADE
);

SELECT * FROM devko.usersnaver;

-- FOLLOWERS 테이블
DROP TABLE IF EXISTS devko.followers;
CREATE TABLE IF NOT EXISTS followers (
    id VARCHAR(64) PRIMARY KEY,
    userId VARCHAR(64),
    FOREIGN KEY(id) REFERENCES users(id) ON DELETE CASCADE
);

SELECT * FROM devko.followers;