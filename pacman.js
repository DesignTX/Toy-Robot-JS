class Pacman {
  constructor() {
    this.directions = ['north','east','south','west'];
    // isPlaced set to false so pacman can not move without being placed
    this.isPlaced = false;
  }
  execute(command){
    //checking to see if pacman can call the command
    if(this[command[0]]) {
      //calling command on pacman object with optional function arguments
      // if pacman is placed then take in the remaining commands afterwards
      if(command[0] === 'place' || this.isPlaced){
        this[command[0]].apply(this, command.slice(1,command.length));
      }
    }
  }
  report(){
    console.log(`PACMAN'S COORDINATES: X = ${this.x}, Y = ${this.y}, FACING = ${this.directions[this.facingIndex].toUpperCase()}`) 
  }
  place(x,y,facing){
    //parseInt converts string into integer
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.facingIndex = this.directions.indexOf(facing);
    this.isPlaced = true;
  }

  //pacman left turn
  left(){
    this.facingIndex == 0 ? this.facingIndex = 3 : this.facingIndex -= 1;
  }

  //pacman right turn
  right(){
    this.facingIndex == 3 ? this.facingIndex = 0 : this.facingIndex += 1;
  }

  //pacman moves forward in facing direction
  move(){
    if(this.facingIndex == 0){
      this.y += 1; 
    }
    if(this.facingIndex == 1){
      this.x += 1;
    }
    if(this.facingIndex == 2){
      this.y -= 1;
    }
    if(this.facingIndex == 3){
      this.x -= 1;
    }
  }
}

module.exports = Pacman;