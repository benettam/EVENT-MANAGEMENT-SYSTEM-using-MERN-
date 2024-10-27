const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Define routes for other pages if needed, like this:
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
