const mongoose = require('mongoose');

const uri = 'mongodb+srv://benettam:benetta123@cluster0.bqb7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        mongoose.disconnect(); // Disconnect after test
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });
