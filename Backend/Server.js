// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

// DB Verbindung
mongoose.connect(process.env.MONGO_URI);

// Beispiel für eine geschützte Route (Admin Panel Stats)
app.get('/api/admin/stats', authenticateToken, async (req, res) => {
    if (req.user.role !== 'admin') return res.sendStatus(403);
    // Hier Logik für Live-User & Server-Status einfügen
    res.json({ liveUsers: 12, serverStatus: 'online' });
});

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.listen(5000, () => console.log('Server läuft auf Port 5000'));
