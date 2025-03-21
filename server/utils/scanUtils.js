const { exec } = require('child_process');
const mongoose = require('mongoose');

const scanSchema = new mongoose.Schema({
    target: { type: String, required: true },
    scanType: { type: String, required: true },
    result: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Scan = mongoose.model('Scan', scanSchema);

const executeOpenVASScan = (target, callback) => {
    const command = `openvas-cli --target ${target} --output /path/to/output/file`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing OpenVAS scan: ${error.message}`);
            return callback(error, null);
        }
        if (stderr) {
            console.error(`OpenVAS scan stderr: ${stderr}`);
        }
        console.log(`OpenVAS scan stdout: ${stdout}`);
        callback(null, stdout);
    });
};

const executeZenmapScan = (target, callback) => {
    const command = `nmap -oX /path/to/output/file ${target}`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Zenmap scan: ${error.message}`);
            return callback(error, null);
        }
        if (stderr) {
            console.error(`Zenmap scan stderr: ${stderr}`);
        }
        console.log(`Zenmap scan stdout: ${stdout}`);
        callback(null, stdout);
    });
};

// minor change to push
module.exports = { executeOpenVASScan, executeZenmapScan, Scan };