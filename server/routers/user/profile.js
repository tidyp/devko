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
             u.interestPosition AS interestPosition,
             u.interestArea AS interestArea,
             u.selfDescription AS selfDescription,
             u.grade AS grade
      FROM users u
      WHERE u.id = ?
    `;

    const postsql = `
      Select bv.userId AS postID,
             bv.category AS category,
             bv.title AS title,
             bv.content AS postContent
      FROM boardsView bv
      LEFT JOIN users u ON bv.userId = u.id
      WHERE u.id = ?
    `;

    const commentsql = `
      Select c.userId As commentID,
             c.content AS commentContent
      FROM users u
      LEFT JOIN boardView bv ON bv.userId = u.id
      LEFT JOIN comments c ON c.userId = u.id
      WHERE u.id = ?
    `;

    const userId = req.params.userId;

    const [userrows, userfields] = await db.query(usersql, [userId]);
    const gradeLevels = {
      5: 'junior',
      4: 'middle',
      3: 'senior',
      2: 'CTO',
      1: 'CEO',
      0: 'admin'
    };
    userrows.forEach(row => {
      if(row.grade in gradeLevels) {
        row.grade = gradeLevels[row.grade];
      };
      console.log(row.grade);
    });
    const [postrows, postfields] = await db.query(postsql, [userId]);
    const [commentrows, commentfields] = await db.query(commentsql, [userId]);
    res.json({userrows, postrows, commentrows});
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  };
});

// 프로필 이미지 수정 구현
// router.get("/image", async (req, res) => {
//   const filePath = req.file.path; // 파일 데이터를 Path로 가져옴
//   const sql = 'UPDATE users u SET profileImage = ? WHERE u.id = ?';
//     // const userId = req.body.userId;
//   const userId = 'd77faaa9-b197-4d8f-b897-eae3a4cd9b71';

//   try {
//     const [rows, fields] = await db.query(sql, [filePath, userId]);
//     res.redirect("http://localhost:5173/userinfo/d77faaa9-b197-4d8f-b897-eae3a4cd9b71");
//   } catch (err) {
//     console.error("Query execution error:", err);
//     res.status(500).send("Internal Server Error");
//   };
// });

// 커뮤니티 포인트 구현

router.get("/:userId/point", async (req, res) => {
  const sql = `
    SELECT uv.id AS userId, 
          bv.count AS postCnt,
          c.count AS commentCnt,
          bvt.count AS teamCnt
    FROM usersView uv
    LEFT OUTER JOIN (SELECT userId, COUNT(*) AS count FROM boardView GROUP BY userId) p ON uv.id = p.userId
    LEFT OUTER JOIN (SELECT userId, COUNT(*) AS count FROM boardView WHERE posts.category = 'group' GROUP BY userId) bvt ON uv.id = pt. userId
    LEFT OUTER JOIN (SELECT userId, COUNT(*) AS count FROM comments GROUP BY userId) c ON uv.id = c.userId
    WHERE uv.id =?
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