// Import necessary modules
const express = require("express");
const router = express.Router();
const db = require("../../config/db");

router.get("/", async (req, res) => {
  try {
    // SQL query to fetch all calendar events
    const query = `
      SELECT * FROM calendars
    `;

    // Execute the query
    const events = await db.query(query);

    // Send the retrieved events as a response
    res.status(200).json(events);
  } catch (error) {
    console.error("Error retrieving calendar events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST endpoint for creating a new calendar event
router.post("/", async (req, res) => {
  console.log('요청옴')
  try {
    const {
      category,
      title,
      content,
      section,
      startDate,
      endDate,
      location,
      userId
    } = req.body;

    // Add validation for required fields

    // SQL query to insert a new calendar event
    const query = `
      INSERT INTO calendars (category, title, content, section, startDate, endDate, location, userId, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
    `;

    // Execute the query
    const result = await db.query(query, [
      category,
      title,
      content,
      section,
      startDate,
      endDate,
      location,
      userId
    ]);

    // Send a success response
    res.status(201).json({ message: "Calendar event created successfully", id: result.insertId });
  } catch (error) {
    console.error("Error creating calendar event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
