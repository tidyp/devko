const express = require('express');
const router = express.Router();
const path = require('path')
const db = require('../../config/db')
require('dotenv').config();

// 게시글 목록 보기
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'post.html'));
});

router.get('/list', async (req, res) => {
  const sql = `SELECT * FROM posts`;

  try {
    const [rows, fields] = await db.query(sql);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});


// 게시글 쓰기
router.get('/write', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'postwrite.html'));
});

router.post('/write/data', async (req, res) => {
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


// 해당 게시글 보기
router.get('/view/:id?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'postview.html'));
});

router.get('/view/data/:id?', async (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM posts WHERE id = '${id}'`;

  try {
    const [rows, fields] = await db.query(sql);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});


// 게시글 수정
router.get('/edit/:postId?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'postedit.html'));
});

router.get('/edit/data/:postId?', async (req, res) => {
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

router.put('/edit/data/:postId?', async (req, res) => {
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


// 게시글 삭제
router.delete('/delete/:postId?', async (req, res) => {
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