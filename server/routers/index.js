const express = require('express');
const app = express();

app.use('/api/googleAuth', require('./user/googleAuth'))
app.use('/api/naverAuth', require('./user/naverAuth'))
app.use('/api/additionalInfo', require('./user/additionalInfo'))

app.use('/api/post/list', require('./post/list'))
app.use('/api/post/view', require('./post/view'))


module.exports = app;