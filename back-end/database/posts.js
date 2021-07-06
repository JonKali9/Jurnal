const db = require('./db');
const generateSecret = require('../auth').generateSecret;

//Add a Post
const addPost = ( title, content, author_id, type ) => {
    return new Promise((res, rej) => {
        const query = `INSERT INTO posts (title, content, author_id, publish_date, type, isFeatured)
        VALUES ('${title}', '${content}', '${author_id}', '19/29/2021', '${type}', false)`;
        db.query(query, (err, data) => {
            if (err) console.log(err);
            res(data);
        });
    })
}

//Get a Post by Id
const getPost = id => {
    return new Promise((res, rej) => {
        db.query(`SELECT * FROM posts WHERE id = '${id}';`, (err, data) => {
            if (err) console.log(err);
            res(data);
        });
    })
}

//Get all Posts
const getPosts = () => {
    return new Promise((res, rej) => {
        db.query(`SELECT * FROM posts;`, (err, data) => {
            if (err) console.log(err);
            res(data);
        });
    })
}

module.exports = {
    addPost,
    getPost,
    getPosts
}