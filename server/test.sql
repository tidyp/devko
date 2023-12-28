DROP TABLE devko.users;

CREATE DATABASE IF NOT EXISTS devko;

CREATE TABLE IF NOT EXISTS Users (
     id VARCHAR(64),
     userName VARCHAR(45),
     googleId VARCHAR(45),
     googleEmail VARCHAR(45),
     naverId VARCHAR(45),
     naverEmail VARCHAR(45),
     profileImage BLOB,
     workPosition VARCHAR(64),
     interestArea VARCHAR(64),
     selfDescription TEXT,
     createdAt DATETIME,
     updatedAt DATETIME,
     grade INT,
     notification TINYINT(1)
);

SELECT * FROM devko.users