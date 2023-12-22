const express = require('express');
const path = require('path')

const authGoogle = require('./routers/authGoogle')
const authNaver = require('./routers/authNaver')
const NaverProfile = require('./routers/NaverProfile')

const app = express();
const port = 3000;


// 메인 페이지
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// 라우터
app.use("/api/authGoogle", authGoogle)
app.use("/api/authNaver", authNaver)
app.use("/api/NaverProfile", NaverProfile)


// 서버
app.listen(port, () => {
    console.log(`server is running at ${port}`);
});

