// set hardcoded computer score

let computerInput = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// random computerGuess generator
function computerGuess() {
    let computerGuess = computerInput[Math.floor(Math.random() * computerInput.length)];
    return (computerGuess);
}

// function to play a single round 
function playSingleRound(playerDraw, computerDraw) {
    if ((playerDraw === "rock" && computerDraw === "rock") || (playerDraw === "paper" && computerDraw === "paper") || (playerDraw === "scissors" && computerDraw === "scissors")) {
        return ("Round Draw");
    }
    else if (playerDraw === "rock" && computerDraw === "paper") {
        computerScore++;
        return ("Computer won the round");
    }
    else if (playerDraw === "rock" && computerDraw === "scissors") {
        playerScore++;
        return ("Player won the round");
    }
    else if (playerDraw === "paper" && computerDraw === "rock") {
        playerScore++;
        return ("Player won the round");
    }
    else if (playerDraw === "paper" && computerDraw === "scissors") {
        computerScore++;

        return ("Computer Won the round");
    }
    else if (playerDraw === "scissors" && computerDraw === "rock") {
        computerScore++;
        return ("Computer won the round");
    }
    else if (playerDraw === "scissors" && computerDraw === "paper") {
        playerScore++;
        return ("Player won the round");
    }
    else {
        return ("Please enter a correct value from the option given : Rock | Paper | Scissors");
    }
}


function playGame() {
    // function to loop the game 5 times
    for (let i = 0; i < 5; i++) {
        userInput = prompt("Select an option : Rock | Paper | Scissors").toLowerCase();
        playerDraw = userInput;
        computerDraw = computerGuess();

        console.log(`Player has drawn ${playerDraw}`);
        console.log(`Computer has drawn ${computerDraw}`);
        console.log(playSingleRound(playerDraw, computerDraw));
    }
    // return the result and declare the winner.
    console.log(`Player has scored ${playerScore} and Computer has scored ${computerScore}`)

    if (playerScore > computerScore) {
        console.log(`Player has won the game `)
    }
    else if (playerScore === computerScore) {
        console.log(` The Game is Draw `)
    }
    else {
        console.log(` Computer has won the game`)
    }
}

// call the function then only the player can enter the prompt
playGame();
