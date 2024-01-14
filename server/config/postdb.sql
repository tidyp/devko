-- VSCode Mysql 접속: mysql.exe -uroot -p
-- SQL CLI COMMAND: mysql -u root -p devko < postdb.sql

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

INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('iamjaeeuncho', 'discuss', 'Want to be a developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('6worry', 'discuss', 'Game Master', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('tidypark', 'discuss', 'I hate react!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('lovehyun', 'discuss', 'Today lesson', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('0unk0', 'discuss', 'Seats for this week', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('dukkov', 'discuss', 'Timetable', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('can-robot21', 'discuss', 'How to draw ERD', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('ohjmi', 'discuss', 'Frontend developer wanted', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('WhyBusyy', 'discuss', 'Keep working on it', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('sunnyvrvr', 'discuss', 'What is Java and Spring?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('devzelly', 'discuss', 'What is programming?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());
INSERT INTO posts (userId, category, title, content, createdAt, updatedAt) VALUES ('asylee02', 'discuss', 'Reat is ...', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), NOW());

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

INSERT INTO comments (userId, postId, content, createdAt, updatedAt) VALUES ('iamjaeeuncho', 2, 'OTL', NOW(), NOW());
INSERT INTO comments (userId, postId, content, createdAt, updatedAt) VALUES ('tidypark', 2, 'IDK', NOW(), NOW());
INSERT INTO comments (userId, postId, content, createdAt, updatedAt) VALUES ('6worry', 2, 'Almost done.', NOW(), NOW());
INSERT INTO comments (userId, postId, content, createdAt, updatedAt) VALUES ('lovehyun', 2, 'Any questions?', NOW(), NOW());
INSERT INTO comments (userId, postId, content, createdAt, updatedAt) VALUES ('0unk0', 2, 'Fighting', NOW(), NOW());
INSERT INTO comments (userId, postId, content, createdAt, updatedAt) VALUES ('dukkov', 2, 'Cheer Up', NOW(), NOW());
INSERT INTO comments (userId, postId, content, createdAt, updatedAt) VALUES ('can-robot21', 2, 'Keep going', NOW(), NOW());
INSERT INTO comments (userId, postId, content, createdAt, updatedAt) VALUES ('ohjmi', 2, 'Genius', NOW(), NOW());
INSERT INTO comments (userId, postId, content, createdAt, updatedAt) VALUES ('WhyBusyy', 2, 'We can do it', NOW(), NOW());
INSERT INTO comments (userId, postId, content, createdAt, updatedAt) VALUES ('sunnyvrvr', 2, 'What?', NOW(), NOW());
INSERT INTO comments (userId, postId, content, createdAt, updatedAt) VALUES ('devzelly', 2, 'Masterpiece', NOW(), NOW());
INSERT INTO comments (userId, postId, content, createdAt, updatedAt) VALUES ('asylee02', 2, 'WOW', NOW(), NOW());

SELECT * FROM devko.comments;

-- TAGS 테이블
DROP TABLE devko.tags;
CREATE TABLE IF NOT EXISTS tags (
    postId INT,
    id INT,
    name TEXT
);

-- LIKES 테이블
DROP TABLE devko.likes;
CREATE TABLE IF NOT EXISTS likes (
    userId VARCHAR(64),
    postId INT,
    count INT DEFAULT 0
);

-- VIEWS 테이블
DROP TABLE devko.views;
CREATE TABLE IF NOT EXISTS views (
    postId INT,
    count INT DEFAULT 0
);
