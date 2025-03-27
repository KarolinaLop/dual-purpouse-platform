// controllers/: Logic for handling VPN requests and responses.

const { startVPNService, stopVPNService, restartVPNService, setVPNProtocol } = require('../utils/vpnServiceUtils');

const startVPN = (req, res) => {
    try {
        startVPNService();
        res.send('VPN started');
    } catch (error) {
        res.status(500).send('Error starting VPN');
    }
};

const stopVPN = (req, res) => {
    try {
        stopVPNService();
        res.send('VPN stopped');
    } catch (error) {
        res.status(500).send('Error stopping VPN');
    }
};

const restartVPN = (req, res) => {
    try {
        restartVPNService();
        res.send('VPN restarted');
    } catch (error) {
        res.status(500).send('Error restarting VPN');
    }
};

const chooseProtocol = (req, res) => {
    const { protocol } = req.body;
    try {
        setVPNProtocol(protocol);
        res.send(`VPN protocol set to ${protocol}`);
    } catch (error) {
        res.status(500).send('Error setting VPN protocol');
    }
};

module.exports = { startVPN, stopVPN, restartVPN, chooseProtocol };