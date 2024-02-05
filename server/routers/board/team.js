// Import necessary modules
const express = require("express");
const router = express.Router();
const db = require("../../config/db");

router.get("/", async (req, res) => {
  try {
    const sql = `SELECT * FROM teams`;
    const [rows, fields] = await db.query(sql);
    res.status(200).json(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).json("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      category,
      title,
      content,
      section,
      members,
      workPosition,
      startDate,
      endDate,
      location,
      userId,
    } = req.body;

    const query = `
      INSERT INTO calendars (category, title, content, section, members, workPosition, startDate, endDate, location, userId, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
    `;

    const result = await db.query(query, [
      category,
      title,
      content,
      section,
      members,
      workPosition,
      startDate,
      endDate,
      location,
      userId,
    ]);

    res.json(rows);
  } catch (error) {
    console.error("Error creating calendar event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
