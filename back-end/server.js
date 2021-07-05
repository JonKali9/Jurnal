/*Clear Console*/
console.clear();

/*Imports*/
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const bcrypt = require('bcrypt');

/*Import Routes*/
const login = require('./routers/login');
const register = require('./routers/register');

/*Initial Variables*/
const app = express();
const PORT = 3001;

/*Middle Ware*/
app.use(morgan('tiny'));
app.use(bodyParser.json());

/*Routing*/
app.use('/login', login);
app.use('/register', register);

/*Setup Server*/
app.listen(PORT, () => {
    console.log(`[+] Server started on Port ${PORT}.`)
});