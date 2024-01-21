const express = require("express");
const router = express.Router();

const Parser = require("rss-parser");
const parser = new Parser();

const fs = require("fs");
const db = require("../../config/db");

// try {
//   // 블로그 불러오기
//   const jsonFile = "blog.json";
//   const blogFile = fs.readFileSync(jsonFile, "utf8");
//   const blogLists = JSON.parse(blogFile);
//   console.log(blogLists);

//   for (const [company, feedUrl] of Object.entries(blogLists)) {
//     // console.log(company, feedUrl);
//     getRssTitles(feedUrl)
//       .then((titles) => {
//         titles.forEach((title) => console.log(title));
//         titles.forEach((links) => console.log(links));
//       })
//       .catch((error) => console.error("Error fetching RSS feed:", error));
//   }
// } catch (err) {
//   console.error("Error reading JSON file:", err);
// }

// async function getRssTitles(url) {
//   const feed = await parser.parseURL(url);
//   console.log(feed);
//   const titles = feed.items.map((item) => item.title);
//   const links = feed.items.map((item) => item.link);
//   const pubDates = feed.items.map((item) => item.pubDate);
// }

module.exports = router;
