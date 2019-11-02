const fs = require('fs');
const Pacman = require('./pacman')

const fileData = fs.readFileSync('./place.txt', 'utf8');

//turns fileData into an array
const instructions = fileData.split('\n');
//turns all commands into lowercase to match function names
const commands = instructions.map((instruction) => {return instruction.toLowerCase()});

const pacman = new Pacman(1,2,"WEST");

//loops through commands and passes command to pacman object
commands.forEach(command => {
  pacman.execute(command.split(/[ ,]+/));
});
