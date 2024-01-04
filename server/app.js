const express = require("express");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT;

// 미들웨어
app.use(cors());
app.use(cookieParser());

// 메인 페이지
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "./public")));

app.use(
  session({
    secret: "my-key2",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 },
  })
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// 라우터
app.use("/api/user/login", require("./routers/user/login"));
app.use("/api/user/googleAuth", require("./routers/user/googleAuth"));
app.use("/api/user/naverAuth", require("./routers/user/naverAuth"));
app.use("/api/user/additionalInfo", require("./routers/user/additionalInfo"));

app.use("/api/post", require("./routers/post"));




// app.use("/api/post/list", require("./routers/post/list"));
// app.use("/api/post/view", require("./routers/post/view"));
// app.use("/api/post/write", require("./routers/post/write"));
// app.use("/api/post/edit", require("./routers/post/edit"));
// app.use("/api/post/delete", require("./routers/post/delete"));

// 서버
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
