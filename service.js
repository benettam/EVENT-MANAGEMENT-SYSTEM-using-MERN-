const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());  // Enable CORS to allow requests from the frontend
app.use(express.json());

// Replace <password> with your actual MongoDB password
const uri = 'mongodb+srv://benettam:benetta123@cluster0.bqb7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Define the booking schema
const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    address: String,
    event: String,
    other_event: String,
    date: String,
    guests: Number
});

// Create the Booking model
const Booking = mongoose.model('Booking', bookingSchema);

// Define the booking endpoint
app.post('/api/book', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).send("Booking successful");
    } catch (error) {
        console.error("Booking error:", error);
        res.status(500).send("Failed to book the event");
    }
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
