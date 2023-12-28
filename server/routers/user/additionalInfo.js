const express = require('express');
const db = require("../../config/db");
const router = express.Router();
const path = require('path');

router.get('/step2', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'userInfo.html'));
});

router.get('/step3', (req, res) => {

});

module.exports = router;