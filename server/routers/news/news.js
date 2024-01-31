const express = require("express");
const router = express.Router();

const Parser = require("rss-parser");
const parser = new Parser();

const blogs = require("./blog.json");
const db = require("../../config/db");

router.get("/", async (req, res) => {
  try {
    const blog = "https://helloworld.kurly.com/feed.xml";
    let feed = await parser.parseURL(blog);

    let result = [];

    feed.items.forEach((data) => {
      result.push({
        title: data.title,
        link: data.link,
        pubDate: data.pubDate,
      });
    });

    for (const data of result) {
      const userId = "devko";
      const title = data.title;
      const content = data.link;
      const category = "news";
      const pubDate = new Date(data.pubDate);
      // const tags = req.body.tags;

      try {
        const postSql = `INSERT INTO posts (userId, title, content, category, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?);`;
        const setSql = `SET @postId = LAST_INSERT_ID();`;
        const newsSql = `INSERT INTO news (postId) VALUES (@postId)`;
        const likeSql = `INSERT INTO likes (postId) VALUES (@postId)`;
        const viewSql = `INSERT INTO views (postId) VALUES (@postId)`;
        // const tagSql = `INSERT INTO tags (postId, id, name) VALUES (@postId, ?, ?);`;

        await db.query(postSql, [
          userId,
          title,
          content,
          category,
          pubDate,
          pubDate,
        ]);
        await db.query(setSql);
        await db.query(newsSql);
        await db.query(likeSql);
        await db.query(viewSql);

        // for (i = 0; i < tags.length; i++) {
        //   await db.query(tagSql, [i + 1, tags[i]]);
        // }
      } catch (error) {
        throw error;
      }
    }

    res.send("완료");
  } catch (err) {
    console.error("Query execution error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
