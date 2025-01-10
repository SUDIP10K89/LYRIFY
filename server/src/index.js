const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const songRoutes = require('./routes/songRoutes');


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', songRoutes);

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB:', err));

app.get('/', (req, res) => {
    res.send('Lyrify server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
