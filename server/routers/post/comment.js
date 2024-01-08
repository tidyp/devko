const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../../config/db");
require("dotenv").config();

// 댓글 목록 보기
router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;

  try {
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
router.put("/edit/:commentId?", async (req, res) => {
  const commentId = req.params.commentId;
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
router.delete("/delete/:commentId?", async (req, res) => {
  const commentId = req.params.commentId;
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
router.post("/subcomment/:postId?", async (req, res) => {
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

module.exports = router;
