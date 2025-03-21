// utils/: Utility functions.

const { exec } = require('child_process');

const startVPNService = () => {
    exec('sudo systemctl start openvpn', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting VPN: ${error.message}`);
            throw new Error('Error starting VPN');
        }
        if (stderr) {
            console.error(`VPN start stderr: ${stderr}`);
        }
        console.log(`VPN started: ${stdout}`);
    });
};

const stopVPNService = () => {
    exec('sudo systemctl stop openvpn', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping VPN: ${error.message}`);
            throw new Error('Error stopping VPN');
        }
        if (stderr) {
            console.error(`VPN stop stderr: ${stderr}`);
        }
        console.log(`VPN stopped: ${stdout}`);
    });
};

const restartVPNService = () => {
    exec('sudo systemctl restart openvpn', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error restarting VPN: ${error.message}`);
            throw new Error('Error restarting VPN');
        }
        if (stderr) {
            console.error(`VPN restart stderr: ${stderr}`);
        }
        console.log(`VPN restarted: ${stdout}`);
    });
};

const setVPNProtocol = (protocol) => {
    if (protocol === 'OpenVPN') {
        exec('sudo systemctl start openvpn', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error setting VPN protocol to OpenVPN: ${error.message}`);
                throw new Error('Error setting VPN protocol to OpenVPN');
            }
            if (stderr) {
                console.error(`VPN protocol set stderr: ${stderr}`);
            }
            console.log(`VPN protocol set to OpenVPN: ${stdout}`);
        });
    } else if (protocol === 'WireGuard') {
        exec('sudo systemctl start wg-quick@wg0', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error setting VPN protocol to WireGuard: ${error.message}`);
                throw new Error('Error setting VPN protocol to WireGuard');
            }
            if (stderr) {
                console.error(`VPN protocol set stderr: ${stderr}`);
            }
            console.log(`VPN protocol set to WireGuard: ${stdout}`);
        });
    } else {
        throw new Error('Unsupported VPN protocol');
    }
};

module.exports = { startVPNService, stopVPNService, restartVPNService, setVPNProtocol };