const express = require('express');
const bodyParser = require('body-parser');

const db = require("../../config/db")
const router = express.Router();
const path = require('path')

router.get('/page', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'board.html'));
})

module.exports = router;