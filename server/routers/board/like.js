const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const categoryFinder = require("../../utils/categoryFinder");

// 게시글 좋아요 보기
router.get("/:category/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const category = categoryFinder(req.params.category);
    const sql = `Select * FROM likes WHERE category = ? AND postId = ? AND count > 0`;
    const [rows, fields] = await db.query(sql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 게시글 좋아요 한번 클릭하면 추가, 두번 클릭하면 삭제
router.post("/:category/:postId", async (req, res) => {
  console.log(req.params.category)
  console.log(req.params.postId)
  try {
    const postId = req.params.postId;
    const category = categoryFinder(req.params.category);
    const userId = req.body.userId;
    const { isLiked } = req.body;
    const increment = isLiked ? 1 : -1;

    const sql = `UPDATE likes SET count = count + ?, userId = ? WHERE category = ? AND postId = ?`;

    const [rows, fields] = await db.query(sql, [increment, userId, postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
