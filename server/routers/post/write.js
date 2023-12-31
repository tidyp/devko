const express = require('express');
const router = express.Router();
const path = require('path')
const db = require('../../config/db')
require('dotenv').config();

// 게시글 쓰기
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'postwrite.html'));
});

router.post("/data", async (req, res) => {
  // const user = req.session.user;
  const title = req.body.title;
  const content = req.body.content;

  const sql = `INSERT INTO posts (title, content) VALUES (?, ?, ?);`;

  try {
    const [rows, fields] = await db.query(sql, [title, content]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;