const path = require('path');
const express = require('express');
const router = express.Router();

// Route to serve notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/js/notes.html'));
});

// Wildcard route to serve index.html for all other routes
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/js/index.html'));
});

module.exports = router;