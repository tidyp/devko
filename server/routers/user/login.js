const express = require('express');
const router = express.Router();
const path = require('path')
const db = require('../../config/db')
require('dotenv').config();

// 로그인하기
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'login.html'));
});

router.get("/login", async (req, res) => {
    const post = req.body;
    console.log(post);
    
    try {
        const sql = `SELECT * FROM posts`;
        const [rows, fields] = await db.query(sql);
        res.send(rows);
    } catch (err) {
        console.error("Query execution error:", err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
