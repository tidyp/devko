const express = require("express");
const db = require("../../config/db");
const router = express.Router();
const path = require("path");
const { v4: uuidv4 } = require("uuid");

router.get("/step2", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "userInfo.html"));
});

router.post("/step3", async (req, res) => {
  // const userId = req.cookies.userId;
  const userId = uuidv4();
  const userName = req.body.userName;
  const workPosition = req.body.workPosition;
  const interestArea = req.body.interestArea;
  const selfDescription = req.body.selfDescription;
  // let notification = req.body.notification || req.body.not_notification;
  let notification = 1;

  console.log(userId, userName, workPosition, interestArea, selfDescription, notification);
  // console.log(notification.value)
  // if ((notification = "not_notification")) {
  //   notification = 0;
  // } else {
  //   notification = 1;
  // }

  const SELECT_USER_QUERY = "SELECT * FROM users WHERE userName = ? OR workPosition = ? OR interestArea = ? OR selfDescription = ? OR notification = ? OR id = ?";
const INSERT_USER_QUERY = `
  INSERT INTO users (
    id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt, grade, notification, googleId, naverId
  ) VALUES (?, ?, ?, ?, ?, NOW(), NOW(), 5, ?, (SELECT id FROM usersgoogle WHERE id = 5), (SELECT id FROM usersnaver WHERE id = 5))
`;

const [rows] = await db.execute(SELECT_USER_QUERY, [userName, workPosition, interestArea, selfDescription, notification, userId]);

try{
    if (rows.length > 0) {
      await db.execute(INSERT_USER_QUERY, [userId, userName, workPosition, interestArea, selfDescription, notification]);
      res.send("업데이트 성공");
      
    } else {
      res.send("업데이트 성공");
    }
  // try {
  //   const [rows, fields] = await db.execute(
  //     "SELECT * FROM users WHERE userName = ? OR workPosition = ? OR interestArea = ? OR selfDescription = ? OR notification = ? OR id = ?",
  //     [
  //       userName,
  //       workPosition,
  //       interestArea,
  //       selfDescription,
  //       notification,
  //       userId,
  //     ]
  //   );

  //   if (rows.length > 0) {
  //     const sql = `
  //     INSERT INTO users (
  //       id VARCHAR(64),
  //       userName VARCHAR(45),
  //       profileImage TEXT,
  //       workPosition VARCHAR(64),
  //       interestArea VARCHAR(64),
  //       selfDescription TEXT,
  //       createdAt DATETIME,
  //       updatedAt DATETIME,
  //       grade INT,
  //       notification INT,
  //       googleId INT,
  //       naverId INT)
  //     VALUES (id= ?,
  //       userName = ?,
  //       workPosition = ?,
  //       interestArea = ?,
  //       selfDescription = ?,
  //       createdAt = NOW(),
  //       updatedAt = NOW(),
  //       grade = 5,
  //       notification = ?,
  //       googleId = (SELECT id FROM usersgoogle WHERE id = 1),
  //       naverId = (SELECT id FROM usersnaver WHERE id = 1)
  //       )`
  //     await db.execute(sql, [
  //           userId,
  //           userName,
  //           workPosition,
  //           interestArea,
  //           selfDescription,
  //           notification,

  //         ])
  //     // await db.execute(
  //     //   `UPDATE users SET userName = ?, workPosition = ?, interestArea = ?, selfDescription = ?, grade = 5, createdAt = now(), updatedAt = now(), notification = ? WHERE id = ?`,
  //     // [
  //     //     userId,
  //     //     userName,
  //     //     workPosition,
  //     //     interestArea,
  //     //     selfDescription,
  //     //     notification,
  //     //     userId,
  //     //   ]
  //     // );
  //     res.send("업데이트 성공");
  //     // res.redirect('http://localhost:5173');
  //   } else {
  //     // await db.execute(`INSERT INTO users (id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)`, [id, userName, workPosition, interestArea, selfDescription, createdAt, updatedAt]);

  //     // res.redirect('http://localhost:5173');
  //     res.send("실패");
  //   }
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
