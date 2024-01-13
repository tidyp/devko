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
    let tags = req.body.formData.tag;

    if (tags.includes("#")) {
      tags = tags
        .split("#")
        .map((tags) => tags.trim())
        .filter(Boolean);
    } else {
      tags = [tags.trim()];
    }

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
router.put("/:id", async (req, res) => {
  const postId = req.body.postId;
  const tags = req.body.tags;
  console.log(req.body);

  const sql = `UPDATE tags SET name = ? WHERE postId = ? AND id = ?`;

  try {
    await db.query(sql, [tag1, postId, tagId]);
    await db.query(sql, [tag2, postId, tagId]);
    await db.query(sql, [tag3, postId, tagId]);
    await db.query(sql, [tag4, postId, tagId]);
    await db.query(sql, [tag5, postId, tagId]);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 태그 삭제

module.exports = router;
