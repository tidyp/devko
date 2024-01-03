-- Mysql 접속: mysql.exe -uroot -p
SHOW DATABASES;
CREATE DATABASE IF NOT EXISTS devko;
USER devko;
SHOW TABLES;

-- USERS 테이블
-- DROP TABLE devko.users;
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
-- DROP TABLE devko.posts;
CREATE TABLE IF NOT EXISTS posts (
     userId VARCHAR(64),
     id INT AUTO_INCREMENT PRIMARY KEY,
     category VARCHAR(45),
     title VARCHAR(45),
     content TEXT,
     createdAt DATETIME,
     updatedAt DATETIME
);

INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('user_id1', 'discuss', '테스트1', '테스트1의 내용', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('user_id2', 'discuss', '테스트2', '테스트2의 내용', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('user_id3', 'discuss', '테스트3', '테스트3의 내용', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('user_id4', 'discuss', '테스트4', '테스트4의 내용', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('user_id5', 'discuss', '테스트5', '테스트5의 내용', NOW(), NOW());

SELECT * FROM devko.posts;