// Set hardcoded value
let computerInput = ["rock", "paper", "scissors"];
let userInput;

// Score
let playerScore = 0;
let computerScore = 0;
let roundPlayed = 0;

// HTML Element Selection //
const fullContent = document.querySelector(".fullContent");
const gamePlayContent = document.querySelector(".gamePlayContent");
const btn = document.querySelectorAll(".btn")
const scoreContent = document.querySelector(".scoreContent")
const currentGameScore = document.querySelector(".currentGameScore");
const resetGameScore = document.querySelector(".resetGameScore");

//eachRound DOM//
let roundNumber = document.querySelector(".roundDetails");
let roundDraw = document.createElement("div");
let roundResult = document.createElement("div");
let roundScore = document.createElement("div");

//endRound DOM//
let endText = document.createElement("div");
let endGameResult = document.createElement("div");
let endGameScore = document.createElement("div");

let startGameButton = document.querySelector(".startGameButton");
let restartGameButton = document.createElement("button");
let startMenu = document.querySelector(".startMenu");

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

startMenu.hidden = false;
gamePlayContent.hidden = true;
scoreContent.hidden = true;

startGameButton.addEventListener("click", e => {
    startMenu.hidden = true;
    gamePlayContent.hidden = false;
    scoreContent.hidden = false;
    fullContent.classList.add("mainTransitionIn");
})


// When user press a button playGame
for (let eachBtn of btn) {
    eachBtn.addEventListener("click", (e) => {
        if (playerScore === 5 || computerScore === 5) {
            eachBtn.disabled = true;
        }
        else {
            userInput = eachBtn.textContent.toLowerCase(); // gives the name of userInput
            playGame();                                    //a variable that has not been declared, it will automatically become a GLOBAL variable.
        }
    })
}

// btn.forEach(eachBtn => {
//     eachBtn.addEventListener("click", (e) => {
//         if (playerScore === 5 || computerScore === 5) {
//             eachBtn.disabled = true;
//         }
//         else {
//             userInput = eachBtn.textContent.toLowerCase(); // gives the name of userInput//a variable that has not been declared, it will automatically become a GLOBAL variable.
//             playGame();
//         }
//     })
// })


// random computerGuess generator
function computerGuess() {
    let computerGuess = computerInput[Math.floor(Math.random() * computerInput.length)];
    return computerGuess;
}


// function to play a single round 
function gameLogic(playerDraw, computerDraw) {

    if ((playerDraw === "rock" && computerDraw === "rock")
        || (playerDraw === "paper" && computerDraw === "paper")
        || (playerDraw === "scissors" && computerDraw === "scissors")) {
        return ("Round Draw");
    }
    else if (playerDraw === "rock" && computerDraw === "paper"
        || playerDraw === "paper" && computerDraw === "scissors"
        || playerDraw === "scissors" && computerDraw === "rock") {
        computerScore++;
        return ("Computer Wins");
    }
    else if (playerDraw === "rock" && computerDraw === "scissors"
        || playerDraw === "paper" && computerDraw === "rock"
        || playerDraw === "scissors" && computerDraw === "paper") {
        playerScore++;
        return ("Player Wins");
    }
    else {
        return ("Please enter a correct value from the option given : Rock | Paper | Scissors");
    }
}

function playGame() {
    playerDraw = userInput;
    computerDraw = computerGuess();
    roundPlayed++;
    eachRoundScore();                                   //playerScore and computerScore is in this function
    fullContent.classList.remove("mainTransitionIn");

    if (playerScore === 5 || computerScore === 5) {
        finalScore();
        restartGame();
    }
    console.log(`Player   Score ${playerScore}`);
    console.log(`Computer Score ${computerScore}`);
    console.log(`----------------------------------`);
}

// To Capitalize the letter
function capitalLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function eachRoundScore() {
    roundNumber.textContent = `Round ${roundPlayed} `;
    currentGameScore.append(roundNumber);

    roundResult.classList.add("eachRoundFinalScore");
    roundResult.textContent = `Round Status : ${gameLogic(playerDraw, computerDraw)} `;
    currentGameScore.append(roundResult);

    roundDraw.classList.add("playerRoundScore");
    roundDraw.textContent = ` ${capitalLetter(playerDraw)}  : ${capitalLetter(computerDraw)}`;
    currentGameScore.append(roundDraw);

    roundScore.classList.add("eachRoundEndScore");
    roundScore.textContent = `${playerScore} : ${computerScore}`;
    currentGameScore.append(roundScore);

}


function finalScore() {

    if (playerScore > computerScore) {
        endText.textContent = "Hurray, You Won !"
        endGameResult.classList.add("GameWinText");
        endGameResult.classList.add("playerWin");
        endGameResult.textContent = `Seems like you are a Gifted Talent.`;

        resetGameScore.append(endText);
        resetGameScore.append(endGameResult);
    }
    else if (playerScore === computerScore) {
        endText.textContent = " A Draw !"
        endGameResult.classList.add("GameDrawText");
        endGameResult.classList.add("gameDraw");
        endGameResult.textContent = ` Oh Snap, Seems like a tie.`;

        resetGameScore.append(endText);
        resetGameScore.append(endGameResult);

    }
    else {
        endGameResult.classList.add("GameLostText");
        endText.textContent = "You Lost !";
        endGameResult.classList.add("gameDraw");
        endGameResult.textContent = `Guess that you are not even better than a BOT.`;

        resetGameScore.append(endText);
        resetGameScore.append(endGameResult);
    }
}


function restartGame() {
    scoreContent.classList.add("mainTransitionIn");
    scoreContent.classList.add("gameOver");

    gamePlayContent.hidden = true;
    currentGameScore.hidden = true;
    resetGameScore.hidden = false;

    restartGameButton.classList.add("restartBtn");
    restartGameButton.textContent = `Restart`;
    resetGameScore.append(restartGameButton);


    restartGameButton.addEventListener("click", (e) => {
        resetGameScore.hidden = true;
        currentGameScore.hidden = false;
        gamePlayContent.hidden = false;

        scoreContent.classList.remove("gameOver");
        scoreContent.classList.remove("mainTransitionIn");
        fullContent.classList.add("mainTransitionIn");

        playerScore = 0;
        computerScore = 0;
        roundPlayed = 0;
        roundNumber.textContent = "Round Details";
        roundDraw.textContent = "";
        roundScore.textContent = "";
        roundResult.textContent = "";
        endGameResult.textContent = "";
    })
}


