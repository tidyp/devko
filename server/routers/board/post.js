const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../../config/db");
require("dotenv").config();

// 게시글 목록 보기
router.get("/list", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "post.html"));
});

router.get("/:page", async (req, res) => {
  try {
    const sql = `SELECT * FROM posts p LEFT OUTER JOIN users u ON p.userId = u.id ORDER BY p.createdAt ASC`;
    const [rows, fields] = await db.query(sql);

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
router.get("/write", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "postwrite.html"));
});

router.get("/write/data", (req, res) => {
  const user = req.cookies.googleEmail;
  res.json(user);
});

router.post("/", async (req, res) => {
  try {
    // const user = req.body.userId;
    const user = req.body.googleEmail;
    const title = req.body.title;
    const content = req.body.content;
    const sql = `INSERT INTO posts (userId, title, content, createdAt, updatedAt) VALUES (?, ?, ?, now(), now());`;
    const [rows, fields] = await db.query(sql, [user, title, content]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 해당 게시글 보기
router.get("/view/:postid?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "postview.html"));
});

router.get("/:id?", async (req, res) => {
  try {
    const postid = req.params.id;
    const sql = `SELECT * FROM posts p LEFT OUTER JOIN users u ON p.userId = u.id WHERE u.id = ?`;
    const [rows, fields] = await db.query(sql, [postid]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 게시글 수정
router.get("/edit/:id?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "postedit.html"));
});

router.get("/edit/data/:id?", async (req, res) => {
  try {
    const postId = req.params.id;
    const sql = `SELECT * FROM posts p LEFT OUTER JOIN users u ON p.userId = u.id WHERE id = ?`;
    const [rows, fields] = await db.query(sql, [postId]);
    res.json(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/:id?", async (req, res) => {
  const user = req.cookies.googleEmail;
  const postId = req.params.id;
  const title = req.body.title;
  const content = req.body.content;
  const updatedAt = new Date();

  const sql = `UPDATE posts SET title = ?, content = ?, updatedAt = ? WHERE id = ?`;

  try {
    const [rows, fields] = await db.query(sql, [
      title,
      content,
      updatedAt,
      postId,
    ]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 게시글 삭제
router.delete("/:id?", async (req, res) => {
  try {
    const postId = req.params.id;
    const sql = "DELETE FROM posts WHERE id = ?";

    const [rows, fields] = await db.query(sql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
