const express = require("express");
const router = express.Router();
const db = require("../../config/db");

// 사이드 전체 보기
router.get("/", async (req, res) => {
  try {
    const tagsql = `
        Select name, Count(name) AS tagCnt FROM tags GROUP BY name ORDER BY Count(name) DESC LIMIT 5
    `;
    const toppostsql = `
        Select uv.userName, Count(tv.postCnt) 
        FROM totalwritesView tv
        LEFT OUTER JOIN usersview uv ON tv.userId = uv.id
        GROUP BY uv.userName
        ORDER BY Count(tv.postCnt) DESC LIMIT 5
    `;

    const topcommentsql = `
        Select uv.userName, Count(tv.commentCnt) 
        FROM totalwritesView tv
        LEFT OUTER JOIN usersview uv ON tv.userId = uv.id
        GROUP BY uv.userName
        ORDER BY Count(tv.commentCnt) DESC LIMIT 5
    `;

    const topteamsql = `
        Select uv.userName, Count(tv.teamCnt) 
        FROM totalwritesView tv
        LEFT OUTER JOIN usersview uv ON tv.userId = uv.id
        GROUP BY uv.userName
        ORDER BY Count(tv.teamcnt) DESC LIMIT 5
    `;

    const [tagrows, tagfields] = await db.query(tagsql);
    const [toppostrows, toppostfields] = await db.query(toppostsql);
    const [topcommentrows, topcommentfields] = await db.query(topcommentsql);
    const [topteamrows, topteamfields] = await db.query(topteamsql);
    res.json({ tagrows, toppostrows, topcommentrows, topteamrows });
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  };
});

module.exports = router;