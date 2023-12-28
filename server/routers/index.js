const express = require('express');
const app = express();

app.use('/api/googleAuth', require('./user/googleAuth'))
app.use('/api/naverAuth', require('./user/naverAuth'))
app.use('/api/additionalInfo', require('./user/additionalInfo'))

app.use('/api/board', require('./post/board'))

module.exports = app;