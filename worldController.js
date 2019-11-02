const Pacman = require('./pacman')

class WorldController {
  constructor(){
    this.height = 5;
    this.width = 5;
    this.pacman = new Pacman();
  }

  //splits up commands or pacman to execute
  processCommands(commandList){
    commandList.forEach(command => {
      //executes command
      this.pacman.execute(command.split(/[ ,]+/));
      //checks if pacman is placed
      this.validatePacmanLocation();
    });
  }

  //validates pacmans location to not pass the height and width barrier or go beneath 0,0
  validatePacmanLocation(){
    if (this.pacman.x >= this.height){
      this.pacman.x = this.height -1;
    }
    if (this.pacman.y > this.width){
      this.pacman.y = this.width -1;
    }
    if (this.pacman.x < 0){
      this.pacman.x = 0;
    }
    if (this.pacman.y < 0){
      this.pacman.y = 0;
    }
  }
}

module.exports = WorldController;