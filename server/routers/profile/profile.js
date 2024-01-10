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
    const profileImage = `SELECT profileImage FROM users WHERE goodleId = ? OR naverID = ?`;
  
    try {
      const [rows, fields] = await db.query(profileImage);
      res.send(rows);
    } catch (err) {
      console.error("Query execution error:", err);
      res.status(500).send("Internal Server Error");
    };
});

module.exports = router;