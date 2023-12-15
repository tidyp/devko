const express = require('express');
const session = require('express-session');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const GOOGLE_LOGIN_REDIRECT_URI = `http://localhost:3000/login/redirect`;
const GOOGLE_SIGNUP_REDIRECT_URI = `http://localhost:3000/signup/redirect`;

const GOOGLE_TOKEN_URL = `https://oauth2.googleapis.com/token`;
const GOOGLE_USERINFO_URL = `https://www.googleapis.com/oauth2/v2/userinfo`;

router.use(session({
    secret: 'session_secret_key',
    resave: true,
    saveUninitialized: true
}));

router.get('/login', (req, res) => {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_LOGIN_REDIRECT_URI}&response_type=code&scope=email profile`;
    res.redirect(url);
});

router.get('/login/redirect', async (req, res) => {
    try {
        const { code } = req.query;
        console.log(`code: ${code}`);

        // Handle token exchange
        const resp = await axios.post(GOOGLE_TOKEN_URL, {
            code,
            client_id: GOOGLE_CLIENT_ID,
            client_secret: GOOGLE_CLIENT_SECRET,
            redirect_uri: GOOGLE_LOGIN_REDIRECT_URI,
            grant_type: 'authorization_code',
        });

        // Handle user info retrieval
        const userInfo = await axios.get(GOOGLE_USERINFO_URL, {
            headers: {
                Authorization: `Bearer ${resp.data.access_token}`,
            },
        });

        // Handle user session or further actions
        // ...

        res.send('ok login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/signup', (req, res) => {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_SIGNUP_REDIRECT_URI}&response_type=code&scope=email profile`;
    res.redirect(url);
});

router.get('/signup/redirect', async (req, res) => {
    try {
        const { code } = req.query;
        console.log(`code: ${code}`);

        // Handle token exchange
        const resp = await axios.post(GOOGLE_TOKEN_URL, {
            code,
            client_id: GOOGLE_CLIENT_ID,
            client_secret: GOOGLE_CLIENT_SECRET,
            redirect_uri: GOOGLE_SIGNUP_REDIRECT_URI,
            grant_type: 'authorization_code',
        });

        // Handle user info retrieval
        const userInfo = await axios.get(GOOGLE_USERINFO_URL, {
            headers: {
                Authorization: `Bearer ${resp.data.access_token}`,
            },
        });

        // Handle user registration or further actions
        // ...

        res.send('ok signup');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
