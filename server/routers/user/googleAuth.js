const express = require("express");
const router = express.Router();
const axios = require("axios");
const db = require("../../config/db");
const path = require("path");
require("dotenv").config();

const GOOGLE_LOGIN_REDIRECT_URI =
  "http://localhost:3000/api/googleAuth/callback";

// 회원가입
router.get("/login", (req, res) => {
  let url = "https://accounts.google.com/o/oauth2/v2/auth";
  url += `?client_id=${process.env.GOOGLE_CLIENT_ID}`;
  url += `&redirect_uri=${GOOGLE_LOGIN_REDIRECT_URI}`;
  url += "&response_type=code";
  url += "&scope=email profile";

  res.redirect(url);
});

router.get("/callback", async (req, res) => {
  const { code } = req.query;

  // 구글 토큰 정보
  const resp = await axios.post("https://oauth2.googleapis.com/token", {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: GOOGLE_LOGIN_REDIRECT_URI,
    grant_type: "authorization_code",
  });

  // 사용자의 구글 계정 정보
  const resp2 = await axios.get(
    "https://www.googleapis.com/oauth2/v2/userinfo",
    {
      headers: {
        Authorization: `Bearer ${resp.data.access_token}`,
      },
    }
  );

  // 기존 회원 여부 확인 및 신규 회원 가입
  const googleId = resp2.data.id;
  const googleEmail = resp2.data.email;
  const googleImage = resp2.data.picture;

  try {
    const [rows, fields] = await db.execute(
      "SELECT * FROM users WHERE googleId = ? OR googleEmail = ?",
      [googleId, googleEmail]
    );

    req.session.googleId = googleId;
    req.session.googleEmail = googleEmail;
    req.session.isLogined = true;

    // 이미 가입된 회원, 로그인
    if (rows.length > 0) {
      req.session.save(function () {
        // res.cookie('googleId', { googleId, access_token: resp.data.access_token });
        res.cookie("googleId", googleId);
        res.cookie("googleEmail", googleEmail);
        res.cookie("isLogined", "true");

        // res.redirect("http://localhost:5173/");
        res.redirect("/");
      });

      // 없는 회원, 신규 회원가입 + 추가 정보 입력
    } else {
      await db.execute(
        "INSERT INTO users (googleId, googleEmail, profileImage) VALUES (?, ?, ?)",
        [googleId, googleEmail, googleImage]
      );

      res.redirect("http://localhost:5173/");
      // res.sendFile(path.join(__dirname, "..", "..", "public", "userInfo.html"));
    }
  } catch (error) {
    console.error("Database query error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
