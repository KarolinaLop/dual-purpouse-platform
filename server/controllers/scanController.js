// controllers/: Logic for handling scan requests and responses.

const { executeOpenVASScan, executeZenmapScan } = require('../utils/scanUtils');
const Scan = require('../models/scan');

const runScan = (req, res) => {
    const { target, scanType } = req.body;
    const scanFunction = scanType === 'OpenVAS' ? executeOpenVASScan : executeZenmapScan;

    scanFunction(target, async (error, result) => {
        if (error) {
            return res.status(500).send('Error executing scan');
        }

        try {
            const scan = new Scan({ target, scanType, result });
            await scan.save();
            res.send('Scan completed and results saved');
        } catch (saveError) {
            res.status(500).send('Error saving scan results');
        }
    });
};

const getScanResults = async (req, res) => {
    try {
        const scans = await Scan.find();
        res.json(scans);
    } catch (error) {
        res.status(500).send('Error fetching scan results');
    }
};

module.exports = { runScan, getScanResults };