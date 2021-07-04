const generateSecret = length => {
    const values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./';
    let secret = '$';
    for (let i=0; i<length; i++) {
        secret += values[Math.floor(Math.random()*values.length)];
    }
    return secret;
}

const authenticate = (req, res, next) => {
    const publicUrls = ['/api/register'];
    if (!publicUrls.includes(req.url)) {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            //Get authorization info
            const auth = new Buffer.from(authHeader.split(' ')[1],
            'base64').toString().split(':');
            const user = auth[0];
            const pass = auth[1];

            //Check if User is already registered
        
            //Authorize User
            const secret = generateSecret(26);
            next();
        } else {
            res.status(401).send('No request Headers');
        }
    } else {
        next();
    }
}

module.exports = authenticate;
module.exports.generateSecret = generateSecret;