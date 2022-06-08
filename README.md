# whack-a-mole
 SEI-37 PROJECT 1: WHACK-A-MULTIPLE
Objective: To engage students in practising their Multiplication tables

Target audience: P4 students who need more help with Multiplication drills

1. Approach taken
- Figured out the necessary components for the game to function e.g.:
    - game board with contents (i.e. mudpile, 'hammer', mole animation)
    - cursor movement
    - animation of the mole
    - scoreboard
    - countdown timer
    - dropdown list of multiples
- Sequence of project progression: Gameboard > Cursor movement > Mole animation > Scoreboard > Countdown timer > number attachment on mole's tummy > dropdown multiple list

2. Explanation of the technologies used

Cursor movement: 
- Event listener for mouse movement -> updates the position of the "cursor" class item.
- Event listener for mouse up/down -> to control the animation of the "hammer" cursor when the mouse is pressed down and lifted.

Game timer:
- Used a setInterval function to update the timer.
- Game stops when timer goes to 0:00. Given the time constraint, I chose to remove the gameboard and cursor interface to prevent any further gameplay from the player in a more direct way.

Gameplay:
- Included a "change" event for dropdown event listener, so that when there's a change in the selected option, the event listener will enable the player to click on the Start button, which in turn activates the countdown timer and gameplay.
- Mole animation was created via keyframes, where I created a "rise" with the transform property and translateX and Y values for the rise.
- An if else statement is added so that the player will score points with a correct multiple clicked. Points will be deducted if a multiple is clicked incorrectly.
- When the background is clicked, the 1.5sec interval for the mole to pop out will be cleared, followed by a removal of the mole 0.5sec later. 
- The div with background image will be appended after that and the game carries on from there.

3. Main challenges faced
- Tried attaching a text-box on top of an image, but failed after multiple approaches.
    - Approached it in another way where I tried replacing the image with a div container that has a background image 
    - Attached a div container as a text-box, where the number to be displayed is inside
    - Text-box is a child of the background div. From there, I experimented on the position/sizing via CSS

- Tried setting an attribute called "value" in the div container (background). However, when I tried console.log it, the output was undefined.
    - Desmond enlightened me with the concept of div not having default "value" attributes, thus the value cannot be retrieved
    - Instead, a "getAttribute" method was used in order for me to retrieve the value itself, so that I can make use of the value with modulo expressions

- Timer was initially erratic due to some logic disruption. 
    - Cleared my mind and broke down the problem into smaller parts so that I can resolve them one after another



