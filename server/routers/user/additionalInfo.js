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
  let profileImage;
  const workPosition = req.body.workPosition;
  const interestArea = req.body.interestArea;
  const selfDescription = req.body.selfDescription;
  // const googleId = req.body.userId || 0;
  // const naverId = req.body.userId || 0;
  const googleId = 0;
  const naverId = 0;
  // let notification = req.body.notification;

  profileImage = req.body.userImage
  // if (req.body.googleImage) {
  //   profileImage = req.body.googleImage;
  // } else if (req.body.naverImage) {
  //   profileImage = req.body.naverImage;
  // }

  console.log(req.body);
  //   console.log(req.body.naverImage)
  //   console.log(req.body.googleImage)
  const INSERT_USER_QUERY = `
    INSERT INTO users (id, userName, profileImage, workPosition, interestArea, selfDescription, createdAt, updatedAt, grade, notification, googleId, naverId)
    VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW(), 5, 1, (SELECT id FROM usersgoogle WHERE googleId = ?), (SELECT id FROM usersnaver WHERE naverId = ?))
    `;
  console.log(
    userId,
    userName,
    profileImage,
    workPosition,
    interestArea,
    selfDescription,
    googleId,
    naverId
  );
  try {
    const [rows, fields] = await db.execute(INSERT_USER_QUERY, [
      userId,
      userName,
      profileImage,
      workPosition,
      interestArea,
      selfDescription,
      googleId,
      naverId,
    ]);
    res.send("업데이트 성공");
  } catch (error) {
    console.error("Database query error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/step3", async (req, res) => {
  try {
    const [rows, fields] = await db.execute(
      `SELECT * FROM users u
       LEFT OUTER JOIN usersgoogle g ON u.googleId = g.id
       LEFT OUTER JOIN usersnaver n ON u.naverId = n.id
       WHERE userName = ?`,
      [userName]
    );

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
