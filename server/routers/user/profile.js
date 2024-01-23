const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../../config/db");
require("dotenv").config();

// 프로필 페이지
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const userinfo = `SELECT * FROM users WHERE id = ?`;
  const userpost = `SELECT * FROM posts WHERE userId = ?`;
  const usercomment = `SELECT * FROM comments WHERE userId = ?`;

  try {
    const [userinfoData] = await db.execute(userinfo, [`${userId}`]);
    const [userpostData] = await db.execute(userpost, [`${userId}`]);
    const [usercommentData] = await db.execute(usercomment, [`${userId}`]);
    // const sql = `
    // SELECT u.userName AS userName,
    //        u.profileImage AS profileImage,
    //        u.workPosition AS workPosition,
    //        u.interestArea AS interestArea,
    //        u.selfDescription AS selfDescription,
    //        u.grade AS grade,
    //        p.userId AS postID,
    //        p.category AS category,
    //        p.title AS title,
    //        p.content AS postContent,
    //        c.userId As commentID,
    //        c.content AS commentContent
    // FROM users u
    // LEFT JOIN posts p ON p.userId = u.id
    // LEFT JOIN comments c ON c.userId = u.id
    // WHERE u.id = ?
    // `;

    // const [rows, fields] = await db.query(sql, [userId]);
    // console.log(rows);
    // rows.forEach((row) => {
    //   if ((row.grade = 5)) {
    //     row.grade = "junior";
    //   } else if ((row.grade = 4)) {
    //     row.grade = "middle";
    //   } else if ((row.grade = 3)) {
    //     row.grade = "senior";
    //   } else if ((row.grade = 2)) {
    //     row.grade = "CTO";
    //   } else if ((row.grade = 1)) {
    //     row.grade = "CEO";
    //   } else if ((row.grade = 0)) {
    //     row.grade = "admin";
    //   }
    // });
    res.json({ userinfoData, userpostData, usercommentData });
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 프로필 이미지 수정 구현
router.get("/image", async (req, res) => {
  const sql = `SELECT profileImage FROM users u WHERE u.id = ?`;
  // const userId = req.body.userId;
  const userId = "ca436c51-f3b7-45fe-9a7e-275269a81e6e";

  try {
    const [rows, fields] = await db.query(sql, [userId]);
    rows.forEach((row) => {
      if ((row.grade = 5)) {
        row.grade = "junior";
      } else if ((row.grade = 4)) {
        row.grade = "middle";
      } else if ((row.grade = 3)) {
        row.grade = "senior";
      } else if ((row.grade = 2)) {
        row.grade = "CTO";
      } else if ((row.grade = 1)) {
        row.grade = "CEO";
      } else if ((row.grade = 0)) {
        row.grade = "admin";
      }
    });
    res.send(rows[0].profileImage);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 커뮤니티 포인트 구현

router.get("/point", async (req, res) => {
  // t.count AS teamCnt,
  // SUM(p.count, c.count, t.count) AS TotalCnt -- gpt 하기
  const sql = `
  SELECT p.count AS postCnt,
         c.count AS commentCnt,
  FROM (
      SELECT u.id AS id
        , u.userName AS userName
        , u.profileImage AS profileImage
        , u.grade AS grade
        , ug.googleId AS googleId
        , ug.googleEmail AS googleEmail
        , ug.googleImage AS googleImage
        , un.naverId AS naverId
        , un.naverEmail AS naverEmail
        , un.naverImage AS naverImage
      FROM users u
      LEFT OUTER JOIN usersgoogle ug ON u.googleId = ug.id
      LEFT OUTER JOIN usersnaver un ON u.naverId = un.id) u
LEFT OUTER JOIN (SELECT userId, COUNT(*) AS count FROM posts GROUP BY userId) p ON u.id = p.userId
LEFT OUTER JOIN (SELECT userId, COUNT(*) AS count FROM comments GROUP BY userId) c ON u.id = c.userId
WHERE u.id =?
`;
  // const userId = req.body.userId;
  const userId = "ca436c51-f3b7-45fe-9a7e-275269a81e6e";

  try {
    const [rows, fields] = await db.query(sql, [userId]);
    // for (let n=0, n<length, n++) { -- gpt 하기
    //   for (let j=0, j<length, j++) {
    //     rows.postCnt = 1/3 * n;
    //     rows.commentCnt = 1/5 * j;

    //     if (rows.postCnt > 3000) {
    //       rows.postCnt = 1000;
    //     } else if (rows.commentCnt > 5000) {
    //       rows.commentCnt = 1000;
    //     }
    //   }
    // }
    res.json(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 이메일 찾기 -- 이전 필요 (/find/info)

router.get("/find/info", async (req, res) => {
  const sql = `
  SELECT un.naverEmail ,
         ug.googleEmail
  FROM usersnaver un
  LEFT JOIN users u ON u.naverId = un.id
  LEFT JOIN usersgoogle ug ON ug.id = u.googleId
  WHERE un.naverEmail = ? OR ug.googleEmail = ?`;
  // const googleEmail = req.body.googleEmail;
  const googleEmail = "jinyr5654@gmail.com";
  // const naverEmail = req.body.naverEmail;
  const naverEmail = "dudfhr217@jr.naver.com";

  try {
    const [rows, fields] = await db.query(sql, [googleEmail, naverEmail]);
    res.json(rows);
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
