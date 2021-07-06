/*Imports*/
const express = require('express');
const router = express.Router();
const users = require('../database/users');

/*Login*/
router.post('/', async (req, res) => {
    const { username, password } = req.body;
    users.getUser(username)
    .then(user => {
        if (user[0]) {
            if (user[0].password === password) {
                const secret = user[0].secret;
                res.status(200).send(secret);
            }
            else res.status(401).send('Incorrect Password')
        } else {
            res.status(404).send('User not found')
        }
    })
});

/*Export Route*/
module.exports = router;