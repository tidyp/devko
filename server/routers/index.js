const express = require('express');
const app = express();

app.use('/api/googleAuth', require('./user/googleAuth'))
app.use('/api/naverAuth', require('./user/naverAuth'))
app.use('/api/additionalInfo', require('./user/additionalInfo'))

module.exports = app;