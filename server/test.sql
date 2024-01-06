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

INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('iamjaeeuncho', 'discuss', 'What is javascript?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('6worry', 'discuss', 'What is programming?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('tidypark', 'discuss', 'I hate react!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('lovehyun', 'discuss', 'Today lesson', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('0unk0', 'discuss', 'Seats for this week', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());

SELECT * FROM devko.posts;


-- COMMENTS 테이블
-- DROP TABLE devko.comments;
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
