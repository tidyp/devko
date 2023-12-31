const express = require('express');
const router = express.Router();
const path = require('path')
const db = require('../../config/db')
require('dotenv').config();

// 해당 게시글 보기
router.get('/:id?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'postview.html'));
});

router.get("/data/:id?", async (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM posts WHERE id = '${id}'`;
  console.log(id, sql)

  try {
    const [rows, fields] = await db.query(sql);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;