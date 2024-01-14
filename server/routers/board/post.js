const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../../config/db");

// 테스트 코드
router.get("/list", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "post.html"));
});

router.get("/view/:postid", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "postview.html"));
});

router.get("/write/list", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "postwrite.html"));
});

router.get("/write/data", (req, res) => {
  const user = req.cookies.googleEmail;
  res.json(user);
});

router.get("/edit/data/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const sql = `
    SELECT p.userId AS userId
          , p.id AS id
          , p.category AS category
          , p.title AS title
          , p.content AS content
          , p.createdAt AS createdAt
          , p.updatedAt AS updatedAt
          , t.id AS tagId
          , t.name AS tag
          , u.userName AS userName
          , u.profileImage AS profileImage
          , u.grade AS grade
    FROM posts p
    LEFT OUTER JOIN tags t ON p.id = t.postId 
    LEFT OUTER JOIN users u ON p.userId = u.id
    WHERE p.id = ?
    ORDER BY p.createdAt ASC
    `;
    const [rows, fields] = await db.query(sql, [postId]);
    res.json(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/edit/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "postedit.html"));
});

// 게시글 전체 목록 보기
router.get("/", async (req, res) => {
  try {
    const sql = `
    SELECT p.userId AS userId
          , p.id AS id
          , p.category AS category
          , p.title AS title
          , p.content AS content
          , p.createdAt AS createdAt
          , p.updatedAt AS updatedAt
          , u.userName AS userName
          , u.profileImage AS profileImage
          , u.grade AS grade
    FROM posts p
    LEFT OUTER JOIN likes l ON p.id = l.postId
    LEFT OUTER JOIN users u ON p.userId = u.id
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
    const postId = req.params.id;
    const sql = `
    SELECT p.userId AS userId
          , p.id AS id
          , p.category AS category
          , p.title AS title
          , p.content AS content
          , p.createdAt AS createdAt
          , p.updatedAt AS updatedAt
          , t.id AS tagId
          , t.name AS tag
          , u.userName AS userName
          , u.profileImage AS profileImage
          , u.grade AS grade
    FROM posts p
    LEFT OUTER JOIN tags t ON p.id = t.postId
    LEFT OUTER JOIN users u ON p.userId = u.id
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

// 각 메뉴별 페이징된 게시물 보기
router.get("/:category/:page", async (req, res) => {
  try {
    const category = req.params.category;
    const sql = `
    SELECT p.userId AS userId
          , p.id AS id
          , p.category AS category
          , p.title AS title
          , p.content AS content
          , p.createdAt AS createdAt
          , p.updatedAt AS updatedAt
          , u.userName AS userName
          , u.profileImage AS profileImage
          , u.grade AS grade
    FROM posts p
    LEFT OUTER JOIN users u ON p.userId = u.id
    WHERE p.category = ?
    ORDER BY p.createdAt ASC
    `;
    const [rows, fields] = await db.query(sql, [category]);

    const itemsPerPage = 10;
    const page = parseInt(req.params.page) || 1;

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currPageRows = rows.slice(startIndex, endIndex);
    const totalPages = Math.ceil(rows.length / itemsPerPage);

    res.json({
      currPageRows,
      totalPages,
      page,
    });
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

    const postSql = `INSERT INTO posts (userId, title, content, category, createdAt, updatedAt) VALUES (?, ?, ?, ?, now(), now());`;
    const setSql = `SET @last_id = LAST_INSERT_ID();`;
    const likeSql = `INSERT INTO likes (postId) VALUES (@last_id)`;
    const viewSql = `INSERT INTO views (postId) VALUES (@last_id)`;

    const [rows, fields] = await db.query(postSql, [
      user,
      title,
      content,
      category,
    ]);
    await db.query(setSql);
    await db.query(likeSql);
    await db.query(viewSql);
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

  const sql = `UPDATE posts SET title = ?, content = ?, updatedAt = NOW() WHERE id = ?`;

  try {
    const [rows, fields] = await db.query(sql, [title, content, postId]);
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
    const likeSql = `DELETE FROM likes WHERE postId = ?`;
    const viewSql = `DELETE FROM views WHERE postId = ?`;

    const [rows, fields] = await db.query(postSql, [postId]);
    await db.query(likeSql, [postId]);
    await db.query(viewSql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
