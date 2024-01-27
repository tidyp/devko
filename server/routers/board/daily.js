const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const cron = require("node-cron");

router.get("/tag", (req, res) => {
  let result = [];
  // 매일 자정에 실행되는 스케줄러 설정
  // cron.schedule("0 0 * * *", () => {
  cron.schedule("*/1 * * * *", () => {
    console.log("데이터 스케쥴러", new Date());

    const sql = "SELECT * FROM posts";

    result = db.query(sql);
    console.log(result);
  });
  res.send(result);
});

module.exports = router;
