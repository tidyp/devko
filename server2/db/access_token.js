var mysql = require('mysql');
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1030',
    database: 'test',
    port: 3306
});
db.connect();

module.exports = db;