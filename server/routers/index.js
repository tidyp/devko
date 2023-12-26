const express = require('express');
const app = express();

app.use("/api/googleAuth", require('./user/googleAuth'))
app.use("/api/naverAuth", require('./user/naverAuth'))

module.exports = app;