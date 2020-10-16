// dependencies
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// const fs = require('fs');
// const index = require('./public/assets/js/index');
const { notes } = require('./db/db.json');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// use express.static to link up css and js files that were provided by client
app.use(express.static('public'));

// routes =====================================================
// create a home route '/' that returns index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// create a '/notes' route that returns notes.html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// get route for saved notes
app.get('/api/notes', (req, res) => {
  return res.json(notes);
});

// app.get('/api/notes/:id', (req, res) => {
//   const savedNote = req.params.id;

//   console.log(savedNote);

//   for (let i = 0; i < notes.length; i++) {
//     if (savedNote === notes[i].id) {
//       return res.json(notes[i]);
//     }
//   }
//   return res.json(false);
// });

// create POST route that adds new notes
// app.post('/api/notes', (req, res) => {
//   const newNote = req.body;

//   // newNote.id = newNote.title.replace(/\s+/g, '').toLowerCase();
  
//   newNote.id = notes.length.toString();

//   console.log(newNote);

//   notes.push(newNote);
//   res.json(newNote);
// });

// listener that is setup to run the server on PORT
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});