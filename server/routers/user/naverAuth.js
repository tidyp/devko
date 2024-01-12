const express = require("express");
const router = express.Router();
const request = require("request-promise");
const db = require("../../config/db");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const client_id = process.env.NAVER_CLIENT_ID;
const client_secret = process.env.NAVER_CLIENT_SECRET;
let state = "RANDOM_STATE";

const redirectURI = encodeURI("http://localhost:3000/api/naverAuth/callback");
let api_url = "";

router.get("/login", function (req, res) {
  api_url =
    "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=" +
    client_id +
    "&redirect_uri=" +
    redirectURI +
    "&state=" +
    state;
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.end(
    "<a href='" +
      api_url +
      "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>"
  );
});

router.get("/callback", async (req, res) => {
  const code = req.query.code;
  const state = req.query.state;

  api_url =
    "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=" +
    client_id +
    "&client_secret=" +
    client_secret +
    "&redirect_uri=" +
    redirectURI +
    "&code=" +
    code +
    "&state=" +
    state;

  const options = {
    url: api_url,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  const result = await request.get(options);
  const token = JSON.parse(result).access_token;
  
  const info_options = {
    url: "https://openapi.naver.com/v1/nid/me",
    headers: { Authorization: "Bearer " + token },
  };

  const info_result = await request.get(info_options);
  const info_result_json = JSON.parse(info_result).response;

  console.log(info_result_json);

  const naverId = info_result_json.id;
  const naverEmail = info_result_json.email;
  const naverImage = info_result_json.profile_image;

  try {
    const [rows, fields] = await db.execute(
      "SELECT * FROM users WHERE naverId = ? OR naverEmail = ?",
      [naverId, naverEmail]
    );
    if (rows.length > 0) {
      //res.cookie("naver_access", { ...info_result_json, access_token: token });
      let userId = rows[0].id;
      res.cookie("userId", userId);
      res.redirect("http://localhost:5173");
      //   res.status(400).json({ message: '이미 가입된 회원입니다' });
    } else {
      userId = uuidv4();
      await db.execute(
        "INSERT INTO users (id, naverId, naverEmail, profileImage) VALUES (?, ?, ?)",
        [userId, naverId, naverEmail, naverImage]
      );
      res.cookie("userId", userId);
      res.redirect("http://localhost:5173/signup");
      //   res.json({ message: '회원가입 완료. 추가 정보를 입력하세요.' });
    };
  } catch (error) {
    console.error("Database query error: ", error);
    res.status(500).json({ message: "Internal server error" });
  };
});

module.exports = router;
