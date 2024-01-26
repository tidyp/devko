const express = require("express");
const router = express.Router();
const db = require("../../config/db");

// 게시글 좋아요 보기
router.get("/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const sql = `Select * FROM likes WHERE postId = ?`;

    const [rows, fields] = await db.query(sql, [postId]);

    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 게시글 좋아요 한번 클릭하면 추가, 두번 클릭하면 삭제
router.post("/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.body.userId;
    const { isLiked } = req.body;
    const increment = isLiked ? 1 : -1;
    
    const sql = `UPDATE likes SET count = count + ?, userId = ? WHERE postId = ?`;

    const [rows, fields] = await db.query(sql, [increment, userId, postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
