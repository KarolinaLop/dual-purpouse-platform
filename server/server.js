// server.js: Main server file.

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const vpnRoutes = require('./routes/vpn');
const scanRoutes = require('./routes/scan');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/vpn', vpnRoutes);
app.use('/api/scan', scanRoutes);

// Add a simple route for /api
app.get('/api', (req, res) => {
    res.send('Welcome to the Dual-Purpose Platform API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});