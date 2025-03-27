// models/: Database models.

const mongoose = require('mongoose');

const scanSchema = new mongoose.Schema({
    target: { type: String, required: true },
    scanType: { type: String, required: true },
    result: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Scan || mongoose.model('Scan', scanSchema);