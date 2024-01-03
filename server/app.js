const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(cookieParser());

// 메인 페이지
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, './public')));

app.use(session({
    secret: 'my-key2',
    resave:false,
    saveUninitialized:true
}));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
// });

// 라우터
app.use(require('./routers/index'));

// 서버
app.listen(port, () => {
    console.log(`server is running at ${port}`);
});
