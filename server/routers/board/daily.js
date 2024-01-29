const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const cron = require("node-cron");

router.get("/tag", (req, res) => {
  const fetchData = async () => {
    try {
      console.log("데이터 스케쥴러", new Date());

      const sql = "SELECT * FROM posts LIMIT 5";

      const result = await db.query(sql);
      res.send(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
    }
  };

  cron.schedule("*/10 * * * *", fetchData); // 10초
  // cron.schedule("0 0 * * *", fetchData); // 자정
});

module.exports = router;
