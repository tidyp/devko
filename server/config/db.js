require("dotenv").config();
const mysql = require("mysql2/promise")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "devko"
});

module.exports = db;