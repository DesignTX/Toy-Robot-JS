class Pacman {
  constructor(x,y,facing) {
    this.x = x;
    this.y = y;
    this.facing = facing;
  }
  execute(command){
    //checking to see if pacman can call the command
    if(this[command[0]]){
      //calling command on pacman object with optional function arguments
      this[command[0]].apply(this, command.slice(1,command.length));
    }
  }
  report(){
    console.log(`Pacman's coordinates: x = ${this.x}, y = ${this.y}, facing = ${this.facing} `) 
  }
  place(x,y,facing){
    console.log('Place called')
    this.x = x;
    this.y = y;
    this.facing = facing;
  }
}

module.exports = Pacman;