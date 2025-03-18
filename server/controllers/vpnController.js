const { startVPNService, stopVPNService, setVPNProtocol } = require('../utils/vpnUtils');

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

const chooseProtocol = (req, res) => {
    const { protocol } = req.body;
    try {
        setVPNProtocol(protocol);
        res.send(`VPN protocol set to ${protocol}`);
    } catch (error) {
        res.status(500).send('Error setting VPN protocol');
    }
};

module.exports = { startVPN, stopVPN, chooseProtocol };