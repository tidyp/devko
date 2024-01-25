const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../../config/db");
require("dotenv").config();

// 프로필 페이지
router.get("/:userId", async (req, res) => {
  try {
    const usersql = `
    SELECT u.userName AS userName,
           u.profileImage AS profileImage,
           u.workPosition AS workPosition,
           u.interestArea AS interestArea,
           u.selfDescription AS selfDescription,
           u.grade AS grade
    FROM users u
    WHERE u.id = ?
    `;

    const postsql = `
    Select p.userId AS postID,
           p.category AS category,
           p.title AS title,
           p.content AS postContent
    FROM users u
    LEFT JOIN posts p ON p.userId = u.id
    WHERE u.id = ?
    `;

    const commentsql = `
    Select c.userId As commentID,
           c.content AS commentContent
    FROM users u
    LEFT JOIN posts p ON p.userId = u.id
    LEFT JOIN comments c ON c.userId = u.id
    WHERE u.id = ?
    `;

    const userId = req.params.userId;

    const [userrows, userfields] = await db.query(usersql, [userId]);
    userrows.forEach(row => {
      if (row.grade = 5) {
        row.grade = 'junior'
      } else if (row.grade = 4) {
        row.grade = 'middle'
      } else if (row.grade = 3) {
        row.grade = 'senior'
      } else if (row.grade = 2) {
        row.grade = 'CTO'
      } else if (row.grade = 1) {
        row.grade = 'CEO'
      } else if (row.grade = 0) {
        row.grade = 'admin'
      };
    });
    const [postrows, postfields] = await db.query(postsql, [userId]);
    const [commentrows, commentfields] = await db.query(commentsql, [userId]);
    res.json({userrows, postrows, commentrows});
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// 프로필 이미지 수정 구현
router.get("/image", async (req, res) => {
    const sql = `SELECT profileImage FROM users u WHERE u.id = ?`;
    // const userId = req.body.userId;
    const userId = 'ca436c51-f3b7-45fe-9a7e-275269a81e6e';

    try {
      const [rows, fields] = await db.query(sql, [userId]);
      rows.forEach(row => {
        if (row.grade = 5) {
          row.grade = 'junior'
        } else if (row.grade = 4) {
          row.grade = 'middle'
        } else if (row.grade = 3) {
          row.grade = 'senior'
        } else if (row.grade = 2) {
          row.grade = 'CTO'
        } else if (row.grade = 1) {
          row.grade = 'CEO'
        } else if (row.grade = 0) {
          row.grade = 'admin'
        };
      });
      res.send(rows[0].profileImage);
    } catch (err) {
      console.error("Query execution error:", err);
      res.status(500).send("Internal Server Error");
    };
});

// 커뮤니티 포인트 구현

router.get("/:userId/point", async (req, res) => {
  const sql = `
  SELECT p.count AS postCnt,
        c.count AS commentCnt,
        pt.count AS teamCnt
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
  LEFT OUTER JOIN (SELECT userId, COUNT(*) AS count FROM posts WHERE posts.category = 'group' GROUP BY userId) pt ON u.id = pt.userId
  LEFT OUTER JOIN (SELECT userId, COUNT(*) AS count FROM comments GROUP BY userId) c ON u.id = c.userId
  WHERE u.id =?
  `;
  const userId = req.params.userId;
  // const userId = 'd77faaa9-b197-4d8f-b897-eae3a4cd9b71';

  try {
    const [rows, fields] = await db.query(sql, [userId]);
    console.log(rows);

    let postPoint = Math.floor((1/3 * rows[0].postCnt) * 100) / 100;
    let commentPoint = Math.floor((1/5 * rows[0].commentCnt) * 100) / 100;
    const teamPoint = Math.floor((rows[0].teamCnt) * 100) / 100;
    
    if (postPoint - Math.floor(1/3 * rows[0].postCnt) < 0.25 ||
        commentPoint - Math.floor(1/5 * rows[0].commentCnt) < 0.25
    ) {
      postPoint = Math.floor(postPoint);
      commentPoint = Math.floor(commentPoint);
    } else if (postPoint - Math.floor(1/3 * rows[0].postCnt) >= 0.25 && 
               postPoint - Math.floor(1/3 * rows[0].postCnt) < 0.75 ||
               commentPoint - Math.floor(1/5 * rows[0].commentCnt) >= 0.25 &&
               commentPoint - Math.floor(1/5 * rows[0].commentCnt) < 0.75
    ) {
      postPoint = Math.floor(postPoint) + 0.5;
      commentPoint = Math.floor(commentPoint) + 0.5;
    } else {
      postPoint = Math.ceil(postPoint);
      commentPoint = Math.ceil(commentPoint);
    };

    const totalPoint = postPoint + commentPoint + teamPoint;

    res.json({postPoint, commentPoint, teamPoint, totalPoint});
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  };
});

module.exports = router;