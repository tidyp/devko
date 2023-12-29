const express = require('express');
const db = require("../../config/db");
const router = express.Router();
const path = require('path');
const uuid = require('uuid');

router.get('/step2', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'userInfo.html'));
});

router.put('/step3', async (req, res) => {
    const id = uuid;
    const userName = req.body.userName
    const workPosition = req.body.workPosition
    const interestArea = req.body.interestArea
    const selfDescription = req.body.selfDescription
    let createdAt;
    let updatedAt;
    const grade = req.body.grade
    const notification = req.body.notification
    try {
        const [rows, fields] = await db.execute('SELECT * FROM users WHERE id = ? OR userName = ? OR workPosition = ? OR interestArea = ? OR selfDescription = ? OR createdAt = ? OR updatedAt = ? OR grade = ? OR notification = ?', [id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt, grade, notification]);
        console.log(rows)

        if (rows.length > 0) {
            res.send('실패')
            // res.redirect('http://localhost:5173');

            // res.status(400).json({ message: '이미 가입된 회원입니다' });
        } else {
            await db.execute(`UPDATE users SET (id = ?, userName = ?, workPosition = ?, interestArea = ?, selfDescription = ?, createdAt = now(), updatedAt = now(), grade = ?, notification = ?)`, [id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt, grade, notification]);
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