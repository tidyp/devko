const express = require('express');
const router = express.Router();
const path = require('path')
const db = require('../../config/db')
require('dotenv').config();

// 게시글 수정
router.get('/:postId?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'postedit.html'));
});

router.get(`/data/:postId?`, async (req, res) => {
  const postId = req.params.postId;
  const sql = `SELECT * FROM posts WHERE id = ${postId}`
  try {
    const [rows, fields] = await db.query(sql);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.put(`/data/:postId?`, async (req, res) => {
  // const user = req.session.googleEmail;
  const postId = req.params.postId;
  const title = req.body.title;
  const content = req.body.content;

  const sql = `UPDATE posts SET title = ?, content = ? WHERE id = ?`;
  
  try {
    const [rows, fields] = await db.query(sql, [title, content, postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;