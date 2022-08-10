
// Set hardcoded value
let computerInput = ["rock", "paper", "scissors"];

// Score
let playerScore = 0;
let computerScore = 0;
let roundPlayed = 0;

// Dom Manipulation //
const btn = document.querySelectorAll(".btn")
const score = document.querySelector(".score")
const startGame = document.querySelector(".startGame");
const resetGame = document.querySelector(".resetGame");


let roundNumber = document.querySelector(".roundDetails");
let playerRoundScore = document.createElement("div");
let computerRoundScore = document.createElement("div");
let roundStatus = document.createElement("div");
let eachRoundEndScore = document.createElement("div");


let endScore = document.createElement("div");
let playerWin = document.createElement("div");
let gameDraw = document.createElement("div");
let playerLose = document.createElement("div");

let restartButton = document.createElement("button");

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

// When user press a button call the function of playGame

btn.forEach(btnEach => {

    btnEach.addEventListener("click", (e) => {
        if (roundPlayed === 5) {
            btn.disabled = true;
        }
        else {
            userInput = btnEach.textContent.toLowerCase(); // gives the name of userInput//a variable that has not been declared, it will automatically become a GLOBAL variable.
            playGame();
            restartGame();
        }
    })
})


function playGame() {

    playerDraw = userInput;
    computerDraw = computerGuess();
    roundPlayed++;
    eachRoundScore();

    if (roundPlayed === 5) {
        finalScore();
    }

    console.log(`Round    Played ${roundPlayed}`);
    console.log(`Player   Score ${playerScore}`);
    console.log(`Computer Score ${computerScore}`);
    console.log(`----------------------------------`);
}
function capitalLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function eachRoundScore() {

    roundNumber.textContent = `Round ${roundPlayed} of 5`;
    startGame.append(roundNumber);

    playerRoundScore.classList.add("playerRoundScore");
    playerRoundScore.textContent = `Player Selected: ${capitalLetter(playerDraw)}`;
    startGame.append(playerRoundScore);

    computerRoundScore.classList.add("computerRoundScore");
    computerRoundScore.textContent = `Computer Selected: ${capitalLetter(computerDraw)}`;
    startGame.append(computerRoundScore);

    roundStatus.classList.add("eachRoundFinalScore");
    roundStatus.textContent = `Status Of The Round: ${gameLogic(playerDraw, computerDraw)}`;
    startGame.append(roundStatus);

    eachRoundEndScore.classList.add("eachRoundEndScore");
    eachRoundEndScore.textContent = `Player Score: ${playerScore} and Computer Score: ${computerScore}`;
    startGame.append(eachRoundEndScore);
}

function finalScore() {

    eachRoundEndScore.classList.add("eachRoundEndScore");
    eachRoundEndScore.textContent = `Player Score: ${playerScore} and Computer Score: ${computerScore}`;
    resetGame.append(eachRoundEndScore);


    if (playerScore > computerScore) {

        playerWin.classList.add("playerWin");
        playerWin.textContent = `Congratulations! The Player has Won the game`;
        resetGame.append(playerWin);
    }
    else if (playerScore === computerScore) {

        gameDraw.classList.add("gameDraw");
        gameDraw.textContent = `Oh Snap! The game is on a Draw`;
        resetGame.append(gameDraw);
    }
    else {
        playerLose.classList.add("playerLose");
        playerLose.textContent = `Seems like you are not even better than a BOT`;
        resetGame.append(playerLose);
    }
}



function restartGame() {
    if (roundPlayed === 5) {
        restartButton.textContent = `Restart`;
        resetGame.append(restartButton);
        startGame.hidden = true;
        resetGame.hidden = false;

        restartButton.addEventListener("click", (e) => {
            console.log("Pressed Restart");

            startGame.hidden = false;
            resetGame.hidden = true;


            playerScore = 0;
            computerScore = 0;
            roundPlayed = 0;

            playerRoundScore.textContent = "";
            computerRoundScore.textContent = "";
            eachRoundEndScore.textContent = "";
            roundStatus.textContent = "";
            playerWin.textContent = "";
            gameDraw.textContent = "";
            playerLose.textContent = "";
            roundNumber.textContent = "Round Details";
        })
    }
}



