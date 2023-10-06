# Rock-Paper-Scissors

**Live Preview - https://lunaticeradicator.github.io/Rock-Paper-Scissors/**

![3](https://github.com/LunaticEradicator/Rock-Paper-Scissors/assets/107615206/bd2bc4d6-54a9-4bb7-bb0f-ad3fbf2a645d)

**A, Info**

This is a score based game where first player to get Five point wins.

**B, Game Stages**

This game is created using different stages of javascript learning

    I,   First the basic game code , which will display the game on the console with player and computer score [No EventListener Added ].
    II,   Using Dom Manipulation, event listener and with some basic UI[CSS] a basic working game is created.
    III,  When the user press the button, the addEventListener listens for it and will display the current round details[userInput, draws, eachRoundScore].
    IV,   Then we compare it with the game logic to see who has won the game and will update the level and score [Incrimination].
    IV,   When the score reaches 5 a new element will be created which displays the winner and restart button [using position:absolute and element.hidden = boolean].
    V,    For restarting we add another addEventListener on the restartButton which reset the value of score, level to 0 and domElement.textContent = "".
    VI,   We then created a game menu with a single button [start],which when pressed will take the player to the game.
    VII,  With the help of CSS we created a much better UI and settled for a particular color pallet for the game.[Finishing Touch]
    VIII, Last we created a subtile transition for the game [gameMenu and resetMenu] to make the game feel more smooth and enjoyable for the player

**C, Technology Used**
    
    I,  Javascript
    II, Sass
    III, Webpack
