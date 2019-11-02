const expect = require("chai").expect;
const Pacman = require('../pacman');

describe("Pacman Class",() => {
  beforeEach(() => {
    testPacman = new Pacman();
  });

  describe("#place()", () => {
    beforeEach(() => {
      testPacman.place(3,4,'west')
    })
    it("It should place Pacman at the current X position", () => {
      expect(testPacman.x).to.equal(3);
    });
    it("It should place Pacman at the current Y position", () => {
      expect(testPacman.y).to.equal(4);
    })
    it("It should face Pacman at the current Facing direction", () => {
      expect(testPacman.facingIndex).to.equal(3);
    })
  })

  describe("#left()", () => {
    it("It should turn left and face the correct direction", () => {
      testPacman.place(0,0,'north');
      testPacman.left();
      expect(testPacman.facingIndex).to.equal(3);
    })
  })

  describe("#right()", () => {
    it("It should turn right and face the correct direction", () => {
      testPacman.place(0,0,'south');
      testPacman.right();
      expect(testPacman.facingIndex).to.equal(3); 
    })
  })

  describe("#move()", () => {
    it("It should move X forwards 1 spot in the facing direction", () => {
      testPacman.place (1,3,'east');
      testPacman.move();
      expect(testPacman.x).to.equal(2);
    })
    it("It should move Y forwards 1 spot in the facing direction", () => {
      testPacman.place(1,3,'south');
      testPacman.move();
      expect(testPacman.y).to.equal(2);
    })
  })
  describe("#execute()", () => {
    it("It should execute a command input", () => { 
      testPacman.place(0,0,'north');
      const command = ["move"];
      testPacman.execute(command);
      expect(testPacman.y).to.equal(1);
    })
    it("It should execute a command that has parameters", () => {
      testPacman.place(0,0,'north');
      const command = ["place", 1,1,"east"];
      testPacman.execute(command);
      expect(testPacman.x).to.equal(1);
      expect(testPacman.y).to.equal(1);
      expect(testPacman.facingIndex).to.equal(1);
    })
  })
})
