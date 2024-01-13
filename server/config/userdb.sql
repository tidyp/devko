-- VSCode Mysql 접속: mysql.exe -uroot -p
-- SQL CLI COMMAND: mysql -u root -p devko < userdb.sql

CREATE DATABASE IF NOT EXISTS devko;
SHOW DATABASES;

-- USERS 테이블
DROP TABLE devko.users;
CREATE TABLE IF NOT EXISTS users (
     id VARCHAR(64),
     userName VARCHAR(45),
     profileImage TEXT,
     workPosition VARCHAR(64),
     interestArea VARCHAR(64),
     selfDescription TEXT,
     createdAt DATETIME,
     updatedAt DATETIME,
     grade INT,
     notification INT
);

INSERT INTO users (id, userName) VALUES ('iamjaeeuncho', 'iamjaeeuncho');
INSERT INTO users (id, userName) VALUES ('6worry', '6worry');
INSERT INTO users (id, userName) VALUES ('tidypark', 'tidypark');
INSERT INTO users (id, userName) VALUES ('lovehyun', 'lovehyun');
INSERT INTO users (id, userName) VALUES ('0unk0', '0unk0');
INSERT INTO users (id, userName) VALUES ('dukkov', 'dukkov');
INSERT INTO users (id, userName) VALUES ('can-robot21', 'can-robot21');
INSERT INTO users (id, userName) VALUES ('ohjmi', 'ohjmi');
INSERT INTO users (id, userName) VALUES ('WhyBusyy', 'WhyBusyy');
INSERT INTO users (id, userName) VALUES ('sunnyvrvr', 'sunnyvrvr');
INSERT INTO users (id, userName) VALUES ('devzelly', 'devzelly');
INSERT INTO users (id, userName) VALUES ('asylee02', 'asylee02');

SELECT * FROM devko.users;

-- GOOGLE USERS 테이블
DROP TABLE devko.usersGoogle;
CREATE TABLE IF NOT EXISTS usersGoogle (
     id VARCHAR(64),
     googleId VARCHAR(45),
     googleEmail VARCHAR(45),
     googleImage TEXT
);

SELECT * FROM devko.usersGoogle;

-- NAVER USERS 테이블
DROP TABLE devko.usersNaver;
CREATE TABLE IF NOT EXISTS usersNaver (
     id VARCHAR(64),
     naverId VARCHAR(45),
     naverEmail VARCHAR(45),
     naverImage TEXT
);

SELECT * FROM devko.usersNaver;
