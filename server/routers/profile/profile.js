const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../../config/db");
require("dotenv").config();

// 프로필 페이지
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "public", "profile.html"));
});

router.get("/image", async (req, res) => {
    const sql = `SELECT profileImage FROM users WHERE googleId = ?`;
    // const googleId = '9c3838b6-078a-429a-8e22-0eda7a1bc320';
    const googleId = '104378500381898358628';

    try {
      const [rows, fields] = await db.query(sql, [googleId]);
      res.send(rows[0].profileImage);
    } catch (err) {
      console.error("Query execution error:", err);
      res.status(500).send("Internal Server Error");
    };
});

module.exports = router;