const express = require('express');
const app = express();
const fs = require('fs');

const PORT = process.env.PORT || 3006;
const path = require('path');

//  const { notes } = require('./')


// get route to send files to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// get route to the notes.html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// create POST route to add new notes to JSON file
app.post('/api/notes', (req, res) => {
  // req.body is where our incoming content will be
  console.log(req.body);
  res.json(req.body);
});

// use express.static to link up the files that were provided by client
app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

// initial port that is setup to run the server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});