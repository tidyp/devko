const express = require('express');
const db = require("../../config/db");
const router = express.Router();
const path = require('path');
const uuid = require('uuid');

router.get('/step2', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'userInfo.html'));
});

router.get('/step3', async (req, res) => {
    const id = uuid();
    const userName = ds
    const workPosition = ds
    const interestArea = ds
    const selfDescription = ds
    const createdAt = now()
    const updatedAt = now()
    const grade = DS
    const notification = ds
    try {
        const [rows, fields] = await db.execute('SELECT * FROM users WHERE googleId = ? OR googleEmail = ? OR profileImage = ?', [googleId, googleEmail, googleImage]);
        console.log(rows)

        if (rows.length > 0) {
            res.redirect('http://localhost:5173');

            // res.status(400).json({ message: '이미 가입된 회원입니다' });
        } else {
            await db.execute('INSERT INTO users (googleId, googleEmail, profileImage) VALUES (?, ?, ?)', [googleId, googleEmail, googleImage]);
            res.redirect('http://localhost:5173');

            // res.json({ message: '회원가입 완료. 추가 정보를 입력하세요.' });
        }
    } catch (error) {
        console.error('Database query error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;