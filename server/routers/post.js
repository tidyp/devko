const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../config/db");
require("dotenv").config();

// 게시글 목록 보기

router.get("/", async (req, res) => {
  try {
    const sql = `SELECT * FROM posts`;
    const [rows, fields] = await db.query(sql);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  const user = req.session.googleEmail;
  const title = req.body.title;
  const content = req.body.content;

  const sql = `INSERT INTO posts (userId, title, content, createdAt, updatedAt) VALUES (?, ?, ?, now(), now());`;

  try {
    const [rows, fields] = await db.query(sql, [user, title, content]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;


