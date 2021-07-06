/*Clear Console*/
console.clear();

/*Imports*/
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const auth = require('./auth').authenticate;

/*Import Routes*/
const login = require('./routers/login');
const register = require('./routers/register');
const posts = require('./routers/posts')

/*Initial Variables*/
const app = express();
const PORT = 3001;

/*Middle Ware*/
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Authorization
//app.use(auth);

/*Routing*/
app.use('/api/register', register);
app.use('/api/login', login);
app.use('/api/posts', posts);

/*Setup Server*/
app.listen(PORT, () => {
    console.log(`[+] Server started on Port ${PORT}.`)
});