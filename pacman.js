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
    console.log(`\nPacman's coordinates: x = ${this.x}, y = ${this.y}, facing = ${this.directions[this.facingIndex]}\n`) 
  }
  place(x,y,facing){
    console.log('Place called')
    //parseInt converts string into integer
    this.x = parseInt(x);
    this.y = parseInt(y);
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
  move(){
    console.log(`Move called ... ${this.facingIndex % 2}`)
    //if facingIndex % 2 == 0 is North/South
    if(this.facingIndex % 2 == 0)
    {
      console.log(`Y ${(this.facingIndex - 1) * -1}`)
      //Moving North / South
      this.y += (this.facingIndex - 1) * -1;
    }else{
      //Moving West / East
      this.x += (this.facingIndex - 2) * -1;
    }
  }
}

module.exports = Pacman;