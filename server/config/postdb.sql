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
    userId VARCHAR(64),
    INDEX idx_comments(postId, category)
);

-- TAGS 테이블
DROP TABLE IF EXISTS devko.tags;
CREATE TABLE IF NOT EXISTS tags (
    id INT,
    name VARCHAR(100),
    category VARCHAR(45),
    postId INT,
    INDEX idx_tags(postId, category)
);

-- LIKES 테이블
DROP TABLE IF EXISTS devko.likes;
CREATE TABLE IF NOT EXISTS likes (
    count INT DEFAULT 0,
    category VARCHAR(45),
    postId INT,
    userId VARCHAR(64),
    INDEX idx_likes(postId, category)
);

-- VIEWS 테이블
DROP TABLE IF EXISTS devko.views;
CREATE TABLE IF NOT EXISTS views (
    count INT DEFAULT 0,
    category VARCHAR(45),
    postId INT,
    INDEX idx_views(postId, category)
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
    userId VARCHAR(64),
    FOREIGN KEY fk_discuss_comments(id, category) REFERENCES comments(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_discuss_tags(id, category) REFERENCES tags(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_discuss_views(id, category) REFERENCES views(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_discuss_likes(id, category) REFERENCES likes(postId, category) ON DELETE CASCADE
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
    userId VARCHAR(64),
    FOREIGN KEY fk_questions_comments(id, category) REFERENCES comments(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_questions_tags(id, category) REFERENCES tags(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_questions_views(id, category) REFERENCES views(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_questions_likes(id, category) REFERENCES likes(postId, category) ON DELETE CASCADE
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
    userId VARCHAR(64),
    FOREIGN KEY fk_teams_comments(id, category) REFERENCES comments(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_teams_tags(id, category) REFERENCES tags(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_teams_views(id, category) REFERENCES views(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_teams_likes(id, category) REFERENCES likes(postId, category) ON DELETE CASCADE
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
    userId VARCHAR(64),
    FOREIGN KEY fk_calendars_comments(id, category) REFERENCES comments(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_calendars_tags(id, category) REFERENCES tags(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_calendars_views(id, category) REFERENCES views(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_calendars_likes(id, category) REFERENCES likes(postId, category) ON DELETE CASCADE
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
    userId VARCHAR(64),
    FOREIGN KEY fk_articles_comments(id, category) REFERENCES comments(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_articles_tags(id, category) REFERENCES tags(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_articles_views(id, category) REFERENCES views(postId, category) ON DELETE CASCADE,
    FOREIGN KEY fk_articles_likes(id, category) REFERENCES likes(postId, category) ON DELETE CASCADE
);