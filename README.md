# IE's Pacman Challenge
IE's 'Pacman' Challenge' written in Javascript.


## Content
- **[Usage](#usage)**
- **[Description](#description)**
  - **[Commands](#commands)**
- **[Build Process](#build)**
  - **[Extensibility](#extensibility)**
- **[Logic Breakdown](#logic)**
  - **[Distance](#distance)**
  - **[Turning](#turning)**
- **[Error Handling](#errorhandling)**
  - **[Invalid Commands](#invalidcommands)**
  - **[Upper & Lowercase](#casesensitive)**

## <a id="usage"></a>Usage
### Clone Repository
```
$ git clone https://github.com/ie/Code-Challenge-1.git
```
### Install Required Files
```
$ bundle install
```
### Run Application
```
$ ruby toy_robot.rb
```

### Dependencies
```
gem 'rspec', '~> 3.8'
```

### Testing
```
rspec spec
```

### Notes
In order to input commands, go into the commands.txt folder which is located in data/commands.txt.

Inputs for movement must be implemented as a string of comma-separated commands eg; F1,BR,B2,L1,B3

**[Available Commands](#commands)**



# <a id="description"></a>Description

Write a program that receives a string of commands and will output the robot's distance from it's starting point.  This distance will be the minimum amount of units the robot will need to traverse in order to get back to it's starting point.  Remember, the robot can only turn 90 degrees at a time, so it cannot go directly back home, it must go in north, south, east, west directions.

Inputs: - a string of comma-separated commands eg F1,R1,B2,L1,B3
Output: - the minimum amount of distance to get back to the starting point (4 in this case)

### Robot Movements

These commands will be  in the format command+number.  For example 'L1' means 'turn left by 90 degrees once'.  'B2' would mean go backwards 2 units.

- Robot is free to move anywhere but has a starting position of (0,0) facing NORTH

#### <a id="commands"></a>Available Commands
* F - move forward 1 unit
* B - move backward 1 unit
* R - turn right 90 degrees
* L - turn left 90 degrees


# <a id="build"></a>Build Process


### <a id="extensibility"></a>Extensibility
With extensibility in mind, the commands, movements and simulation were split into 3 different classes. The split allows extensibility by allowing us to add different inputs types or movement types in the future without affecting how the program needed to run.

#### Input Class
- Reads and Disects User Inputs from the commands.txt file into an array that the simulation class can read.

#### Robot Class
- Stores initial robot position at (0,0) Facing 'NORTH'
- Stores all movement and turning logic

#### Simulation Class
- Passes the input commands into the robot logic (Where the magic happens)
- Calculates minimum distance back to starting point


# <a id="logic"></a>Logic Breakdown

## <a id="distance"></a>Distance
*"the robot can only turn 90 degrees at a time"*.

Given that the robot can only turn 90 degrees at a time means the robot could not take a shortcut home which gave the simple solution of adding the position_x and position_y "(x, y)".

The flaw in the logic was that if any of the values 'x' or 'y' was negative, the logic could not apply.
This was solved by setting both 'x' and 'y' integers to absolute values.

## <a id="turning"></a> Turning

Setting the facing direction in an array of ['NORTH', 'EAST', 'SOUTH', 'WEST'] like a compass allowed us to turn easily.

```
['NORTH', 'EAST', 'SOUTH', 'WEST']
In the array:
NORTH = [0]
EAST = [1]
SOUTH = [2]
WEST = [3]
```
Given that 'NORTH' is [0] which is our starting direction, if we turned left once we would pass in a -1 value which would reach 'WEST' = [-1].

Though this logic above works, assuming we continue turning left by continuing to [-1] to the index eventually we will hit another loop through the whole array. Logically hitting [-4] which should be 'NORTH' and [-5] would go around to be 'WEST' but this is actually outside of the arrays bounds.

In order to fix this issue I applied a modulo against the items in the array, this ensures that a full loop would be ignored thus attaining to the bounds of the arrays 4 items.

```
e.g; Turning left 11 times L11
This should be -11 from the array starting position [0] which in place should be [-11] in the array which would break.

but having the modulo in place '11 % 4' ensures full turns arent calculated leaving us with a remainder of '1' which gets passed as a minus value within the bounds of the array '[0] - [1] = [-1]', leaving us facing 'WEST'.
```


# <a id="errorhandling"></a> Error Handling

## <a id="invalidcommands"></a>Invalid Commands
Originally I had implemented that all invalid commands would be ignored but the robot would continue to finish all remaining valid commands.

This was changed in the end build to terminate the application on invalid commands to bring clarity to the user.

## <a id="casesensitive"></a> Upper and Lowercase
Passing 'F1' would be a valid command to move forward 1 space, but passing 'f1' (lowercase 'F') will terminate the application.

The reason I had left the commands to be case sensitivity was so the app had more extensibility in movement if 'f' was to be implemented as another movement type in the future.


npm install

npm start

npm test