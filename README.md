# Rock-Paper-Scissors

Simple game of Rock Paper Scissors using .js

A, Game Rule
This is a score based game where first one to get Five point wins.

B, Game Stages
This game is created using different stages of javascript learning

    I,    We wrote the basic game code , which will display the game on the console with player and computer score [No EventListener Added ]
    II,   Using Dom Manipulation, event listener and with some basic UI[CSS] we created a working game
    III,  When the user press the button, the addEventListener listens for it and will display the current round details[userInput, draws, eachRoundScore]
    IV,   Then we compare it with the game logic to see who has won the game and will update the level and score [Incrimination]
    IV,   When the score reaches 5 a new element will be created which displays the winner and restart button [using position:absolute and element.hidden = boolean]
    V,    For restarting we add another addEventListener on the restartButton which reset the value of score, level to 0 and domElement.textContent = "".
    VI,   We then created a game menu with a single button [start],which when pressed will take the player to the game.
    VII,  With the help of CSS we created a much better UI and settled for a particular color pallet for the game.[Finishing Touch]
    VIII, Last we created a subtile transition for the game [gameMenu and resetMenu] to make the game feel more smooth and enjoyable for the player
