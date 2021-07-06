const getSession = require('./database/users').getSession;

const generateSecret = length => {
    const values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./';
    let secret = '$';
    for (let i=0; i<length; i++) {
        secret += values[Math.floor(Math.random()*values.length)];
    }
    return secret;
}

const authenticate = (req, res, next) => {
    const publicUrls = ['/api/register', '/api/login'];
    if (!publicUrls.includes(req.url)) {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            //Get authorization info
            const authToken = authHeader.split(' ')[1];
            //Check if secret is valid and update
            const newSecret = generateSecret(26);
            getSession(authToken, newSecret)
            .then(resp => {
                if (resp === 'invalid') res.status(401).send('Invalid token');
                else {
                    next()
                };
            })
        } else {
            res.status(401).send('No request Headers');
        }
    } else {
        next();
    }
}

module.exports.authenticate = authenticate;
module.exports.generateSecret = generateSecret;