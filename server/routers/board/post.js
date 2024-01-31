const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const xss = require("xss");

// 게시글 전체 보기
router.get("/", async (req, res) => {
  try {
    const sql = `SELECT * FROM postsView ORDER BY createdAt DESC`;
    const [rows, fields] = await db.query(sql);
    res.json(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).json("Internal Server Error");
  }
});

// 해당 게시글 보기
router.get("/:category/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const category = categoryFinder(req.params.category);

    const viewSql = `UPDATE views SET count = count + 1 WHERE postId = ?`;
    const postSql = `SELECT * FROM ${category} WHERE id = ? ORDER BY createdAt DESC`;

    await db.query(viewSql, [postId]);
    const [rows, fields] = await db.query(postSql, [postId]);

    res.json(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).json("Internal Server Error");
  }
});

// 각 메뉴별 페이징된 게시물 보기
router.get("/:category/page/:page", async (req, res) => {
  try {
    const category = categoryFinder(req.params.category);

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
    res.status(500).json("Internal Server Error");
  }
});

// 해당 게시글 보기
router.get("/:category/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const category = categoryFinder(req.params.category);

    const viewSql = `UPDATE views SET count = count + 1 WHERE postId = ?`;
    const postSql = `SELECT * FROM ${category} WHERE id = ? ORDER BY createdAt DESC`;

    await db.query(viewSql, [postId]);
    const [rows, fields] = await db.query(postSql, [postId]);

    res.json(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).json("Internal Server Error");
  }
});

// 게시글 쓰기
router.post("/", async (req, res) => {
  try {
    const { userId } = req.body;
    const title = xss(req.body.title);
    const content = xss(req.body.content);
    const tags = xss(req.body.tags);
    let category = categoryFinder(req.body.category);

    const postSql = `INSERT INTO ${category} (userId, title, content, category, createdAt, updatedAt) VALUES (?, ?, ?, ?, now(), now());`;
    const setSql = `SET @postId = LAST_INSERT_ID();`;
    const likeSql = `INSERT INTO likes (postId) VALUES (@postId)`;
    const viewSql = `INSERT INTO views (postId) VALUES (@postId)`;
    const tagSql = `INSERT INTO tags (postId, id, name) VALUES (@postId, ?, ?);`;

    await db.query(`START TRANSACTION;`);
    const [rows, fields] = await db.query(postSql, [
      userId,
      title,
      content,
      category,
    ]);
    await db.query(setSql);
    await db.query(likeSql);
    await db.query(viewSql);
    await db.query(`COMMIT;`);

    // const result = tags.split("#").filter(function (item) {
    //   return item.length > 0;
    // });

    // for (i = 0; i < result.length; i++) {
    //   await db.query(tagSql, [i + 1, result[i]]);
    // }

    res.json(rows);
  } catch (err) {
    await db.query(`ROLLBACK;`);
    console.error("Query execution error:", err);
    res.status(500).json("Internal Server Error");
  }
});

// 게시글 수정
router.put("/:category/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    const { userId } = req.body;
    const title = xss(req.body.title);
    const content = xss(req.body.content);
    const tags = xss(req.body.tags);

    const selectSql = `SELECT * FROM boardsview bv WHERE bv.category = ? AND bv.id = ? AND bv.userId = ?;`;
    const [rows, fields] = await db.query(selectSql, [
      category,
      postId,
      userId,
    ]);

    if (rows > 0) {
      const postSql = `UPDATE posts SET title = ?, content = ?, updatedAt = NOW() WHERE id = ?`;
      const tagSql = `UPDATE tags SET name = ? WHERE postId = ? AND id = ?`;
      const [rows, fields] = await db.query(postSql, [title, content, postId]);
      // for (let key in tags) {
      //   const [rows, fields] = await db.query(sql, [tags[key], postId, tagId]);
      // }
      res.json(rows);
    }
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).json("Internal Server Error");
  }
});

// 게시글 삭제
router.delete("/:category/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const { userId } = req.body;
    let category = categoryFinder(req.body.category);

    const postSql = `DELETE FROM ${category} WHERE id = ?`;

    const [rows, fields] = await db.query(postSql, [postId]);

    if (rows > 0) {
      const postSql = `DELETE FROM ${category} WHERE category = ? AND id = ?`;

      const [rows, fields] = await db.query(postSql, [category, postId]);
      res.json(rows);
    }
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).json("Internal Server Error");
  }
});

function categoryFinder(category) {
  switch (category) {
    case "discuss":
      return "discuss";
    case "qna":
      return "questions";
    case "group":
      return "teams";
    case "event":
      return "calendars";
    case "articles":
      return "articles";
    default:
      return category;
  }
}

module.exports = router;
