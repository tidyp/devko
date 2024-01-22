const express = require("express");
const router = express.Router();
const db = require("../../config/db");

// 댓글 목록 보기
router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;

  try {
    const sql = `
    SELECT c.postId AS postId
        , c.id AS commentId
        , c.mainId AS mainId
        , c.content AS content
        , c.createdAt AS createdAt
        , c.updatedAt AS updatedAt
        , u.id AS userId
        , u.userName AS userName
        , u.profileImage AS profileImage
        , u.grade AS grade
    FROM comments c
    LEFT OUTER JOIN (
      SELECT u.id AS id
        , u.userName AS userName
        , u.profileImage AS profileImage
        , u.grade AS grade
        , ug.googleId AS googleId
        , ug.googleEmail AS googleEmail
        , ug.googleImage AS googleImage
        , un.naverId AS naverId
        , un.naverEmail AS naverEmail
        , un.naverImage AS naverImage
      FROM users u
      LEFT OUTER JOIN usersgoogle ug ON u.googleId = ug.id
      LEFT OUTER JOIN usersnaver un ON u.naverId = un.id) u ON c.userId = u.id
    WHERE c.postId = ?
    ORDER BY c.postId, c.id, c.mainId, c.createdAt ASC
    `;
    const [rows, fields] = await db.query(sql, [postId]);
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

// 댓글 작성
router.post("/:postId/:id", async (req, res) => {
  try {
    const postId = req.params.postId;
    const commentId = req.params.id;
    const mainId = commentId || 0;
    const { userId, content } = req.body;

    console.log(userId, postId, mainId, content);
    const sql = `INSERT INTO comments (userId, postId, mainId, content, createdAt, updatedAt) VALUES (?, ?, ?, ?, NOW(), NOW())`;
    const result = await db.query(sql, [userId, postId, mainId, content]);
    res.json(result);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 댓글 수정
router.put("/:id?", async (req, res) => {
  const commentId = req.params.id;
  const content = req.body.content;
  const updatedAt = new Date();

  const updateSql = `UPDATE comments SET content = ?, updatedAt = ? WHERE id = ?`;

  try {
    const [rows, fields] = await db.query(updateSql, [
      content,
      updatedAt,
      commentId,
    ]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 댓글 삭제
router.delete("/:id?", async (req, res) => {
  const commentId = req.params.id;
  const sql = `DELETE FROM comments WHERE id = ?`;

  try {
    const [rows, fields] = await db.query(sql, [commentId]);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
