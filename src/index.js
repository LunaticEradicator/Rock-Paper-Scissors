import "./sass/style.scss";
import computerGuess from "./computerGuess";
import capitalLetter from "./capitalizeLetter";

let userInput;
let computerInput;

// Score
let playerScore = 0;
let computerScore = 0;
let roundPlayed = 0;
let roundNeeded = 5;

//Menu
const gamePlayMenu = document.querySelector(".game__menu");
const scoreMenu = document.querySelector(".game__details");
let startMenu = document.querySelector(".start");

// HTML Element Selection //
const gameContent = document.querySelector(".game");
const drawButton = document.querySelectorAll(".game__button__style");
const currentGameScore = document.querySelector(".game__details__scoreboard");
const gamePause = document.querySelector(".game__details__pause");
const resetGameScore = document.querySelector(".game__details__reset");

const rockArrowAnimate = document.querySelector(
  ".game__button__outer__rock__arrow"
);
const paperArrowAnimate = document.querySelector(
  ".game__button__inner__paper__arrow"
);
const scissorsArrowAnimate = document.querySelector(
  ".game__button__inner__scissors__arrow"
);

//eachRound DOM//
let roundNumber = document.querySelector(".game__details__round");
let roundDraw = document.createElement("div");
let roundResult = document.createElement("div");
let roundScore = document.createElement("div");
let roundPlayer = document.createElement("div");

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
  // add arrow animation
  rockArrowAnimate.classList.add("vert-move");
  paperArrowAnimate.classList.add("vert-move");
  scissorsArrowAnimate.classList.add("vert-move");

  startMenu.hidden = true;
  gamePlayMenu.hidden = false;
  gameContent.hidden = false;
  gameContent.classList.add("mainTransitionIn");
});

function disableAllBtn(booleanValue, opacityValue, cursorValue) {
  for (let i = 0; i < drawButton.length; i++) {
    drawButton[i].disabled = booleanValue;
    drawButton[i].style.opacity = opacityValue;
    drawButton[i].style.cursor = cursorValue;
  }
}

// When user press a button playGame
for (let eachBtn of drawButton) {
  eachBtn.addEventListener("click", (e) => {
    // remove arrow animation
    rockArrowAnimate.classList.remove("vert-move");
    paperArrowAnimate.classList.remove("vert-move");
    scissorsArrowAnimate.classList.remove("vert-move");

    if (playerScore === roundNeeded || computerScore === roundNeeded) {
      eachBtn.disabled = true;
    } else {
      userInput = eachBtn.textContent.toLowerCase(); // gives the name of userInput
      computerInput = computerGuess();

      disableAllBtn(true, " 0.3", "not-allowed");
      // gamePause.textContent = `Waiting for Computer Draw`;
      // gamePause.classList.add("mainTransitionIn");
      setTimeout(() => {
        // gamePause.classList.remove("mainTransitionIn");
        rockArrowAnimate.classList.remove("mainTransitionIn");
        paperArrowAnimate.classList.remove("mainTransitionIn");
        scissorsArrowAnimate.classList.remove("mainTransitionIn");
      }, 1000);
      playGame();
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
    return "Draw";
  } else if (
    (playerDraw === "rock" && computerDraw === "paper") ||
    (playerDraw === "paper" && computerDraw === "scissors") ||
    (playerDraw === "scissors" && computerDraw === "rock")
  ) {
    computerScore++;
    return "Computer";
  } else if (
    (playerDraw === "rock" && computerDraw === "scissors") ||
    (playerDraw === "paper" && computerDraw === "rock") ||
    (playerDraw === "scissors" && computerDraw === "paper")
  ) {
    playerScore++;
    return "Player";
  } else {
    return "Please enter a correct value from the option given : Rock | Paper | Scissors";
  }
}

function playGame() {
  gameContent.classList.remove("mainTransitionIn");
  roundPlayed++;
  if (
    (roundPlayed > 1 && playerScore !== roundNeeded) ||
    computerScore !== roundNeeded
  ) {
    startMenu.hidden = true;
    gamePlayMenu.hidden = false;
    gameContent.hidden = false;
    currentGameScore.hidden = true;
  }
  eachRound();
  gameContent.classList.add("mainTransitionIn");

  console.log(`Player  Score ${playerScore}`);
  console.log(`Computer Score ${computerScore}`);
  console.log(`----------------------------------`);
  console.log(`Player Selected ${userInput}`);
  console.log(`Computer Selected ${computerInput}`);
  console.log(`----------------------------------`);
  console.log(roundPlayed);
}

function eachRound() {
  roundScore;
  const logic = gameLogic(userInput, computerInput);

  setTimeout(() => {
    gamePause.classList.add("mainTransitionIn");
    gamePause.textContent = `Computer Selected ${capitalLetter(computerInput)}`;
  }, 200);

  setTimeout(() => {
    gamePause.classList.remove("mainTransitionIn");
    gamePause.textContent = "";
  }, 1500);

  setTimeout(() => {
    eachRoundScore(logic);
  }, 1600);
}

function eachRoundScore(logic) {
  disableAllBtn(false, " 1", "pointer");
  rockArrowAnimate.classList.add("vert-move");
  paperArrowAnimate.classList.add("vert-move");
  scissorsArrowAnimate.classList.add("vert-move");

  currentGameScore.hidden = false;
  currentGameScore.classList.add("mainTransitionIn");

  roundNumber.textContent = `Round ${roundPlayed} `;
  roundPlayer.textContent = `Player : Computer`;
  roundPlayer.style.marginTop = "5px";
  roundScore.textContent = `${playerScore} : ${computerScore}`;
  roundResult.textContent = `Round Won : ${logic} `;
  roundDraw.textContent = ` ${capitalLetter(userInput)}  : ${capitalLetter(
    computerInput
  )}`;

  roundResult.classList.add("game__details__status");
  roundDraw.classList.add("game__details__draws");
  roundScore.classList.add("game__details__eachRoundScore");

  currentGameScore.append(roundNumber);
  currentGameScore.append(roundPlayer);
  currentGameScore.append(roundScore);
  currentGameScore.append(roundDraw);
  currentGameScore.append(roundResult);
  if (playerScore === roundNeeded || computerScore === roundNeeded) {
    gameOver();
    restartGame();
  }
}

function gameOver() {
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
  gamePlayMenu.hidden = true;
  currentGameScore.hidden = true;
  resetGameScore.hidden = false;

  scoreMenu.classList.add("mainTransitionIn");
  scoreMenu.classList.add("gameOver");

  resetGameScore.classList.add("reset__border");
  restartGameButton.classList.add("game__details__restart__button");
  restartGameButton.textContent = `Restart`;
  restartGameDiv.classList.add("game__details__restart");
  restartGameDiv.append(restartGameButton);

  restartGameButton.addEventListener("click", (e) => {
    // add arrow animation
    rockArrowAnimate.classList.add("vert-move");
    paperArrowAnimate.classList.add("vert-move");
    scissorsArrowAnimate.classList.add("vert-move");

    // add arrow transition
    rockArrowAnimate.classList.remove("mainTransitionIn");
    paperArrowAnimate.classList.remove("mainTransitionIn");
    scissorsArrowAnimate.classList.remove("mainTransitionIn");

    resetGameScore.hidden = true;
    gamePlayMenu.hidden = false;

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
