// routes/: Route definitions.

const express = require('express');
const { startVPN, stopVPN, chooseProtocol } = require('../controllers/vpnController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/start', authMiddleware, startVPN);
router.post('/stop', authMiddleware, stopVPN);
router.post('/protocol', authMiddleware, chooseProtocol);

// Default route for /api/vpn
router.get('/', (req, res) => {
    res.send('Welcome to the VPN API');
});

module.exports = router;