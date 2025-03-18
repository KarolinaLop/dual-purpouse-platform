const express = require('express');
const { runScan, getScanResults } = require('../controllers/scanController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/run', authMiddleware, runScan);
router.get('/results', authMiddleware, getScanResults);

// Default route for /api/scan
router.get('/', (req, res) => {
    res.send('Welcome to the Scan API');
});

module.exports = router;