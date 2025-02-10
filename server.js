const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Path to the message file
const messageFile = path.join(__dirname, 'data', 'message.txt');

// Middleware to serve static files (frontend)
app.use(express.static('public'));

// Middleware to parse plain text
app.use(express.text());

// GET route to fetch the message
app.get('/api/message', (req, res) => {
  if (fs.existsSync(messageFile)) {
    const message = fs.readFileSync(messageFile, 'utf8');
    res.send(message);
  } else {
    res.send(''); // Return empty string if no message exists
  }
});

// POST route to save the message
app.post('/api/message', (req, res) => {
  const message = req.body;
  fs.writeFileSync(messageFile, message);
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});