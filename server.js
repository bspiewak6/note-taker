const express = require('express');
const app = express();
const fs = require('fs');

const PORT = process.env.PORT || 3006;
const path = require('path');


// initial get to test server
app.get('/api/db/', (req, res) => {
  res.send('TESTING 1, 2, 3');
});

// get route to send files to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// get route to the notes.html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// initial port that is setup
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
  
