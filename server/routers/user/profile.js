const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../../config/db");
require("dotenv").config();

// 프로필 페이지
router.get("/:id", async (req, res) => {
  try {
    const sql = `
    SELECT u.userName AS userName,
           u.profileImage AS profileImage,
           u.workPosition AS workPosition,
           u.interestArea AS interestArea,
           u.selfDescription AS selfDescription,
           u.grade AS grade,
           p.userId AS postID,
           p.category AS category,
           p.title AS title,
           p.content AS postContent,
           c.userId As commentID,
           c.content AS commentContent
    FROM users u
    JOIN posts p ON p.userId = u.id
    JOIN comments c ON c.userId = u.id
    WHERE u.id = ?
    `;
    const userId = req.body.userId;
    // const userId = 'ca436c51-f3b7-45fe-9a7e-275269a81e6e';

    const [rows, fields] = await db.query(sql, userId);
    console.log(fields)
    // if (rows.length > 0) {
    //   await db.execute(
    //     `UPDATE users SET userName = ?, workPosition = ?, interestArea = ?, selfDescription = ?, grade = 5, createdAt = now(), updatedAt = now(), notification = ? WHERE id = ?`,
    //     [
    //       userName,
    //       workPosition,
    //       interestArea,
    //       selfDescription,
    //       notification,
    //       userId,
    //     ]
    //   );
    // }
    res.json(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 프로필 이미지 수정 구현
router.get("/image", async (req, res) => {
    const sql = `SELECT profileImage FROM users u WHERE u.id = ?`;
    // const userId = req.body.userId;
    const userId = 'ca436c51-f3b7-45fe-9a7e-275269a81e6e';

    try {
      const [rows, fields] = await db.query(sql, [userId]);
      res.send(rows[0].profileImage);
    } catch (err) {
      console.error("Query execution error:", err);
      res.status(500).send("Internal Server Error");
    };
});

// 이메일 찾기 -- 이전 필요 (/find/info)

router.get("/info", async (req, res) => {
  const sql = `SELECT ug.googleEmail, un.naverEmail FROM users_google ug
  JOIN users u on u.id = ug.id
  JOIN users_naver un on un.id = u.id
  WHERE ug.googleEmail = ? or un.naverEmail`;
  const googleEmail = req.body.googleEmail;
  const naverEmail = req.body.naverEmail;

  try {
    const [rows, fields] = await db.query(sql, [googleEmail, naverEmail]);
    res.json(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  };
});

module.exports = router;