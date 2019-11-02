const fs = require('fs');
const WorldController = require('./worldController')


const fileData = fs.readFileSync('./commandList.txt', 'utf8');

const worldController = new WorldController();

//turns fileData into an array
const instructions = fileData.split('\n');
//turns all commands into lowercase to match function names
const commands = instructions.map((instruction) => {return instruction.toLowerCase()});

worldController.processCommands(commands);