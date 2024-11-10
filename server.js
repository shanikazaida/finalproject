const express = require('express'); // Import express
const connectDB = require('./config/db'); // Import MongoDB connection
const app = express(); // Initialize express

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Hotel Booking API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
