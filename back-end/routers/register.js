/*Imports*/
const express = require('express');
const router = express.Router();
const users = require('../database/users');

/*Register*/
router.post('/', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        users.addUser(username, email, password)
        .then(resp => {
            if (resp) res.status(200).send('Account created');
            else res.status(406).send('Could not create account.')
        })
    } catch (err) {
        res.status(406).send('Could not create account.')
    }
})

/*Export Route*/
module.exports = router;