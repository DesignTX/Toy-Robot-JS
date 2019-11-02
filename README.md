# IE's Pacman Challenge
IE's 'Pacman' Challenge' written in Javascript.


## Content
- **[Usage](#usage)**
- **[Description](#description)**
  - **[Commands](#commands)**
- **[Build Process](#build)**
  - **[Extensibility](#extensibility)**

## <a id="usage"></a>Usage
### Clone Repository
```
$ git clone https://github.com/DesignTX/ie-coding-challenge.git
```
### Install Required Files
```
$ npm install
$ npm install mocha
$ npm install chai
```
### Run Application
```
$ npm start
```

### Dependencies
```
node.js
mocha
chai
```

### Testing
```
npm test
```

### Notes
In order to input commands, go into commandList.txt.

Inputs for movement will be implemented as an array.
robot must be 'PLACE'd first in order for the robot to take in valid commands,
eg; PLACE 4,3,NORTH


**[Available Commands](#commands)**



# <a id="description"></a>Description

- The application is a simulation of Pacman moving on in a grid, of dimensions 5 units x 5 units.
- There are no other obstructions on the grid.
- Pacman is free to roam around the surface of the grid, but must be prevented from moving off the grid. Any movement that would result in Pacman moving off the grid must  be prevented, however further valid movement commands must still be allowed.
- Create an application that can read in commands of the following form -

```
PLACE X,Y,F

MOVE

LEFT

RIGHT

REPORT
```

- PLACE will put the Pacman on the grid in positon X,Y and facing NORTH,SOUTH, EAST or WEST.
- The origin (0,0) can be considered the SOUTH WEST most corner.
- The first valid command to Pacman is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- MOVE will move Pacman one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate Pacman 90 degrees in the specified direction without changing the position of Pacman.
- REPORT will announce the X,Y and F of Pacman. This can be in any form, but standard output is sufficient.
- Pacman that is not on the grid can choose the ignore the MOVE, LEFT, RIGHT and REPORT commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application.

**Constraints:**

- Pacman must not move off the grid during movement. This also includes the initial placement of Pacman.
- Any move that would cause Pacman to fall must be ignored.

Example Input and Output:
```
a)
PLACE 0,0,NORTH

MOVE

REPORT

Output: 0,1,NORTH
```
```
b)

PLACE 0,0,NORTH

LEFT

REPORT

Output: 0,0,WEST
```
```
c)

PLACE 1,2,EAST

MOVE

MOVE

LEFT

MOVE

REPORT

Output: 3,3,NORTH
```

### Robot Movements

```
PLACE X,Y,F

MOVE

LEFT

RIGHT

REPORT
```

#### <a id="commands"></a>Available Commands
* PLACE - move backward 1 unit
* MOVE - move forward 1 unit in the facing direction
* RIGHT - turn right 90 degrees
* LEFT - turn left 90 degrees


# <a id="build"></a>Build Process


### <a id="extensibility"></a>Extensibility
With extensibility in mind, the commands, movements and simulation were split into 2 different classes. The split allows extensibility by allowing us to add different inputs types or movement types in the future while also being able to expand the grid size without affecting how the program needed to run.


#### Pacman Class
- Stores all movement and turning logic
- Stores Pacman's placement logic

#### worldController Class
- Passes the input commands into the Pacman logic (Where the magic happens)
- Creates the maps 5x5 grid

