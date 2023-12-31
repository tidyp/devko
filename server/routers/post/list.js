const express = require('express');
const router = express.Router();
const path = require('path')
const db = require('../../config/db')
require('dotenv').config();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'post.html'));
});

// 게시글 목록 보기
router.get("/data", async (req, res) => {
  try {
    const sql = `SELECT * FROM posts`;
    const [rows, fields] = await db.query(sql);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;