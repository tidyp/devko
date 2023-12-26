const express = require('express');
const axios = require('axios');
const db = require("../../config/db")
const app = express();
require("dotenv").config();

const GOOGLE_LOGIN_REDIRECT_URI = 'http://localhost:3000/api/authGoogle/login/redirect';
const GOOGLE_SIGNUP_REDIRECT_URI = 'http://localhost:3000/api/authGoogle/signup/redirect';

// 회원가입
app.get('/signup', (req, res) => {
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';
    url += `?client_id=${process.env.GOOGLE_CLIENT_ID}`
    url += `&redirect_uri=${GOOGLE_SIGNUP_REDIRECT_URI}`
    url += '&response_type=code'
    url += '&scope=email profile' 
    res.redirect(url);
});

app.get('/signup/redirect', async (req, res) => {
    const { code } = req.query;

    // 구글 토큰 정보
    const resp = await axios.post('https://oauth2.googleapis.com/token', {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: GOOGLE_SIGNUP_REDIRECT_URI,
        grant_type: 'authorization_code',
    });

    // 사용자의 구글 계정 정보
    const resp2 = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
            Authorization: `Bearer ${resp.data.access_token}`,
        },
    });
    
    console.log(resp2)

    const googleId = resp2.data.id;
    const googleEmail = resp2.data.email;

    try {
        const [rows, fields] = await db.execute('SELECT * FROM users WHERE googleId = ? OR googleEmail = ?', [googleId, googleEmail]);
        console.log(rows)

        if (rows.length > 0) {
            res.status(400).json({ message: '이미 가입된 회원입니다' });
        } else {
            await db.execute('INSERT INTO users (googleId, googleEmail) VALUES (?, ?)', [googleId, googleEmail]);
            res.json({ message: '회원가입 완료. 추가 정보를 입력하세요.' });
        }
    } catch (error) {
        console.error('Database query error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// 로그인 
app.get('/login', (req, res) => {
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';
    url += `?client_id=${process.env.GOOGLE_CLIENT_ID}`
    url += `&redirect_uri=${GOOGLE_LOGIN_REDIRECT_URI}`
    url += '&response_type=code'
    url += '&scope=email profile'    
    res.redirect(url);
});

app.get('/login/redirect', async (req, res) => {
    const { code } = req.query;
    
    // 구글 토큰 정보
    const resp = await axios.post('https://oauth2.googleapis.com/token', {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: GOOGLE_LOGIN_REDIRECT_URI,
        grant_type: 'authorization_code',
    });

    // 사용자의 구글 계정 정보
    const resp2 = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
            Authorization: `Bearer ${resp.data.access_token}`,
        },
    });
    
    // 기존 회원 여부 확인 및 신규 회원 가입
    const googleId = resp2.data.id;
    const googleEmail = resp2.data.email;

    try {
        const [rows, fields] = await db.execute('SELECT * FROM users WHERE googleId = ? OR googleEmail = ?', [googleId, googleEmail]);
        console.log(rows)

        if (rows.length > 0) {
            res.send(`${googleId}, ${googleEmail} 로그인 완료`);
        } else {
            res.send(`없는 회원입니다. 회원가입을 해주세요.`);
        }
    } catch (error) {
        console.error('Database query error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = app;

