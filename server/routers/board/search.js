const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../../config/db");
require("dotenv").config();

// 검색 결과 보기
router.get("/:input", async (req, res) => {
  const input = req.params.input;

  try {
    // const sql = `SELECT * FROM posts p LEFT OUTER JOIN users u ON p.userId = u.id WHERE u.userName LIKE ? OR p.title LIKE ? OR p.content LIKE ?`;
    const sql = `SELECT * FROM posts WHERE userId LIKE ? OR title LIKE ? OR content LIKE ?`;
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
    console.error("Error fetching search results: " + err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
