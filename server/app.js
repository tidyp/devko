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

// 라우터
app.use("/api/googleAuth", require("./routers/user/googleAuth"));
app.use("/api/naverAuth", require("./routers/user/naverAuth"));
app.use("/api/additionalInfo", require("./routers/user/additionalInfo"));
app.use("/api/profile", require("./routers/user/profile"));
app.use("/api/find", require("./routers/user/find"));

app.use("/api/post", require("./routers/board/post"));
app.use("/api/tag", require("./routers/board/tag"));
app.use("/api/comment", require("./routers/board/comment"));
app.use("/api/like", require("./routers/board/like"));
app.use("/api/search", require("./routers/board/search"));
app.use("/api/team", require("./routers/board/team"));
app.use("/api/calendar", require("./routers/board/calendar"));
app.use("/api/news", require("./routers/news/news"));

app.use("/api/user", require("./routers/user/user"));

// 서버
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
