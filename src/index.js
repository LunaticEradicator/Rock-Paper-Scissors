import "./sass/style.scss";
import computerGuess from "./computerGuess";
import capitalLetter from "./capitalizeLetter";

let userInput;
let computerInput;

// Score
let playerScore = 0;
let computerScore = 0;
let roundPlayed = 0;

//Menu
const gamePlayMenu = document.querySelector(".game__menu");
const scoreMenu = document.querySelector(".game__details");
let startMenu = document.querySelector(".start");

// HTML Element Selection //
const gameContent = document.querySelector(".game");
const drawButton = document.querySelectorAll(".game__button__style");
const currentGameScore = document.querySelector(".game__details__scoreboard");
const resetGameScore = document.querySelector(".game__details__reset");

//eachRound DOM//
let roundNumber = document.querySelector(".game__details__round");
let roundDraw = document.createElement("div");
let roundResult = document.createElement("div");
let roundScore = document.createElement("div");

//endRound DOM//
let endGameText = document.createElement("div");
let endGameResult = document.createElement("div");

let startGameButton = document.querySelector(".start__button");
let restartGameButton = document.createElement("button");
let restartGameDiv = document.createElement("div");

// -------------------------------------

startMenu.hidden = false;
gamePlayMenu.hidden = true;
gameContent.hidden = true;
currentGameScore.hidden = true;

startGameButton.addEventListener("click", (e) => {
  startMenu.hidden = true;
  gamePlayMenu.hidden = false;
  gameContent.hidden = false;
  gameContent.classList.add("mainTransitionIn");
});

// When user press a button playGame
for (let eachBtn of drawButton) {
  eachBtn.addEventListener("click", (e) => {
    currentGameScore.hidden = false;
    currentGameScore.classList.remove("hideBorder");
    currentGameScore.classList.add("mainTransitionIn");
    if (playerScore === 5 || computerScore === 5) {
      eachBtn.disabled = true;
    } else {
      userInput = eachBtn.textContent.toLowerCase(); // gives the name of userInput
      playGame(); //a variable that has not been declared, it will automatically become a GLOBAL variable.
    }
  });
}

// function to play a single round
function gameLogic(playerDraw, computerDraw) {
  if (
    (playerDraw === "rock" && computerDraw === "rock") ||
    (playerDraw === "paper" && computerDraw === "paper") ||
    (playerDraw === "scissors" && computerDraw === "scissors")
  ) {
    return "Round Draw";
  } else if (
    (playerDraw === "rock" && computerDraw === "paper") ||
    (playerDraw === "paper" && computerDraw === "scissors") ||
    (playerDraw === "scissors" && computerDraw === "rock")
  ) {
    computerScore++;
    return "Computer Wins";
  } else if (
    (playerDraw === "rock" && computerDraw === "scissors") ||
    (playerDraw === "paper" && computerDraw === "rock") ||
    (playerDraw === "scissors" && computerDraw === "paper")
  ) {
    playerScore++;
    return "Player Wins";
  } else {
    return "Please enter a correct value from the option given : Rock | Paper | Scissors";
  }
}

function playGame() {
  roundPlayed++;
  eachRoundScore();
  gameContent.classList.remove("mainTransitionIn");

  if (playerScore === 5 || computerScore === 5) {
    finalScore();
    restartGame();
  }
  console.log(`Player  Score ${playerScore}`);
  console.log(`Computer Score ${computerScore}`);
  console.log(`----------------------------------`);
  console.log(`Player Selected ${userInput}`);
  console.log(`Computer Selected ${computerInput}`);
  console.log(`----------------------------------`);
  console.log(roundPlayed);
}

function eachRoundScore() {
  computerInput = computerGuess();

  roundNumber.textContent = `Round ${roundPlayed} `;
  currentGameScore.append(roundNumber);

  roundResult.classList.add("game__details__status");
  roundResult.textContent = `Round Status : ${gameLogic(
    userInput,
    computerInput
  )} `;
  currentGameScore.append(roundResult);

  roundDraw.classList.add("game__details__draws");
  roundDraw.textContent = ` ${capitalLetter(userInput)}  : ${capitalLetter(
    computerInput
  )}`;
  currentGameScore.append(roundDraw);

  roundScore.classList.add("game__details__eachRoundScore");
  roundScore.textContent = `${playerScore} : ${computerScore}`;
  currentGameScore.append(roundScore);
}

function finalScore() {
  resetGameScore.append(endGameText);
  resetGameScore.append(endGameResult);
  resetGameScore.append(restartGameDiv);

  if (playerScore > computerScore) {
    endGameText.textContent = "Hurray, You Won !";
    endGameResult.classList.add("game__details__win");
    endGameResult.textContent = `Seems like you are a Gifted Talent.`;
  } else if (playerScore === computerScore) {
    endGameText.textContent = " A Draw !";
    endGameResult.classList.add("game__details__draw");
    endGameResult.textContent = ` Oh Snap, Seems like a tie.`;
  } else {
    endGameResult.classList.add("game__details__lost");
    endGameText.textContent = "You Lost !";
    endGameResult.textContent = `Guess that you are not even better than a BOT.`;
  }
}

function restartGame() {
  restartGameDiv.classList.add("game__details__restart");
  // restartGameDiv.append(restartGameButton);

  scoreMenu.classList.add("mainTransitionIn");
  scoreMenu.classList.add("gameOver");

  gamePlayMenu.hidden = true;
  currentGameScore.hidden = true;
  resetGameScore.hidden = false;

  resetGameScore.classList.add("reset__border");
  restartGameButton.classList.add("game__details__restart__button");
  restartGameButton.textContent = `Restart`;
  restartGameDiv.append(restartGameButton);

  restartGameButton.addEventListener("click", (e) => {
    resetGameScore.hidden = true;
    currentGameScore.hidden = false;
    gamePlayMenu.hidden = false;
    currentGameScore.classList.add("hideBorder");

    currentGameScore.classList.remove("mainTransitionIn");
    scoreMenu.classList.remove("gameOver");
    scoreMenu.classList.remove("mainTransitionIn");
    gameContent.classList.add("mainTransitionIn");
    resetGameScore.classList.remove("reset__border");

    playerScore = 0;
    computerScore = 0;
    roundPlayed = 0;
    roundNumber.textContent = "Round Details";
    roundDraw.textContent = "";
    roundScore.textContent = "";
    roundResult.textContent = "";
    endGameResult.textContent = "";
  });
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
