const express = require('express');
const db = require("../../config/db")
const router = express.Router();

router.get('/step2', (req, res) => {
    res.redirect('../public/userInfo.html')
})

module.exports = router;