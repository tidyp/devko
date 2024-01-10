const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../../config/db");
require("dotenv").config();

// 검색 결과 보기
router.get("/:input", async (req, res) => {
  try {
    const input = req.params.input;
    const sql = `SELECT * FROM posts WHERE title = ? ORDER BY postId, id, mainId, createdAt ASC`;
    const [rows, fields] = await db.query(sql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Error fetching comments: " + err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
