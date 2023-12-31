const express = require('express');
const app = express();

app.use('/api/googleAuth', require('./user/googleAuth'))
app.use('/api/naverAuth', require('./user/naverAuth'))
app.use('/api/additionalInfo', require('./user/additionalInfo'))

app.use('/api/post/list', require('./post/list'))
app.use('/api/post/view', require('./post/view'))
app.use('/api/post/write', require('./post/write'))
app.use('/api/post/edit', require('./post/edit'))
app.use('/api/post/delete', require('./post/delete'))


module.exports = app;