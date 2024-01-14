const express = require("express");
const router = express.Router();
const db = require("../../config/db");

// 좋아요 보기
router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const sql = `Select * FROM likes WHERE postId = ?`;

  try {
    const [rows, fields] = await db.query(sql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 좋아요 추가
router.post("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const sql = `UPDATE likes SET count = count + 1 WHERE postId = ?`;
  try {
    const [rows, fields] = await db.query(sql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
