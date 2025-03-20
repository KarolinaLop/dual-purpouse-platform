// routes/: Route definitions.

const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Default route for /api/auth
router.get('/', (req, res) => {
    res.send('Welcome to the Auth API');
});

module.exports = router;