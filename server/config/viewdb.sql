-- VSCode Mysql 접속: mysql.exe -uroot -p
-- SQL CLI COMMAND: mysql -u root -p devko < viewdb.sql

-- USERS 테이블 통합
DROP VIEW IF EXISTS devko.usersView;

CREATE VIEW usersView AS 
SELECT u.id AS id
    , u.userName AS userName
    , u.profileImage AS profileImage
    , u.grade AS grade
    , ug.googleId AS googleId
    , ug.googleEmail AS googleEmail
    , ug.googleImage AS googleImage
    , un.naverId AS naverId
    , un.naverEmail AS naverEmail
    , un.naverImage AS naverImage
FROM users u
LEFT OUTER JOIN usersgoogle ug ON u.googleId = ug.id
LEFT OUTER JOIN usersnaver un ON u.naverId = un.id
;

SELECT * FROM usersView;

-- 전체 게시판 통합
DROP VIEW IF EXISTS devko.boardsView;

CREATE VIEW boardsView AS 
(SELECT id, category, title, content, createdAt, updatedAt, userId FROM discuss)
UNION (SELECT id, category, title, content, createdAt, updatedAt, userId FROM questions)
UNION (SELECT id, category, title, content, createdAt, updatedAt, userId FROM teams)
UNION (SELECT id, category, title, content, createdAt, updatedAt, userId FROM calendars)
UNION (SELECT id, category, title, content, createdAt, updatedAt, userId FROM articles)
;

SELECT * FROM boardsView;

-- 게시글 보기
DROP VIEW IF EXISTS devko.postsView;

CREATE VIEW postsView AS 
SELECT b.id AS postId
	, b.category AS category
    , b.title AS title
    , b.content AS content
    , b.createdAt AS createdAt
    , b.updatedAt AS updatedAt
    , u.id AS userId
	, u.userName AS userName
	, u.profileImage AS profileImage
	, u.grade AS grade
    , c.count AS commentCnt
    , t.id AS tagId
    , t.name AS tagName
    , l.count AS likeCnt
    , v.count AS viewCnt
FROM boardsView b
LEFT OUTER JOIN usersView u ON b.userId = u.id
LEFT OUTER JOIN (SELECT category, postId, COUNT(id) AS count FROM comments GROUP BY category, postId) c ON b.id = c.postId AND b.category = c.category
LEFT OUTER JOIN (SELECT category, postId, GROUP_CONCAT(name) AS name FROM devko.tags GROUP BY category, postId) t ON b.id = t.postId AND b.category = t.category
LEFT OUTER JOIN (SELECT category, postId, SUM(count) AS count FROM likes GROUP BY category, postId) l ON b.id = l.postId AND b.category = l.category
LEFT OUTER JOIN views v ON b.id = v.postId AND b.category = v.category
ORDER BY b.createdAt ASC
;

SELECT * FROM postsView;

-- 커뮤니티 점수 보기
DROP VIEW IF EXISTS devko.totalwritesView;

CREATE VIEW totalwritesView AS
SELECT uv.id AS userId, 
          bv.count AS postCnt,
          c.count AS commentCnt,
          bvt.count AS teamCnt
FROM usersView uv
LEFT OUTER JOIN (SELECT userId, COUNT(*) AS count FROM boardsView GROUP BY userId) bv ON uv.id = bv.userId
LEFT OUTER JOIN (SELECT userId, COUNT(*) AS count FROM boardsView bv WHERE bv.category = 'group' GROUP BY userId) bvt ON uv.id = bvt. userId
LEFT OUTER JOIN (SELECT userId, COUNT(*) AS count FROM comments GROUP BY userId)
;

SELECT * FROM totalwritesView;