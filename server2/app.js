const express = require('express');
const path = require('path')

const app = express();
const port = 3001;


// 메인 페이지
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 라우터
app.use("/api/authGoogle", require('./routers/authGoogle'))
app.use("/api/authNaver", require('./routers/authNaver'))
app.use("/api/NaverProfile", require('./routers/NaverProfile'))


// 서버
app.listen(port, () => {
    console.log(`server is running at ${port}`);
});