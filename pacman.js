class Pacman {
  constructor(x,y,facing) {
    this.x = x;
    this.y = y;
    this.facing = facing;
  }
  execute(command){
    //checking to see if pacman can call the command
    if(this[command]){
      this[command].apply(this);
    }
  }
  report(){
    console.log(`Pacman's coordinates: x = ${this.x}, y = ${this.y}, facing = ${this.facing} `) 
  }
}

module.exports = Pacman;