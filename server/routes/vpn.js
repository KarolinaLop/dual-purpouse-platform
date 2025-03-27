// routes/: Route definitions.

const express = require('express');
const { startVPN, stopVPN, restartVPN, chooseProtocol } = require('../controllers/vpnController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/start', authMiddleware, startVPN);
router.post('/stop', authMiddleware, stopVPN);
router.post('/restart', authMiddleware, restartVPN);
router.post('/protocol', authMiddleware, chooseProtocol);

// Default route for /api/vpn
router.get('/', (req, res) => {
    res.send('Welcome to the VPN API');
});

module.exports = router;