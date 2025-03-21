// middlewares/: Middleware functions for request processing.

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).send('Access denied. No token provided.');
    }

    const token = authHeader.replace('Bearer ', '');
    if (!token) {
        return res.status(401).send('Access denied. Invalid token format.');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).send('Access denied. Token has expired.');
        }
        res.status(400).send('Invalid token.');
    }
};

module.exports = authMiddleware;