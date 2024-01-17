const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT;

// 미들웨어
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));
app.use(helmet());

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 },
  })
);

// 메인 페이지
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 라우터
app.use("/api/googleAuth", require("./routers/user/googleAuth"));
app.use("/api/naverAuth", require("./routers/user/naverAuth"));
app.use("/api/additionalInfo", require("./routers/user/additionalInfo"));
app.use("/api/profile", require("./routers/user/profile"));

app.use("/api/post", require("./routers/board/post"));
app.use("/api/tag", require("./routers/board/tag"));
app.use("/api/comment", require("./routers/board/comment"));
app.use("/api/like", require("./routers/board/like"));
app.use("/api/search", require("./routers/board/search"));
app.use("/api/dailystat", require("./routers/board/dailystat"));

// 서버
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
