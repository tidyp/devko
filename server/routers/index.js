const express = require('express');
const app = express();

<<<<<<< HEAD
app.use("/api/googleAuth", require('./user/googleAuth'))
app.use("/api/naverAuth", require('./user/naverAuth'))
=======
app.use('/api/googleAuth', require('./user/googleAuth'))
app.use('/api/naverAuth', require('./user/naverAuth'))
app.use('/api/additionalInfo', require('./user/additionalInfo'))
>>>>>>> main

module.exports = app;