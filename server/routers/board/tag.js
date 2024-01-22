const express = require("express");
const router = express.Router();
const db = require("../../config/db");

// 태그 전체 보기
router.get("/", async (req, res) => {
  try {
    const sql = `Select * FROM tags`;

    const [rows, fields] = await db.query(sql);

    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 포스트별 태그 보기
router.get("/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const sql = `Select * FROM tags WHERE postId = ?`;
    const [rows, fields] = await db.query(sql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 태그 쓰기
router.post("/", async (req, res) => {
  try {
    const postId = req.body.postId;
    let tags = req.body.tags;

    const sql = `INSERT INTO tags (postId, id, name) VALUES (?, ?, ?);`;
    const results = [];

    for (i = 0; i < tags.length; i++) {
      const [rows, fields] = await db.query(sql, [postId, i + 1, tags[i]]);
      results.push(rows);
    }

    res.send(results);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 태그 수정
router.put("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const tags = req.body.tags;

  const sql = `UPDATE tags SET name = ? WHERE postId = ? AND id = ?`;

  try {
    for (let key in tags) {
      let tagId = key.slice(3);
      const [rows, fields] = await db.query(sql, [tags[key], postId, tagId]);
      res.send(rows);
    }
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 태그 삭제
router.delete("/:postId/:tagId", async (req, res) => {
  const postId = req.params.postId;
  const tagId = req.params.tagId;

  const sql = `DELETE FROM tags WHERE postId = ? AND id = ?`;

  try {
    const [rows, fields] = await db.query(sql, [postId, tagId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
