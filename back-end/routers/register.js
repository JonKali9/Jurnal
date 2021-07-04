/*Imports*/
const express = require('express');
const router = express.Router();

/*Register*/
router.post('/', async (req, res) => {
    res.send('register');
})

/*Export Route*/
module.exports = router;