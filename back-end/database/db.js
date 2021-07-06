const mysql = require('mysql2');

db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'password',
    database: 'jurnal'
});

module.exports = db;