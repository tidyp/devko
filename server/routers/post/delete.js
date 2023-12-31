const express = require('express');
const router = express.Router();
const path = require('path')
const db = require('../../config/db')
require('dotenv').config();

// 게시글 삭제
router.delete(`/data/:postId?`, async (req, res) => {
  const postId = req.params.postId;

  const sql = 'DELETE FROM posts WHERE id = ?';
  
  try {
    const [rows, fields] = await db.query(sql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;