const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const schedule = require("node-schedule");

// Popular Tags
router.get("/tag", async (req, res) => {
  try {
    // schedule.scheduleJob('59 23 * * *', () => { // 매일 11시 59분에 실행
    // 30초마다 실행
    schedule.scheduleJob("*/30 * * * * *", async () => {
      const sql = `
      SELECT name AS tagName
          , COUNT(*) AS tagCNT
      FROM tags
      GROUP BY name
      ORDER BY count(*) DESC
      `;

      const [rows, fields] = await db.query(sql);
      res.send(rows);
    });
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Top Users
router.get("/user", async (req, res) => {
  try {
    const sql = `
      SELECT u.id AS userId
          , COUNT(p.id) AS postCNT
          , COUNT(c.id) AS commentCNT
      FROM users u
      LEFT OUTER JOIN posts p ON u.id = p.userId
      LEFT OUTER JOIN comments c ON u.id = c.userId
      GROUP BY u.id, c.id
      ORDER BY COUNT(p.id), COUNT(c.id) DESC
      `;

    const [rows, fields] = await db.query(sql);
    res.send(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
