require('dotenv').config();
const express = require('express');
const router = express.Router();
const path = require('path')
const db = require('../../config/db')

router.get('/list', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'post.html'));
});

router.get('/lists', async (req, res) => {
  try {
    const [rows, fields] = await db.query('SELECT * FROM posts');
    res.send(rows);
  } catch (err) {
    console.error('Error querying MySQL:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;