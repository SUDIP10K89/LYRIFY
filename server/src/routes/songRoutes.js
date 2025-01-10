const express = require('express');
const Song = require('../models/Song');

console.log(require.resolve('../models/Song'));

const router = express.Router();

// Create a new song
router.post('/songs', async (req, res) => {
    try {
        const { title, lyrics, instrumentalBeatUrl } = req.body;
        const newSong = new Song({ title, lyrics, instrumentalBeatUrl });
        await newSong.save();
        res.status(201).json(newSong);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all songs
router.get('/songs', async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single song by ID
router.get('/songs/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.json(song);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a song by ID
router.delete('/songs/:id', async (req, res) => {
    try {
        const deletedSong = await Song.findByIdAndDelete(req.params.id);
        if (!deletedSong) return res.status(404).json({ message: 'Song not found' });
        res.json({ message: 'Song deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
