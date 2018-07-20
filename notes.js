/*
  Notes file that describes the methods for CRUD and Read Write onto file
*/
const fs = require('fs');
var readNotesFromFile = (filename) =>
{
    return JSON.parse(fs.readFileSync(filename));
};
var writeNotestoFile = (filename, data) =>
{
    fs.writeFileSync(filename, JSON.stringify(data));
};

var addNotes = (title, body) => {

  var notes = [];
  var note = {
    title,
    body
  };
  try {

    notes = readNotesFromFile('notesData.json');
  }
  catch(e)
  {
    console.log(e);
  }
  var dups = notes.filter((note) => note.title === title);
  if(dups.length === 0)
  {
    notes.push(note);
    writeNotestoFile('notesData.json', notes);
  }

  else
  {
      console.log("call notesUpdate");
  }

};
var listNotes = () => {

  var notes = readNotesFromFile('notesData.json');
  console.log(`Listing all notes \n`);
  notes.forEach( (note) => console.log(JSON.stringify(note)) );
};

var removeNotes = (title) => {
  /*
    should be called rewrite the whole file
    instead of remove note

    filters for all but the passed in title and rewrites the file without it.
  */
  var notes = readNotesFromFile('notesData.json');
  var newNotes = notes.filter((note) => note.title !== title);
  console.log(newNotes);
  notes = newNotes;
  writeNotestoFile('notesData.json', notes);

};
var readNote = (title) => {

  var notes = readNotesFromFile("notesData.json");
  var note = notes.filter( (note) => note.title === title );
  if(note.length != 0)
  {
    note.forEach( (note) => console.log(JSON.stringify(note)) );
  }

};
var notesUpdate = (title, body) => {
  var notes = [];
  try {
    var noteString = fs.readFileSync('notesData.json');
    notes = JSON.parse(noteString);
  } catch(e){

  }
  //find the duplicate using the filter method
  var dups = notes.filter((note) => note.title === title);
  /*
  if there is a duplicate then change its body to the body
  assign the modified object to a temp
  go through the original array to find its index using count and a for loop
  then splice it in to the original
  wirte the array to the file
  */
  if(dups.length != 0){
    dups[0]["body"] = body;
    var temp = dups[0];
    var count = 0;
    for(var i = 0; i < notes.length; i++)
    {
      if(notes[i].title === title)
      {
        break;
      }
      count++;
    }
    notes.splice(count, 1, temp);
    fs.writeFileSync('notesData.json', JSON.stringify(notes));
  }
  else {
    console.log("note does not exist, call add");
    //addNotes(title, body);
  }
};



module.exports = {

  addNotes,
  listNotes,
  readNote,
  notesUpdate,
  removeNotes

};
