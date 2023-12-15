const express = require('express');
const session = require('express-session');
const axios = require('axios');
require("dotenv").config();

const app = express();
const port = 3000;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const GOOGLE_LOGIN_REDIRECT_URI = `http://localhost:${port}/login/redirect`;
const GOOGLE_SIGNUP_REDIRECT_URI = `http://localhost:${port}/signup/redirect`;

const GOOGLE_TOKEN_URL = `https://oauth2.googleapis.com/token`;
const GOOGLE_USERINFO_URL = `https://www.googleapis.com/oauth2/v2/userinfo`;

app.use(session({
    secret: 'session_secret_key',
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.send(`
        <h1>OAuth</h1>
        <a href="/login">Log in</a>
        <a href="/signup">Sign up</a>
    `);
});

app.get('/login', (req, res) => {
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';
    url += `?client_id=${GOOGLE_CLIENT_ID}`
    url += `&redirect_uri=${GOOGLE_LOGIN_REDIRECT_URI}`
    url += '&response_type=code'
    url += '&scope=email profile'    
    res.redirect(url);
});

app.get('/signup', (req, res) => {
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';
    url += `?client_id=${GOOGLE_CLIENT_ID}`
    url += `&redirect_uri=${GOOGLE_SIGNUP_REDIRECT_URI}`
    url += '&response_type=code'
    url += '&scope=email profile'    
    res.redirect(url);
});


app.get('/login/redirect', (req, res) => {
    const { code } = req.query;
    console.log(`code: ${code}`);
    res.send('ok');
});

app.get('/signup/redirect', async (req, res) => {
    const { code } = req.query;
    console.log(`code: ${code}`);

    const resp = await axios.post(GOOGLE_TOKEN_URL, {
        code,
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        redirect_uri: GOOGLE_SIGNUP_REDIRECT_URI,
        grant_type: 'authorization_code',
    });

    const resp2 = await axios.get(GOOGLE_USERINFO_URL, {
        headers: {
            Authorization: `Bearer ${resp.data.access_token}`,
        },
    });
    res.send('ok sign up');
});

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});