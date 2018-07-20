/*
const requires for yargs, notes
*/
const yargs = require('yargs');
const notes = require('./notes.js');
const command = process.argv[2];
const argv = yargs.argv;

var commandEnum = {
  CREATE  : "add",
  READ    : "read",
  UPDATE  : "update", // not in use
  DELETE  : "remove",
  LIST    : "list"
};
var Enum = Object.freeze(commandEnum);

if(command === Enum.CREATE)
{
  //console.log("in add sec");
  notes.addNotes(argv.title, argv.body);
}
else if(command === Enum.READ)
{
  notes.readNote(argv.title);
}
else if(command === Enum.LIST)
{
  notes.listNotes();
}
else if(command === Enum.DELETE)
{
  notes.removeNotes(argv.title);
}
else if(command === Enum.UPDATE)
{
  notes.notesUpdate(argv.title, argv.body);
  //console.log("Not Currently supported");
}
else {
  console.log("Not a valid command");
}
