const express = require("express");
const db = require("../../config/db");
const router = express.Router();
const path = require("path");

router.get("/step2", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "userInfo.html"));
});

router.post("/step3", async (req, res) => {
  // const userId = req.cookies.userId;
  const userId = req.body.userId;
  const userName = req.body.userName;
  const workPosition = req.body.workPosition;
  const interestArea = req.body.interestArea;
  const selfDescription = req.body.selfDescription;
  let notification = req.body.notification || req.body.not_notification;

  console.log(userId, userName, workPosition, interestArea, selfDescription);
  // console.log(notification.value)
  if ((notification = "not_notification")) {
    notification = 0;
  } else {
    notification = 1;
  }

  try {
    const [rows, fields] = await db.execute(
      "SELECT * FROM users WHERE userName = ? OR workPosition = ? OR interestArea = ? OR selfDescription = ? OR notification = ? OR id = ?",
      [
        userName,
        workPosition,
        interestArea,
        selfDescription,
        notification,
        userId,
      ]
    );

    if (rows.length > 0) {
      await db.execute(
        `UPDATE users u
        JOIN users_google ug ON u.id = ug.id 
        JOIN users_naver un ON u.id = un.id 
        SET userName = ?, workPosition = ?, interestArea = ?, selfDescription = ?, grade = 5, createdAt = now(), updatedAt = now(), notification = ? WHERE id = ?`,
        [
          userName,
          workPosition,
          interestArea,
          selfDescription,
          notification,
          userId,
        ]
      );
      res.send("업데이트 성공");
      // res.redirect('http://localhost:5173');
    } else {
      // await db.execute(`INSERT INTO users (id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)`, [id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt]);

      // res.redirect('http://localhost:5173');
      res.send("실패");
    }
  } catch (error) {
    console.error("Database query error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/step3", async (req, res) => {
  const userName = req.query.username;
  try {
    const [rows, fields] = await db.execute(
      "SELECT * FROM users WHERE userName = ?",
      [userName]
    );
    console.log("rows", rows);
    console.log("fields", fields);

    if (rows.length > 0) {
      res.status(400).json({ message: "이미 가입된 회원입니다" });
    } else {
      await db.execute("INSERT INTO users (userName) VALUES (?)", [userName]);
      // res.redirect('http://localhost:5173');
      res.json({ message: "등록완료" });
    }
  } catch (error) {
    console.error("Database query error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
