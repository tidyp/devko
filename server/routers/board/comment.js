const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../../config/db");
require("dotenv").config();

// 댓글 목록 보기
router.get("/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const sql = `SELECT * FROM comments WHERE postId = ? ORDER BY postId, id, mainId, createdAt ASC`;
    const [rows, fields] = await db.query(sql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Error fetching comments: " + err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 댓글 작성
router.post("/:postId?", async (req, res) => {
  try {
    const postId = req.params.postId;
    const { userId, content } = req.body;
    const createdAt = new Date();
    const updatedAt = new Date();

    const sql =
      "INSERT INTO comments (userId, postId, content, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)";
    const result = await db.query(sql, [
      userId,
      postId,
      content,
      createdAt,
      updatedAt,
    ]);

    const newComment = {
      id: result.insertId,
      userId,
      postId,
      content,
      createdAt,
      updatedAt,
    };

    res.status(201).json(newComment);
  } catch (err) {
    console.error("Error creating comment: " + err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 댓글 수정
router.put("/:id?", async (req, res) => {
  const commentId = req.params.id;
  const content = req.body.content;
  const updatedAt = new Date();

  const updateSql = `UPDATE comments SET content = ?, updatedAt = ? WHERE id = ?`;
  const selectSql = `SELECT * FROM comments WHERE id = ?`;

  try {
    await db.query(updateSql, [content, updatedAt, commentId]);
    const [rows, fields] = await db.query(selectSql, [commentId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 댓글 삭제
router.delete("/:id?", async (req, res) => {
  const commentId = req.params.id;
  const sql = "DELETE FROM comments WHERE id = ?";

  try {
    const [rows, fields] = await db.query(sql, [commentId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 대댓글 작성
router.post("/sub/:id?", async (req, res) => {
  try {
    const commentId = req.params.id;
    const { userId, postId, content } = req.body;

    const insertSql = `INSERT INTO comments (userId, postId, mainId, content, createdAt, updatedAt) VALUES (?, ?, ?, ?, NOW(), NOW())`;
    const selectSql = `SELECT * FROM comments WHERE userId = ? AND postId = ? AND mainId = ? ORDER BY createdAt DESC LIMIT 1`;

    await db.query(insertSql, [userId, postId, commentId, content]);
    const [rows, fields] = await db.query(selectSql, [
      userId,
      postId,
      commentId,
    ]);

    res.send(rows);
  } catch (err) {
    console.error("Error creating comment: " + err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
