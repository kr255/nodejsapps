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
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

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
  for(i = 0; i <100; i++)
  {
    notes.addNotes((Math.random()*100)+i, makeid());
  }
  console.log("Not a valid command");
}
