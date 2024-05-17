const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Middleware to parse JSON bodies
router.use(express.json());

// GET route to read all notes
router.get('/', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to read notes' });
        } else {
            const notes = JSON.parse(data);
            res.json(notes);
        }
    });
});

// POST route to add a new note
router.post('/', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4(); // Generate a unique ID for the new note

    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to read notes' });
        } else {
            const notes = JSON.parse(data);
            notes.push(newNote);

            fs.writeFile('db.json', JSON.stringify(notes, null, 2), (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Failed to add note' });
                } else {
                    res.json(newNote);
                }
            });
        }
    });
});

module.exports = router;