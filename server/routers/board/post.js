const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const xss = require("xss");

// Explore 메뉴 - 게시글 전체 목록 보기
router.get("/", async (req, res) => {
  try {
    const sql = `SELECT * FROM postsView ORDER BY createdAt DESC`;

    const [rows, fields] = await db.query(sql);

    res.json(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 해당 게시글 보기
router.get("/:id", async (req, res) => {
  try {
    // 조회수 로직 추가
    const viewpostId = req.params.id;
    const viewsql = `UPDATE views SET count = count + 1 WHERE postId = ?`;
    const [row, field] = await db.query(viewsql, [viewpostId]);

    const postId = req.params.id;
    const sql = `SELECT * FROM postsView WHERE id = ? ORDER BY createdAt DESC`;

    const [rows, fields] = await db.query(sql, [postId]);

    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 각 메뉴별 페이징된 게시물 보기
router.get("/:category/:page", async (req, res) => {
  try {
    const category = req.params.category;
    const sql = `SELECT * FROM postsView WHERE category = ? ORDER BY createdAt DESC`;

    const [rows, fields] = await db.query(sql, [category]);

    const itemsPerPage = 10;
    const page = parseInt(req.params.page) || 1;

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currPageRows = rows.slice(startIndex, endIndex);
    const totalPages = Math.ceil(rows.length / itemsPerPage);

    res.json({
      currPageRows,
      totalPages,
      page,
    });
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 게시글 쓰기
router.post("/", async (req, res) => {
  try {
    const userId = req.body.userId;
    const title = xss(req.body.title);
    const content = xss(req.body.content);
    const category = req.body.category;
    const tags = xss(req.body.tags);

    const postSql = `INSERT INTO posts (userId, title, content, category, createdAt, updatedAt) VALUES (?, ?, ?, ?, now(), now());`;
    const setSql = `SET @postId = LAST_INSERT_ID();`;
    const likeSql = `INSERT INTO likes (postId) VALUES (@postId)`;
    const viewSql = `INSERT INTO views (postId) VALUES (@postId)`;
    const tagSql = `INSERT INTO tags (postId, id, name) VALUES (@postId, ?, ?);`;

    const [rows, fields] = await db.query(postSql, [
      userId,
      title,
      content,
      category,
    ]);
    await db.query(setSql);
    await db.query(likeSql);
    await db.query(viewSql);

    const result = tags.split("#").filter(function (item) {
      return item.length > 0;
    });

    for (i = 0; i < result.length; i++) {
      await db.query(tagSql, [i + 1, result[i]]);
    }

    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 게시글 수정
router.put("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    const tags = req.body.tags;

    const postSql = `UPDATE posts SET title = ?, content = ?, updatedAt = NOW() WHERE id = ?`;
    const tagSql = `UPDATE tags SET name = ? WHERE postId = ? AND id = ?`;

    const [rows, fields] = await db.query(postSql, [title, content, postId]);
    // for (let key in tags) {
    //   const [rows, fields] = await db.query(sql, [tags[key], postId, tagId]);
    // }
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 게시글 삭제
router.delete("/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    const postSql = `DELETE FROM posts WHERE id = ?`;
    const commentSql = `DELETE FROM comments WHERE postId = ?`;
    const tagSql = `DELETE FROM tags WHERE postId = ?`;
    const likeSql = `DELETE FROM likes WHERE postId = ?`;
    const viewSql = `DELETE FROM views WHERE postId = ?`;

    const [rows, fields] = await db.query(postSql, [postId]);
    await db.query(commentSql, [postId]);
    await db.query(tagSql, [postId]);
    await db.query(likeSql, [postId]);
    await db.query(viewSql, [postId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
