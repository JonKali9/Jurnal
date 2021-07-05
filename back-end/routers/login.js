/*Imports*/
const express = require('express');
const router = express.Router();

/*Routes*/
router.get('/', (req, res) => {
    res.send('login');
})

/*Export Route*/
module.exports = router;