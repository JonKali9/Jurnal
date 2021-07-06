/*Imports*/
const express = require('express');
const router = express.Router();
const posts = require('../database/posts');

/*Get all posts*/
router.get('/', async (req, res) => {
    posts.getPosts()
    .then(posts => {
        res.send(posts);
    })
})

/*Get a specific post*/
router.get('/:id', async (req, res) => {
    posts.getPost(req.params.id)
    .then(posts => {
        res.send(posts);
    })
})

/*Add a Post*/
router.post('/', (req, res) => {
    const { title, content, author_id, type } = req.body;
    posts.addPost(title, content, author_id, type)
    .then(res.sendStatus(200));
})

/*Export Route*/
module.exports = router;