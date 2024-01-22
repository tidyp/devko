const express = require("express");
const router = express.Router();
const db = require("../../config/db");

// 검색 결과 보기
router.get("/:input", async (req, res) => {
  try {
    const input = req.params.input;
    const sql = `
    SELECT p.id AS id
        , p.category AS category
        , p.title AS title
        , p.content AS content
        , p.createdAt AS createdAt
        , p.updatedAt AS updatedAt
        , u.id AS userId
        , u.userName AS userName
        , u.profileImage AS profileImage
    FROM posts p
    LEFT OUTER JOIN users u ON p.userId = u.id
    WHERE u.userName LIKE ? OR p.title LIKE ? OR p.content LIKE ?
    `;

    const [rows, fields] = await db.query(sql, [
      `%${input}%`,
      `%${input}%`,
      `%${input}%`,
    ]);

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

module.exports = router;
