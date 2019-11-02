class Pacman {
  constructor(x,y,facing) {
    this.directions = ['north','east','south','west'];
    this.x = x;
    this.y = y;
    this.facingIndex = this.directions.indexOf(facing);
  }
  execute(command){
    //checking to see if pacman can call the command
    if(this[command[0]]){
      //calling command on pacman object with optional function arguments
      this[command[0]].apply(this, command.slice(1,command.length));
    }
  }
  report(){
    console.log(`Pacman's coordinates: x = ${this.x}, y = ${this.y}, facing = ${this.directions[this.facingIndex]} `) 
  }
  place(x,y,facing){
    console.log('Place called')
    this.x = x;
    this.y = y;
    this.facingIndex = this.directions.indexOf(facing);
  }
  left(){
    console.log("left called")
    this.facingIndex == 0 ? this.facingIndex = 3 : this.facingIndex -= 1;
  }
  right(){
    console.log("right called")
    this.facingIndex == 3 ? this.facingIndex = 0 : this.facingIndex += 1;
  }
}

module.exports = Pacman;