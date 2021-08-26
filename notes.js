const fs = require('fs');

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.txt'));
  } catch (err) {
    return [];
  }
}

var addingNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  var double = notes.filter((note) => note.title === title);

  if(double.length === 0){
    notes.push(note);

    fs.writeFileSync("notes.txt", JSON.stringify(notes));

    
  } else {
    console.log("\x1b[41m", "Title already taken!", "\x1b[0m");
  }
}

var removeNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);
  
  if(filteredNotes.length === 0){
    fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
  } else {
    console.log("\x1b[41m", "Note not found!", "\x1b[0m")
  }
  
  
}

var readNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title === title);

  logNote(filteredNotes[0]);
}

var getAll = () => {
  var notes = fetchNotes();

  notes.forEach((note) => logNote(note));
}

var logNote = (note) => {
  console.log("********************************");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}


module.exports = {
  addingNote,
  removeNote,
  readNote,
  getAll
}
