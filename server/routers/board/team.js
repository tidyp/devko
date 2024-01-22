const express = require("express");
const router = express.Router();
const db = require("../../config/db");

// 게시글 전체 목록 보기
router.get("/", async (req, res) => {
  try {
    const sql = `
      SELECT p.id AS postId
          , p.category AS category
          , p.title AS title
          , p.content AS content
          , p.createdAt AS createdAt
          , p.updatedAt AS updatedAt
          , t.id AS teamId
          , t.location AS location
          , t.section AS section
          , t.members AS members
          , t.workPosition AS workPosition
          , t.startDate AS startDate
          , t.endDate AS endDate
          , l.count AS likecnt
          , v.count AS viewcnt
          , u.id AS userId
          , u.userName AS userName
          , u.profileImage AS profileImage
          , u.grade AS grade
      FROM posts p
      LEFT OUTER JOIN teams t ON p.id = t.postId
      LEFT OUTER JOIN likes l ON p.id = l.postId
      LEFT OUTER JOIN views v ON p.id = v.postId
      LEFT OUTER JOIN (
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
        LEFT OUTER JOIN usersnaver un ON u.naverId = un.id) u ON p.userId = u.id
      ORDER BY p.createdAt ASC
      `;
    const [rows, fields] = await db.query(sql);
    res.json(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 해당 게시글 보기
router.get("/:id", async (req, res) => {
  try {
    // 조회수 로직 추가
    const viewpostId = req.params.id;
    const viewsql = `UPDATE views SET count = count + 1 WHERE postId = ?`;
    const [row, field] = await db.query(viewsql, [viewpostId]);

    const postId = req.params.id;
    const sql = `
    SELECT p.id AS postId
          , p.category AS category
          , p.title AS title
          , p.content AS content
          , p.createdAt AS createdAt
          , p.updatedAt AS updatedAt
          , t.id AS teamId
          , t.location AS location
          , t.section AS section
          , t.members AS members
          , t.workPosition AS workPosition
          , t.startDate AS startDate
          , t.endDate AS endDate
          , l.count AS likecnt
          , v.count AS viewcnt
          , u.id AS userId
          , u.userName AS userName
          , u.profileImage AS profileImage
          , u.grade AS grade
    FROM posts p
    LEFT OUTER JOIN teams t ON p.id = t.postId
    LEFT OUTER JOIN likes l ON p.id = l.postId
    LEFT OUTER JOIN views v ON p.id = v.postId
    LEFT OUTER JOIN (
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
      LEFT OUTER JOIN usersnaver un ON u.naverId = un.id) u ON p.userId = u.id
    WHERE p.id = ?
    ORDER BY p.createdAt ASC
    `;
    const [rows, fields] = await db.query(sql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 게시글 쓰기
router.post("/", async (req, res) => {
  try {
    const user = req.body.userId;
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;

    const location = req.body.location;
    const section = req.body.section;
    const members = req.body.members;
    const workPosition = req.body.workPosition;
    const endDate = req.body.endDate;

    const postSql = `INSERT INTO posts (userId, title, content, category, createdAt, updatedAt) VALUES (?, ?, ?, ?, NOW(), NOW());`;
    const setSql = `SET @last_id = LAST_INSERT_ID();`;
    const teamSql = `INSERT INTO teams (userId, postId, location, section, members, workPosition, startDate, endDate) VALUES (?, @last_id, ?, ?, ?, ?, NOW(), ?)`;
    const likeSql = `INSERT INTO likes (postId) VALUES (@last_id)`;
    const viewSql = `INSERT INTO views (postId) VALUES (@last_id)`;

    await db.query(postSql, [user, title, content, category]);
    await db.query(setSql);
    await db.query(likeSql);
    await db.query(viewSql);
    const [rows, fields] = await db.query(teamSql, [
      user,
      location,
      section,
      members,
      workPosition,
      endDate,
    ]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 게시글 수정
router.put("/:id", async (req, res) => {
  const postId = req.params.id;
  const title = req.body.title;
  const content = req.body.content;

  const location = req.body.location;
  const section = req.body.section;
  const members = req.body.members;
  const workPosition = req.body.workPosition;
  const endDate = req.body.endDate;

  const postSql = `UPDATE posts SET title = ?, content = ?, updatedAt = NOW() WHERE id = ?`;
  const teamSql = `UPDATE teams SET location = ?, section = ?, members = ?, workPosition = ?, endDate = ? WHERE PostId = ?`;

  try {
    await db.query(postSql, [title, content, postId]);
    const [rows, fields] = await db.query(teamSql, [
      location,
      section,
      members,
      workPosition,
      endDate,
      postId,
    ]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 게시글 삭제
router.delete("/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    const postSql = `DELETE FROM posts WHERE id = ?`;
    const teamSql = `DELETE FROM teams WHERE postId = ?`;
    const likeSql = `DELETE FROM likes WHERE postId = ?`;
    const viewSql = `DELETE FROM views WHERE postId = ?`;

    const [rows, fields] = await db.query(postSql, [postId]);
    await db.query(teamSql, [postId]);
    await db.query(likeSql, [postId]);
    await db.query(viewSql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
