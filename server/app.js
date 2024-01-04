const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT;


// 미들웨어
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "my-key2",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 },
  })
);


// 메인 페이지
app.use(express.static(path.resolve(__dirname, "./public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// 라우터
app.use("/api/googleAuth", require("./routers/user/googleAuth"));
app.use("/api/naverAuth", require("./routers/user/naverAuth"));
app.use("/api/additionalInfo", require("./routers/user/additionalInfo"));

app.use("/api/post", require("./routers/post/board"));

// 서버
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
