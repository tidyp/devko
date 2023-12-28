const express = require('express');
const db = require("../../config/db");
const router = express.Router();
const path = require('path');

router.get('/step2', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'userInfo.html'));
})

router.get('/step3', async (req, res) => {
    const userName = req.query.username
    try {
        const [rows, fields] = await db.execute('SELECT * FROM users WHERE userName = ?', [userName]);
        console.log('rows', rows)
        console.log('fields', fields)
  
        if (rows.length > 0) {
            res.status(400).json({ message: '이미 가입된 회원입니다' });
        } else {
            await db.execute('INSERT INTO users (userName) VALUES (?)', [userName]);
            // res.redirect('http://localhost:5173');
            res.json({ message: '등록완료' });
        }
      } catch (error) {
          console.error('Database query error: ', error);
          res.status(500).json({ message: 'Internal server error' });
      }
})

module.exports = router;