class Pacman {
  constructor(x,y,facing) {
    this.x = x;
    this.y = y;
    this.facing = facing;
  }
    report(){
      console.log(`Pacman's coordinates: x = ${this.x}, y = ${this.y}, facing = ${this.facing} `) 
    } 
}

module.exports = Pacman;