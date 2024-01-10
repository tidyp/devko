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
    const sql = `SELECT profileImage FROM users WHERE googleId = ? OR naverId = ?`;
    // const 

    try {
      const [rows, fields] = await db.query(sql);
      console.log(rows)
      res.send(rows);
    } catch (err) {
      console.error("Query execution error:", err);
      res.status(500).send("Internal Server Error");
    };
});

module.exports = router;