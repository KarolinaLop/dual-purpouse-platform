const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const vpnRoutes = require('./routes/vpn');
const scanRoutes = require('./routes/scan');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

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