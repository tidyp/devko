const express = require('express');
const app = express();

// app.use(require('./login.route'));
app.use("/api/authGoogle", require('./user/googleAuth'))
// app.use("/api/authNaver", require('./user/authNaver'))
// app.use("/api/NaverProfile", require('./user/NaverProfile'))

module.exports = app;