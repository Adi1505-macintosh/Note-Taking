
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if(command === 'add'){
    console.log("\x1b[42m", "New note created!", "\x1b[0m");
    notes.addingNote(title, body);

} else if(command === 'remove') {
    console.log("\x1b[42m", "Note removed!", "\x1b[0m");
    notes.removeNote(title);

} else if (command === 'read'){
    console.log("\x1b[43m", "List", "\x1b[0m");
    notes.readNote(title);

} else if (command === 'list'){
    console.log("\x1b[44m", "Your notes:", "\x1b[0m");
    notes.getAll();

} else {
    console.log("Unknown command was used");
}