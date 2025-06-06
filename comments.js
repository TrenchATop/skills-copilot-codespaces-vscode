// Create web server

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let comments = [];

// Endpoint to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Endpoint to add a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    if (!comment || !comment.text) {
        return res.status(400).send('Comment text is required');
    }
    comments.push(comment);
    res.status(201).json(comment);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});