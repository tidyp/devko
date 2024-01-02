const express = require('express');
const db = require("../../config/db");
const router = express.Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');

router.get('/step2', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'userInfo.html'));
});

router.post('/step3', async (req, res) => {
    const id = uuidv4();
    const googleId = req.session.googleId;
    const userName = req.body.userName;
    const workPosition = req.body.workPosition;
    const interestArea = req.body.interestArea;
    const selfDescription = req.body.selfDescription;
    let notification = req.body.notification;

    if (notification = 'notification') {
        notification = 1;
    } else {
        notification = 0;
    };

    try {
        const [rows, fields] = await db.execute('SELECT * FROM users WHERE id = ? OR userName = ? OR workPosition = ? OR interestArea = ? OR selfDescription = ? OR googleId = ?', [id, userName, workPosition, interestArea, selfDescription, googleId]);

        if (rows.length > 0) {
            await db.execute(`UPDATE users SET id = ?, userName = ?, workPosition = ?, interestArea = ?, selfDescription = ?, grade = 5, createdAt = now(), updatedAt = now(), notification = ? WHERE googleId = ?`, [id, userName, workPosition, interestArea, selfDescription, notification, googleId]);
            res.send('업데이트 성공');
            // res.redirect('http://localhost:5173');

            // res.status(400).json({ message: '이미 가입된 회원입니다' });
        } else {
            // await db.execute(`INSERT INTO users (id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)`, [id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt]);
            
            // res.redirect('http://localhost:5173');
            res.send('실패');
            // res.json({ message: '회원가입 완료. 추가 정보를 입력하세요.' });
        }
    } catch (error) {
        console.error('Database query error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

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