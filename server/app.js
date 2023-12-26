const express = require('express');
const path = require('path')
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT;


// 메인 페이지
app.use(express.static(path.resolve(__dirname, './public')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
// });

// 라우터
app.use(require('./routers/index'));

// 서버
app.listen(port, () => {
    console.log(`server is running at ${port}`);
});