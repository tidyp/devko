const Parser = require("rss-parser");
const parser = new Parser();

// const blogs = require("../news/blog.json");
const db = require("../../config/db");
require("dotenv").config();

const blog = "https://helloworld.kurly.com/feed.xml";

async function fetchArticles(blog) {
  let feed = await parser.parseURL(blog);
  let result = [];

  feed.items.forEach((data) => {
    result.push({
      title: data.title,
      link: data.link,
      pubDate: data.pubDate,
    });
  });


  await db.query("START TRANSACTION;");

  try {
    for (const data of result) {
      const userId = "devko";
      const title = data.title;
      const content = data.link;
      const category = "news";
      const pubDate = new Date(data.pubDate);

      const postSql = `INSERT INTO posts (userId, title, content, category, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?);`;
      const setSql = `SET @postId = LAST_INSERT_ID();`;
      const newsSql = `INSERT INTO news (postId) VALUES (@postId)`;
      const likeSql = `INSERT INTO likes (postId) VALUES (@postId)`;
      const viewSql = `INSERT INTO views (postId) VALUES (@postId)`;

      // Execute queries within the transaction
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
    }
    await db.query("COMMIT;");

    console.log("Transaction committed successfully");
  } catch (error) {
    await db.query("ROLLBACK;");
    console.error("Transaction rolled back due to error:", error);
  }
}

fetchArticles(blog);

module.exports = fetchArticles;
