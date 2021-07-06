const db = require('./db');


const generateSecret = length => {
    const values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./';
    let secret = '$';
    for (let i=0; i<length; i++) {
        secret += values[Math.floor(Math.random()*values.length)];
    }
    return secret;
}

//Add a User
const addUser = ( username, email, password ) => {
    return new Promise((res, rej) => {
        const secret = generateSecret(26);
        const query = `INSERT INTO users (username, email, password, isAdmin, secret)
        VALUES ('${username}', '${email}', '${password}', false, '${secret}');`;
        db.query(query, (err, data) => {
            if (err) {
                console.log(err);
            };
            res(data);
        });
    })
}

//Get a User by username
const getUser = username => {
    return new Promise((res, rej) => {
        db.query(`SELECT * FROM users WHERE username = '${username}';`, (err, data) => {
            if (err) console.log(err);
            res(data);
        });
    })
}

//Check session token and set new one
const getSession = (secret, newSecret) => {
    return new Promise((res, rej) => {
        db.query(`SELECT * FROM users WHERE secret = '${secret}';`, (err, data) => {
            if (err) console.log(err);
            if (data[0]) {
                const query = `UPDATE users SET secret='${newSecret}' WHERE secret='${secret}';`;
                db.query(query, (err, data) => {
                    if (err) console.log(err);
                    res(newSecret);
                })
            } else {
                res('invalid')
            }
        });
    })
}

module.exports = {
    addUser,
    getUser,
    getSession
}