/*Imports*/
const express = require('express');
const router = express.Router();

/*Login*/
router.post('/', (req, res) => {
    res.send('login');
});

/*Export Route*/
module.exports = router;