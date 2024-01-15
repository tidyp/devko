const express = require("express");
const db = require("../../config/db");
const router = express.Router();
const path = require("path");
const { v4: uuidv4 } = require("uuid");

router.get("/step2", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "userInfo.html"));
});

router.post("/step3", async (req, res) => {
  const userId = uuidv4();
  const userName = req.body.userName;
  const workPosition = req.body.workPosition;
  const interestArea = req.body.interestArea;
  const selfDescription = req.body.selfDescription;
  // let notification = req.body.notification;

  // if (notification) {
  //   notification = 1;
  // } else {
  //   notification = 0;
  // }

  const INSERT_USER_QUERY = `
    INSERT INTO users (id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt, grade, notification, googleId, naverId)
    VALUES (?, ?, ?, ?, ?, NOW(), NOW(), 5, 1, (SELECT id FROM usersgoogle WHERE id = 1), (SELECT id FROM usersnaver WHERE id = 1))
    `;

  try {
    const [rows, fields] = await db.execute(INSERT_USER_QUERY, [
      userId,
      userName,
      workPosition,
      interestArea,
      selfDescription,
    ]);
    res.cookie("userId", userId, {
      httpOnly: true,
      secure: true,
    });
    res.send("업데이트 성공");
  } catch (error) {
    console.error("Database query error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/step3", async (req, res) => {
  try {
    const [rows, fields] = await db.execute(
      "SELECT * FROM users WHERE userName = ?",
      [userName]
    );

    if (rows.length > 0) {
      res.status(400).json({ message: "이미 가입된 회원입니다" });
    } else {
      await db.execute("INSERT INTO users (userName) VALUES (?)", [userName]);
      res.cookie("userId", userId, {
        httpOnly: true,
        secure: true,
      });
      // res.redirect('http://localhost:5173');
      res.json({ message: "등록완료" });
    }
  } catch (error) {
    console.error("Database query error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
