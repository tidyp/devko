const express = require("express");
const router = express.Router();

const Parser = require("rss-parser");
const parser = new Parser();

const blogs = require("./blog.json");
const db = require("../../config/db.js");

router.get("/", async (req, res) => {
  for (const [company, blog] of Object.entries(blogs)) {
    let feed = await parser.parseURL(blog);
    console.log(feed);

    feed.items.forEach((data) => {
      result.push({
        title: data.title,
        link: data.link,
        pubDate: data.pubDate,
      });
    });
    for (const data of result) {
      const userId = company;
      const title = data.title;
      const content = data.link;
      const category = "articles";
      const pubDate = new Date(data.pubDate);
      // const tags = req.body.tags;

      try {
        const postSql = `INSERT INTO articles (userId, title, content, category, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?);`;
        const setSql = `SET @postId = LAST_INSERT_ID();`;
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
  }
});

module.exports = router;