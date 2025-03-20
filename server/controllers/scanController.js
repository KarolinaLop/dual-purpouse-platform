// controllers/: Logic for handling scan requests and responses.

const { executeScan, fetchScanResults } = require('../utils/scanUtils');

const runScan = (req, res) => {
    const { scanType } = req.body;
    try {
        executeScan(scanType);
        res.send('Scan started');
    } catch (error) {
        res.status(500).send('Error starting scan');
    }
};

const getScanResults = (req, res) => {
    try {
        const results = fetchScanResults();
        res.json(results);
    } catch (error) {
        res.status(500).send('Error fetching scan results');
    }
};

module.exports = { runScan, getScanResults };