// Dependencies and variables
const fs = require("fs");
let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function(app) {
    // GET route to notes
    app.get("/api/notes", function(req, res) {
        res.json(data);
    });
    // GET route to set parameters
    app.get("/api/notes/:id", function(req, res) {
        res.json(data[Number(req.params.id)]);
    });
    // POST route to give each note a unique id
    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        console.log(newNote);

        let uniqueId = (data.length).toString();
        console.log(uniqueId);
        
        newNote.id = uniqueId;
        data.push(newNote);
        
        fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
            if (err) throw (err);        
        }); 

        res.json(data);    
    });

// DELETE route to remove notes from left sidebar
    app.delete("/api/notes/:id", function(req, res) {
        let noteId = req.params.id;
        let newId = 0;

        console.log(noteId);
    
        // use an array filter that will return only the values that have an id
        data = data.filter(currentNote => {
        return currentNote.id != noteId;
        });

        // loop through the rest of the notes that are remaining
        for (let i = 0; i < data.length; i++) {
            const currentNote = data[i];
            currentNote.id = newId.toString();
            newId++;
        }

        // write the remaining notes to the db.json file
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.json(data);

        console.log(`Deleting note with id ${noteId}`);
    }); 
};



