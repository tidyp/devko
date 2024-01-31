const mysql = require("mysql2/promise");
require("dotenv").config();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "devko",
});

module.exports = db;
