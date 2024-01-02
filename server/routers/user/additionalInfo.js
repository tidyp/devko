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
    const googleId = req.body.googleId
    const userName = req.body.userName
    const workPosition = req.body.workPosition
    const interestArea = req.body.interestArea
    const selfDescription = req.body.selfDescription
    const createdAt = new Date().getTime();
    const updatedAt = new Date().getTime();
    // const grade = req.body.grade
    // const notification = req.query.notification
    try {
        console.log(googleId)
        console.log(req.body)
        console.log(createdAt)
        console.log(updatedAt)

        console.log('id:', id);
// console.log('userName:', userName);
        const [rows, fields] = await db.execute('SELECT * FROM users WHERE id = ? OR userName = ? OR workPosition = ? OR interestArea = ? OR selfDescription = ? OR createdAt = ? OR updatedAt = ? OR googleId = ?', [id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt, googleId]);
        console.log(rows)

        if (rows.length > 0) {
            res.send('실패')
            // res.redirect('http://localhost:5173');

            // res.status(400).json({ message: '이미 가입된 회원입니다' });
        } else {
            // await db.execute(`INSERT INTO users (id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)`, [id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt]);
            await db.execute(`UPDATE users SET (id = ?, userName = ?, workPosition = ?, interestArea = ?, selfDescription = ?, createdAt = ?, updatedAt = ?, grade = ?, notification = ?) WHERE googleId = ?`, [id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt]);
            // res.redirect('http://localhost:5173');
            res.send('성공')
            // res.json({ message: '회원가입 완료. 추가 정보를 입력하세요.' });
        }
    } catch (error) {
        console.error('Database query error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;