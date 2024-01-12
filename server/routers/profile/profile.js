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
           p.content AS content,
           c.userId As CommentID,
           c.content AS content
    FROM users u
    JOIN posts p ON p.userId = u.id
    JOIN comments c ON c.userId = u.id
    WHERE u.id = ?
    `;
    // const userId = req.body.userId;
    const userId = 'ca436c51-f3b7-45fe-9a7e-275269a81e6e';

    const [rows, fields] = await db.query(sql, userId);
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

module.exports = router;