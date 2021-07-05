/*Imports*/
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

/*Routes*/
router.post('/', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        //Add User to Database
        res.send(200);
    } catch {
        res.send(404);
    }
})

/*Export Route*/
module.exports = router;