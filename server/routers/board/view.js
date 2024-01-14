const express = require("express");
const router = express.Router();
const db = require("../../config/db");

// 게시글 조회수 보기
router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const sql = `Select * FROM views WHERE postId = ?`;

  try {
    const [rows, fields] = await db.query(sql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 게시글 조회수 추가
router.post("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const sql = `UPDATE views SET count = count + 1 WHERE postId = ?`;
  try {
    const [rows, fields] = await db.query(sql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
