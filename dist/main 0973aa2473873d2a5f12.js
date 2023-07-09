"use strict";
(self["webpackChunkrock_paper_scissors"] = self["webpackChunkrock_paper_scissors"] || []).push([["main"],{

/***/ "./src/capitalizeLetter.js":
/*!*********************************!*\
  !*** ./src/capitalizeLetter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ capitalLetter)
/* harmony export */ });
// To Capitalize the letter
function capitalLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),

/***/ "./src/computerGuess.js":
/*!******************************!*\
  !*** ./src/computerGuess.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computerGuess)
/* harmony export */ });
// import { camelCase } from "lodash";
// import icon from "./assets/ArrowDown.png";

function computerGuess() {
  const randomValue = ["rock", "paper", "scissors"];
  let computerGuess = randomValue[Math.floor(Math.random() * randomValue.length)];
  console.log(computerGuess);
  return computerGuess;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _computerGuess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computerGuess */ "./src/computerGuess.js");
/* harmony import */ var _capitalizeLetter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./capitalizeLetter */ "./src/capitalizeLetter.js");



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
const gamePause = document.querySelector(".game__details__pause");
const resetGameScore = document.querySelector(".game__details__reset");
const rockArrowAnimate = document.querySelector(".game__button__outer__rock__arrow");
const paperArrowAnimate = document.querySelector(".game__button__inner__paper__arrow");
const scissorsArrowAnimate = document.querySelector(".game__button__inner__scissors__arrow");

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
startGameButton.addEventListener("click", e => {
  // add arrow animation
  rockArrowAnimate.classList.add("vert-move");
  paperArrowAnimate.classList.add("vert-move");
  scissorsArrowAnimate.classList.add("vert-move");
  startMenu.hidden = true;
  gamePlayMenu.hidden = false;
  gameContent.hidden = false;
  gameContent.classList.add("mainTransitionIn");
});

// When user press a button playGame
for (let eachBtn of drawButton) {
  eachBtn.addEventListener("click", e => {
    // remove arrow animation
    rockArrowAnimate.classList.remove("vert-move");
    paperArrowAnimate.classList.remove("vert-move");
    scissorsArrowAnimate.classList.remove("vert-move");
    if (playerScore === 5 || computerScore === 5) {
      eachBtn.disabled = true;
    } else {
      userInput = eachBtn.textContent.toLowerCase(); // gives the name of userInput
      for (let i = 0; i < drawButton.length; i++) {
        drawButton[i].disabled = true;
      }
      gamePause.textContent = `Waiting for Computer Draw`;
      gamePause.classList.add("mainTransitionIn");
      setTimeout(() => {
        gamePause.classList.remove("mainTransitionIn");
        rockArrowAnimate.classList.remove("mainTransitionIn");
        paperArrowAnimate.classList.remove("mainTransitionIn");
        scissorsArrowAnimate.classList.remove("mainTransitionIn");
      }, 1000);
      playGame(); //a variable that has not been declared, it will automatically become a GLOBAL variable.
    }
  });
}

// function to play a single round
function gameLogic(playerDraw, computerDraw) {
  if (playerDraw === "rock" && computerDraw === "rock" || playerDraw === "paper" && computerDraw === "paper" || playerDraw === "scissors" && computerDraw === "scissors") {
    return "Draw";
  } else if (playerDraw === "rock" && computerDraw === "paper" || playerDraw === "paper" && computerDraw === "scissors" || playerDraw === "scissors" && computerDraw === "rock") {
    computerScore++;
    return "Computer Won";
  } else if (playerDraw === "rock" && computerDraw === "scissors" || playerDraw === "paper" && computerDraw === "rock" || playerDraw === "scissors" && computerDraw === "paper") {
    playerScore++;
    return "Player Won";
  } else {
    return "Please enter a correct value from the option given : Rock | Paper | Scissors";
  }
}
function playGame() {
  // eachBtn.disabled = true;
  gameContent.classList.remove("mainTransitionIn");
  roundPlayed++;
  // if (roundPlayed > 1) {
  //   startMenu.hidden = true;
  //   gamePlayMenu.hidden = false;
  //   gameContent.hidden = false;
  //   currentGameScore.hidden = true;
  // }
  eachRoundScore();
  gameContent.classList.add("mainTransitionIn");

  // console.log(`Player  Score ${playerScore}`);
  // console.log(`Computer Score ${computerScore}`);
  // console.log(`----------------------------------`);
  // console.log(`Player Selected ${userInput}`);
  // console.log(`Computer Selected ${computerInput}`);
  // console.log(`----------------------------------`);
  // console.log(roundPlayed);

  if (playerScore === 1 || computerScore === 1) {
    finalScore();
    restartGame();
  }
}
function eachRoundScore() {
  computerInput = (0,_computerGuess__WEBPACK_IMPORTED_MODULE_1__["default"])();
  setTimeout(() => {
    gamePause.classList.add("mainTransitionIn");
    gamePause.textContent = `Computer Selected ${(0,_capitalizeLetter__WEBPACK_IMPORTED_MODULE_2__["default"])(computerInput)}`;
  }, 2000);
  setTimeout(() => {
    gamePause.classList.remove("mainTransitionIn");
    gamePause.textContent = "";
  }, 3200);
  setTimeout(() => {
    // score border hider
    currentGameScore.hidden = false;
    currentGameScore.classList.remove("hideBorder");
    currentGameScore.classList.add("mainTransitionIn");
    roundNumber.textContent = `Round ${roundPlayed} `;
    currentGameScore.append(roundNumber);
    roundResult.classList.add("game__details__status");
    roundResult.textContent = `Round Status : ${gameLogic(userInput, computerInput)} `;
    currentGameScore.append(roundResult);
    roundDraw.classList.add("game__details__draws");
    roundDraw.textContent = ` ${(0,_capitalizeLetter__WEBPACK_IMPORTED_MODULE_2__["default"])(userInput)}  : ${(0,_capitalizeLetter__WEBPACK_IMPORTED_MODULE_2__["default"])(computerInput)}`;
    currentGameScore.append(roundDraw);
    roundScore.classList.add("game__details__eachRoundScore");
    roundScore.textContent = `${playerScore} : ${computerScore}`;
    currentGameScore.append(roundScore);
    rockArrowAnimate.classList.add("vert-move");
    paperArrowAnimate.classList.add("vert-move");
    scissorsArrowAnimate.classList.add("vert-move");
    for (let i = 0; i < drawButton.length; i++) {
      drawButton[i].disabled = false;
    }
    rockArrowAnimate.classList.add("vert-move");
    paperArrowAnimate.classList.add("vert-move");
    scissorsArrowAnimate.classList.add("vert-move");
  }, 3310);
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
  restartGameButton.addEventListener("click", e => {
    // add arrow animation
    rockArrowAnimate.classList.add("vert-move");
    paperArrowAnimate.classList.add("vert-move");
    scissorsArrowAnimate.classList.add("vert-move");

    // add arrow transition
    rockArrowAnimate.classList.remove("mainTransitionIn");
    paperArrowAnimate.classList.remove("mainTransitionIn");
    scissorsArrowAnimate.classList.remove("mainTransitionIn");
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
  font-size: 100%;
  min-width: 100vw;
  min-height: 100vh;
}

* {
  color: #a9927d;
  font-family: "Rubik Iso", cursive;
  font-family: "Silkscreen", cursive;
  font-family: "Acme", sans-serif;
  font-family: "Akronim", cursive;
  font-family: "Kalam", cursive;
  font-family: "Spectral", serif;
  border-color: #a9927d;
  margin: 0px;
  padding: 0px;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #22333b;
}

button {
  cursor: pointer;
  background-color: #c2b6a5;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
}

h1 {
  margin-top: 2px;
  text-align: center;
  border-radius: 11px;
  border-top: 3.5px solid #a18976;
  border-radius: 50px;
  font-family: "Rubik Iso", cursive;
  font-family: "Silkscreen", cursive;
}

h2 {
  font-size: 30px;
  text-align: center;
  border-radius: 7px;
  border-bottom: 2px solid #14a085;
  margin-left: 7px;
  margin-right: 7px;
}

.start__button {
  padding: 0px 10px;
  background-color: #22333b;
  font-family: "Rubik Iso", cursive;
  font-family: "Silkscreen", cursive;
  font-size: 3rem;
  border: 2.5px solid #14a085;
  border-radius: 20px;
}

.start {
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
}
.start__button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000;
  box-shadow: 0px 0px 15px 0px #14a085;
}
.start__button > a {
  font-family: "Rubik Iso", cursive;
  font-family: "Silkscreen", cursive;
  text-decoration: none;
}
.start__button:hover {
  background-color: #ffffff;
  box-shadow: 0px 0px 15px 0px #14a085;
}

.game__design__right, .game__design__left {
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
  margin-left: 2px;
  margin-right: 2px;
  margin-top: 5.5px;
}

.game__header {
  font-size: 3rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  border-radius: 11px;
  border-top: 3.5px solid #a18976;
  border-radius: 50px;
  font-family: "Rubik Iso", cursive;
  font-family: "Silkscreen", cursive;
}
.game__header > img {
  height: 95px;
  width: 95px;
  padding: 5px;
}
@media (max-width: 90em) {
  .game__header {
    font-size: 2.5rem;
  }
  .game__header > img {
    height: 65px;
    width: 65px;
    padding: 5px;
  }
}
@media (max-width: 56.25em) {
  .game__header {
    font-size: 2rem;
  }
  .game__header > img {
    height: 45px;
    width: 45px;
    padding: 5px;
  }
}
@media (max-width: 43.75em) {
  .game__header {
    font-size: 1.3rem;
  }
  .game__header > img {
    height: 25px;
    width: 25px;
    padding: 5px;
  }
}

.game__design {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-align: center;
  border-radius: 7px;
  border-bottom: 2px solid #14a085;
  margin-left: 7px;
  margin-right: 7px;
}
.game__design > img {
  height: 45px;
  width: 45px;
  padding: 0;
}
@media (max-width: 90em) {
  .game__design {
    font-size: 1.5rem;
  }
  .game__design > img {
    height: 30px;
    width: 30px;
    padding: 5px;
  }
}
@media (max-width: 56.25em) {
  .game__design {
    font-size: 1.2rem;
  }
  .game__design > img {
    height: 25px;
    width: 25px;
    padding: 5px;
  }
}
@media (max-width: 43.75em) {
  .game__design {
    font-size: 1rem;
  }
  .game__design > img {
    height: 20px;
    width: 20px;
    padding: 5px;
  }
}

.game__button__style {
  padding: 0px 10px;
  background-color: #22333b;
  font-family: "Rubik Iso", cursive;
  font-family: "Silkscreen", cursive;
  font-size: 3.5rem;
  border: 2.5px solid #14a085;
  border-radius: 20px;
}

.game__arrow {
  text-align: center;
}

.game__button__outer__rock {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.game__button__outer__rock__arrow {
  max-height: 90px;
  max-width: 90px;
  margin-top: 20px;
  margin-bottom: 10px;
}
@media (max-width: 90em) {
  .game__button__outer__rock__arrow {
    max-height: 70px;
    max-width: 70px;
    margin-top: 40px;
    margin-bottom: 5px;
  }
}
@media (max-width: 56.25em) {
  .game__button__outer__rock__arrow {
    max-height: 50px;
    max-width: 50px;
    margin-top: 40px;
    margin-bottom: 5px;
  }
}
@media (max-width: 43.75em) {
  .game__button__outer__rock__arrow {
    max-height: 40px;
    max-width: 40px;
    margin-top: 40px;
    margin-bottom: 5px;
  }
}
.game__button__inner {
  display: flex;
  justify-content: space-around;
}
.game__button__inner__paper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.game__button__inner__paper__arrow {
  max-height: 90px;
  max-width: 90px;
  margin-top: 20px;
  margin-bottom: 10px;
}
@media (max-width: 90em) {
  .game__button__inner__paper__arrow {
    max-height: 75px;
    max-width: 75px;
    margin-top: 40px;
    margin-bottom: 5px;
  }
}
@media (max-width: 56.25em) {
  .game__button__inner__paper__arrow {
    max-height: 55px;
    max-width: 55px;
    margin-top: 40px;
    margin-bottom: 5px;
  }
}
@media (max-width: 43.75em) {
  .game__button__inner__paper__arrow {
    max-height: 35px;
    max-width: 35px;
    margin-top: 40px;
    margin-bottom: 5px;
  }
}
.game__button__inner__scissors {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.game__button__inner__scissors__arrow {
  max-height: 90px;
  max-width: 90px;
  margin-top: 20px;
  margin-bottom: 10px;
}
@media (max-width: 90em) {
  .game__button__inner__scissors__arrow {
    max-height: 75px;
    max-width: 75px;
    margin-top: 40px;
    margin-bottom: 5px;
  }
}
@media (max-width: 56.25em) {
  .game__button__inner__scissors__arrow {
    max-height: 55px;
    max-width: 55px;
    margin-top: 40px;
    margin-bottom: 5px;
  }
}
@media (max-width: 43.75em) {
  .game__button__inner__scissors__arrow {
    max-height: 35px;
    max-width: 35px;
    margin-top: 40px;
    margin-bottom: 5px;
  }
}
.game__button__style:hover {
  background-color: #000000;
  box-shadow: 0px 0px 15px 0px #14a085;
  transform: translateY(4px);
}
.game__button__style:active {
  top: 10px;
  background-color: #ffffff;
}
@media (max-width: 90em) {
  .game__button__style {
    font-size: 2.5rem;
  }
}
@media (max-width: 56.25em) {
  .game__button__style {
    font-size: 2rem;
  }
}
@media (max-width: 43.75em) {
  .game__button__style {
    font-size: 1.5rem;
  }
}

.game__details__restart__button {
  padding: 0px 10px;
  background-color: #22333b;
  font-family: "Rubik Iso", cursive;
  font-family: "Silkscreen", cursive;
  font-size: 3rem;
  border: 2.5px solid #14a085;
  border-radius: 20px;
}

.game__details__pause {
  transition: all 1s;
  color: white;
}

.game__details {
  display: flex;
  justify-content: center;
  padding-top: 5px;
  text-align: center;
  font-size: 2.5rem;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
}
@media (max-width: 90em) {
  .game__details {
    margin-top: 40px;
    font-size: 2.2rem;
  }
}
@media (max-width: 56.25em) {
  .game__details {
    margin-top: 40px;
    font-size: 2rem;
  }
}
@media (max-width: 43.75em) {
  .game__details {
    margin-top: 40px;
    font-size: 1.5rem;
  }
}
.game__details__scoreboard {
  border-top: 3.5px solid #a18976;
  border-bottom: 3.5px solid #a18976;
  border-radius: 50px;
  padding: 20px;
}
@media (max-width: 43.75em) {
  .game__details__scoreboard {
    padding: 10px;
  }
}
.game__details__round {
  border-bottom: 2px solid #14a085;
  border-radius: 7px;
}
.game__details__restart {
  display: flex;
  justify-content: center;
}
.game__details__restart__button:hover {
  background-color: #000000;
  box-shadow: 0px 0px 15px 0px #14a085;
  transform: translateY(4px);
}
.game__details__restart__button:active {
  top: 10px;
  background-color: #ffffff;
}

.game__score__current {
  padding-top: 10px;
  padding-bottom: 10px;
}

.gameOver {
  display: grid;
  place-items: center;
  align-content: center;
  min-height: 100vh;
  /* position: absolute; */
  /* top: 33%; */
  /* border: 3.5px solid #a18976; */
  left: 1%;
  border-radius: 20px;
  padding: 20px;
  border: 0;
}

.reset__border {
  border-top: 3.5px solid #a18976;
  border-bottom: 3.5px solid #a18976;
  padding: 20px;
  border-radius: 50px;
}

.hideBorder {
  border-top: 0;
  border-bottom: 0;
}

.mainTransitionIn {
  animation: transitionIn 0.75s;
}

@keyframes transitionIn {
  from {
    opacity: 0;
    transform: rotateX(-10deg);
  }
  to {
    opacity: 1;
    transform: rotateX(0);
  }
}
.vert-move {
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
}

@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}`, "",{"version":3,"sources":["webpack://./src/sass/globals/_boilerplate.scss","webpack://./src/sass/style.scss","webpack://./src/sass/components/startBtn.scss","webpack://./src/sass/components/headerDesign.scss","webpack://./src/sass/util/breakpoints.scss","webpack://./src/sass/components/gameBtn.scss","webpack://./src/sass/components/scoreDetail.scss"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n}\r\n\r\n// *,\r\n// *::before,\r\n// *::after {\r\n//   box-sizing: inherit;\r\n// }\r\n\r\n* {\r\n  color: #a9927d;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  font-family: \"Acme\", sans-serif;\r\n  font-family: \"Akronim\", cursive;\r\n  font-family: \"Kalam\", cursive;\r\n  font-family: \"Spectral\", serif;\r\n  border-color: #a9927d;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: #22333b;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  background-color: #c2b6a5;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\nh1 {\r\n  // display: flex;\r\n  // justify-content: center;\r\n  margin-top: 2px;\r\n  text-align: center;\r\n  border-radius: 11px;\r\n  border-top: 3.5px solid #a18976;\r\n  border-radius: 50px;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n}\r\n\r\nh2 {\r\n  font-size: 30px;\r\n  text-align: center;\r\n  border-radius: 7px;\r\n  border-bottom: 2px solid #14a085;\r\n  margin-left: 7px;\r\n  margin-right: 7px;\r\n}\r\n","@forward \"globals\";\r\n@forward \"components\";\r\n\r\n.mainTransitionIn {\r\n  animation: transitionIn 0.75s;\r\n}\r\n\r\n@keyframes transitionIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: rotateX(-10deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: rotateX(0);\r\n  }\r\n}\r\n\r\n.vert-move {\r\n  -webkit-animation: mover 1s infinite alternate;\r\n  animation: mover 1s infinite alternate;\r\n}\r\n// img.vert-move {\r\n//     -webkit-animation: mover 1s infinite  alternate;\r\n//     animation: mover 1s infinite  alternate;\r\n// }\r\n// @-webkit-keyframes mover {\r\n//     0% { transform: translateY(0); }\r\n//     100% { transform: translateY(-10px); }\r\n// }\r\n@keyframes mover {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    transform: translateY(-10px);\r\n  }\r\n}\r\n","%buttonStyle {\r\n  padding: 0px 10px;\r\n  background-color: #22333b;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  font-size: 3rem;\r\n  border: 2.5px solid #14a085;\r\n  border-radius: 20px;\r\n}\r\n.start {\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  position: relative;\r\n\r\n  &__button {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: #000000;\r\n    box-shadow: 0px 0px 15px 0px #14a085;\r\n    @extend %buttonStyle;\r\n\r\n    & > a {\r\n      font-family: \"Rubik Iso\", cursive;\r\n      font-family: \"Silkscreen\", cursive;\r\n      text-decoration: none;\r\n    }\r\n    &:hover {\r\n      background-color: #ffffff;\r\n      box-shadow: 0px 0px 15px 0px #14a085;\r\n    }\r\n  }\r\n}\r\n","@use \"../util/\" as ul;\r\n\r\n@mixin headerStyle($height, $width, $padding) {\r\n  height: $height;\r\n  width: $width;\r\n  padding: $padding;\r\n}\r\n%designStyle {\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n  padding-top: 2px;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  margin-top: 5.5px;\r\n}\r\n\r\n.game__header {\r\n  font-size: 3rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  text-align: center;\r\n  border-radius: 11px;\r\n  border-top: 3.5px solid #a18976;\r\n  border-radius: 50px;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  & > img {\r\n    @include headerStyle(95px, 95px, 5px);\r\n  }\r\n\r\n  @include ul.breakpoint(xLarge) {\r\n    font-size: 2.5rem;\r\n    & > img {\r\n      @include headerStyle(65px, 65px, 5px);\r\n    }\r\n  }\r\n  @include ul.breakpoint(large) {\r\n    font-size: 2rem;\r\n    & > img {\r\n      @include headerStyle(45px, 45px, 5px);\r\n    }\r\n  }\r\n  @include ul.breakpoint(medium) {\r\n    font-size: 1.3rem;\r\n    & > img {\r\n      @include headerStyle(25px, 25px, 5px);\r\n    }\r\n  }\r\n}\r\n\r\n.game__design {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  border-radius: 7px;\r\n  border-bottom: 2px solid #14a085;\r\n  margin-left: 7px;\r\n  margin-right: 7px;\r\n  & > img {\r\n    @include headerStyle(45px, 45px, 0);\r\n  }\r\n  &__left {\r\n    @extend %designStyle;\r\n  }\r\n  &__right {\r\n    @extend %designStyle;\r\n  }\r\n\r\n  @include ul.breakpoint(xLarge) {\r\n    font-size: 1.5rem;\r\n    & > img {\r\n      @include headerStyle(30px, 30px, 5px);\r\n    }\r\n  }\r\n  @include ul.breakpoint(large) {\r\n    font-size: 1.2rem;\r\n    & > img {\r\n      @include headerStyle(25px, 25px, 5px);\r\n    }\r\n  }\r\n  @include ul.breakpoint(medium) {\r\n    font-size: 1rem;\r\n    & > img {\r\n      @include headerStyle(20px, 20px, 5px);\r\n    }\r\n  }\r\n}\r\n","$breakpoints-up: (\r\n  \"medium\": 43.75em,\r\n  \"large\": 56.25em,\r\n  \"xLarge\": 90em,\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n  @media (max-width: map-get($breakpoints-up,$size)) {\r\n    @content;\r\n  }\r\n}\r\n","@use \"../util/\" as ul;\r\n\r\n%buttonStyle {\r\n  padding: 0px 10px;\r\n  background-color: #22333b;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  font-size: 3.5rem;\r\n  border: 2.5px solid #14a085;\r\n  border-radius: 20px;\r\n}\r\n\r\n@mixin buttonPosition($flex, $justify) {\r\n  display: $flex;\r\n  justify-content: $justify;\r\n}\r\n\r\n.game__arrow {\r\n  text-align: center;\r\n}\r\n\r\n.game__button {\r\n  &__outer {\r\n    &__rock {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      &__arrow {\r\n        max-height: 90px;\r\n        max-width: 90px;\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n        @include ul.breakpoint(xLarge) {\r\n          max-height: 70px;\r\n          max-width: 70px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(large) {\r\n          max-height: 50px;\r\n          max-width: 50px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(medium) {\r\n          max-height: 40px;\r\n          max-width: 40px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &__inner {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    &__paper {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      &__arrow {\r\n        max-height: 90px;\r\n        max-width: 90px;\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n        @include ul.breakpoint(xLarge) {\r\n          max-height: 75px;\r\n          max-width: 75px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(large) {\r\n          max-height: 55px;\r\n          max-width: 55px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(medium) {\r\n          max-height: 35px;\r\n          max-width: 35px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n      }\r\n    }\r\n    &__scissors {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      &__arrow {\r\n        max-height: 90px;\r\n        max-width: 90px;\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n        @include ul.breakpoint(xLarge) {\r\n          max-height: 75px;\r\n          max-width: 75px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(large) {\r\n          max-height: 55px;\r\n          max-width: 55px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(medium) {\r\n          max-height: 35px;\r\n          max-width: 35px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &__style {\r\n    @extend %buttonStyle;\r\n    &:hover {\r\n      background-color: #000000;\r\n      box-shadow: 0px 0px 15px 0px #14a085;\r\n      transform: translateY(4px);\r\n    }\r\n    &:active {\r\n      top: 10px;\r\n      background-color: #ffffff;\r\n    }\r\n    @include ul.breakpoint(xLarge) {\r\n      font-size: 2.5rem;\r\n    }\r\n    @include ul.breakpoint(large) {\r\n      font-size: 2rem;\r\n    }\r\n    @include ul.breakpoint(medium) {\r\n      font-size: 1.5rem;\r\n    }\r\n  }\r\n}\r\n","@use \"../util/\" as ul;\r\n%buttonStyle {\r\n  padding: 0px 10px;\r\n  background-color: #22333b;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  font-size: 3rem;\r\n  border: 2.5px solid #14a085;\r\n  border-radius: 20px;\r\n}\r\n\r\n.game__details__pause {\r\n  transition: all 1s;\r\n  color: white;\r\n}\r\n\r\n.game__details {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 5px;\r\n  text-align: center;\r\n  font-size: 2.5rem;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n  margin-top: 20px;\r\n  @include ul.breakpoint(xLarge) {\r\n    margin-top: 40px;\r\n    font-size: 2.2rem;\r\n  }\r\n  @include ul.breakpoint(large) {\r\n    margin-top: 40px;\r\n    font-size: 2rem;\r\n  }\r\n  @include ul.breakpoint(medium) {\r\n    margin-top: 40px;\r\n    font-size: 1.5rem;\r\n  }\r\n  &__scoreboard {\r\n    border-top: 3.5px solid #a18976;\r\n    border-bottom: 3.5px solid #a18976;\r\n    border-radius: 50px;\r\n    padding: 20px;\r\n    @include ul.breakpoint(medium) {\r\n      padding: 10px;\r\n    }\r\n  }\r\n  &__round {\r\n    border-bottom: 2px solid #14a085;\r\n    border-radius: 7px;\r\n  }\r\n  &__restart {\r\n    display: flex;\r\n    justify-content: center;\r\n    &__button {\r\n      @extend %buttonStyle;\r\n      // margin: 20px;\r\n      &:hover {\r\n        background-color: #000000;\r\n        box-shadow: 0px 0px 15px 0px #14a085;\r\n        transform: translateY(4px);\r\n      }\r\n      &:active {\r\n        top: 10px;\r\n        background-color: #ffffff;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.game__score__current {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.gameOver {\r\n  display: grid;\r\n  place-items: center;\r\n  align-content: center;\r\n  min-height: 100vh;\r\n  /* position: absolute; */\r\n  /* top: 33%; */\r\n  /* border: 3.5px solid #a18976; */\r\n  left: 1%;\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  border: 0;\r\n}\r\n\r\n.reset__border {\r\n  border-top: 3.5px solid #a18976;\r\n  border-bottom: 3.5px solid #a18976;\r\n  padding: 20px;\r\n  border-radius: 50px;\r\n}\r\n\r\n.hideBorder {\r\n  border-top: 0;\r\n  border-bottom: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVJBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsZUFBZTtBQUNmLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwWEFBMFgsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLGFBQWEsY0FBYyxjQUFjLE9BQU8sTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLGFBQWEsY0FBYyxjQUFjLE9BQU8sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sYUFBYSxjQUFjLGNBQWMsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxhQUFhLGNBQWMsY0FBYyxPQUFPLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sYUFBYSxjQUFjLGNBQWMsT0FBTyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sYUFBYSxjQUFjLGNBQWMsT0FBTyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxhQUFhLGNBQWMsY0FBYyxPQUFPLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLGFBQWEsY0FBYyxjQUFjLE9BQU8sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVB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Q0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9zcmMvY2FwaXRhbGl6ZUxldHRlci5qcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vc3JjL2NvbXB1dGVyR3Vlc3MuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vc3JjL3Nhc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/NGQzNyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRvIENhcGl0YWxpemUgdGhlIGxldHRlclxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsTGV0dGVyKHN0cikge1xyXG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcbn1cclxuIiwiLy8gaW1wb3J0IHsgY2FtZWxDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG4vLyBpbXBvcnQgaWNvbiBmcm9tIFwiLi9hc3NldHMvQXJyb3dEb3duLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZXJHdWVzcygpIHtcclxuICBjb25zdCByYW5kb21WYWx1ZSA9IFtcInJvY2tcIiwgXCJwYXBlclwiLCBcInNjaXNzb3JzXCJdO1xyXG4gIGxldCBjb21wdXRlckd1ZXNzID1cclxuICAgIHJhbmRvbVZhbHVlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbVZhbHVlLmxlbmd0aCldO1xyXG4gIGNvbnNvbGUubG9nKGNvbXB1dGVyR3Vlc3MpO1xyXG4gIHJldHVybiBjb21wdXRlckd1ZXNzO1xyXG59XHJcbiIsImltcG9ydCBcIi4vc2Fzcy9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCBjb21wdXRlckd1ZXNzIGZyb20gXCIuL2NvbXB1dGVyR3Vlc3NcIjtcclxuaW1wb3J0IGNhcGl0YWxMZXR0ZXIgZnJvbSBcIi4vY2FwaXRhbGl6ZUxldHRlclwiO1xyXG5cclxubGV0IHVzZXJJbnB1dDtcclxubGV0IGNvbXB1dGVySW5wdXQ7XHJcblxyXG4vLyBTY29yZVxyXG5sZXQgcGxheWVyU2NvcmUgPSAwO1xyXG5sZXQgY29tcHV0ZXJTY29yZSA9IDA7XHJcbmxldCByb3VuZFBsYXllZCA9IDA7XHJcblxyXG4vL01lbnVcclxuY29uc3QgZ2FtZVBsYXlNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lX19tZW51XCIpO1xyXG5jb25zdCBzY29yZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVfX2RldGFpbHNcIik7XHJcbmxldCBzdGFydE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0XCIpO1xyXG5cclxuLy8gSFRNTCBFbGVtZW50IFNlbGVjdGlvbiAvL1xyXG5jb25zdCBnYW1lQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZVwiKTtcclxuY29uc3QgZHJhd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FtZV9fYnV0dG9uX19zdHlsZVwiKTtcclxuY29uc3QgY3VycmVudEdhbWVTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZV9fZGV0YWlsc19fc2NvcmVib2FyZFwiKTtcclxuY29uc3QgZ2FtZVBhdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lX19kZXRhaWxzX19wYXVzZVwiKTtcclxuY29uc3QgcmVzZXRHYW1lU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVfX2RldGFpbHNfX3Jlc2V0XCIpO1xyXG5cclxuY29uc3Qgcm9ja0Fycm93QW5pbWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuZ2FtZV9fYnV0dG9uX19vdXRlcl9fcm9ja19fYXJyb3dcIlxyXG4pO1xyXG5jb25zdCBwYXBlckFycm93QW5pbWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuZ2FtZV9fYnV0dG9uX19pbm5lcl9fcGFwZXJfX2Fycm93XCJcclxuKTtcclxuY29uc3Qgc2Npc3NvcnNBcnJvd0FuaW1hdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLmdhbWVfX2J1dHRvbl9faW5uZXJfX3NjaXNzb3JzX19hcnJvd1wiXHJcbik7XHJcblxyXG4vL2VhY2hSb3VuZCBET00vL1xyXG5sZXQgcm91bmROdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVfX2RldGFpbHNfX3JvdW5kXCIpO1xyXG5sZXQgcm91bmREcmF3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubGV0IHJvdW5kUmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubGV0IHJvdW5kU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuLy9lbmRSb3VuZCBET00vL1xyXG5sZXQgZW5kR2FtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5sZXQgZW5kR2FtZVJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5sZXQgc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydF9fYnV0dG9uXCIpO1xyXG5sZXQgcmVzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5sZXQgcmVzdGFydEdhbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuc3RhcnRNZW51LmhpZGRlbiA9IGZhbHNlO1xyXG5nYW1lUGxheU1lbnUuaGlkZGVuID0gdHJ1ZTtcclxuZ2FtZUNvbnRlbnQuaGlkZGVuID0gdHJ1ZTtcclxuY3VycmVudEdhbWVTY29yZS5oaWRkZW4gPSB0cnVlO1xyXG5cclxuc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIC8vIGFkZCBhcnJvdyBhbmltYXRpb25cclxuICByb2NrQXJyb3dBbmltYXRlLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0LW1vdmVcIik7XHJcbiAgcGFwZXJBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LmFkZChcInZlcnQtbW92ZVwiKTtcclxuICBzY2lzc29yc0Fycm93QW5pbWF0ZS5jbGFzc0xpc3QuYWRkKFwidmVydC1tb3ZlXCIpO1xyXG5cclxuICBzdGFydE1lbnUuaGlkZGVuID0gdHJ1ZTtcclxuICBnYW1lUGxheU1lbnUuaGlkZGVuID0gZmFsc2U7XHJcbiAgZ2FtZUNvbnRlbnQuaGlkZGVuID0gZmFsc2U7XHJcbiAgZ2FtZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcbn0pO1xyXG5cclxuLy8gV2hlbiB1c2VyIHByZXNzIGEgYnV0dG9uIHBsYXlHYW1lXHJcbmZvciAobGV0IGVhY2hCdG4gb2YgZHJhd0J1dHRvbikge1xyXG4gIGVhY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAvLyByZW1vdmUgYXJyb3cgYW5pbWF0aW9uXHJcbiAgICByb2NrQXJyb3dBbmltYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJ2ZXJ0LW1vdmVcIik7XHJcbiAgICBwYXBlckFycm93QW5pbWF0ZS5jbGFzc0xpc3QucmVtb3ZlKFwidmVydC1tb3ZlXCIpO1xyXG4gICAgc2Npc3NvcnNBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LnJlbW92ZShcInZlcnQtbW92ZVwiKTtcclxuXHJcbiAgICBpZiAocGxheWVyU2NvcmUgPT09IDUgfHwgY29tcHV0ZXJTY29yZSA9PT0gNSkge1xyXG4gICAgICBlYWNoQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVzZXJJbnB1dCA9IGVhY2hCdG4udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTsgLy8gZ2l2ZXMgdGhlIG5hbWUgb2YgdXNlcklucHV0XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd0J1dHRvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRyYXdCdXR0b25baV0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnYW1lUGF1c2UudGV4dENvbnRlbnQgPSBgV2FpdGluZyBmb3IgQ29tcHV0ZXIgRHJhd2A7XHJcbiAgICAgIGdhbWVQYXVzZS5jbGFzc0xpc3QuYWRkKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZ2FtZVBhdXNlLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG4gICAgICAgIHJvY2tBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcbiAgICAgICAgcGFwZXJBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcbiAgICAgICAgc2Npc3NvcnNBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcbiAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgcGxheUdhbWUoKTsgLy9hIHZhcmlhYmxlIHRoYXQgaGFzIG5vdCBiZWVuIGRlY2xhcmVkLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYmVjb21lIGEgR0xPQkFMIHZhcmlhYmxlLlxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0byBwbGF5IGEgc2luZ2xlIHJvdW5kXHJcbmZ1bmN0aW9uIGdhbWVMb2dpYyhwbGF5ZXJEcmF3LCBjb21wdXRlckRyYXcpIHtcclxuICBpZiAoXHJcbiAgICAocGxheWVyRHJhdyA9PT0gXCJyb2NrXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInJvY2tcIikgfHxcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInBhcGVyXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInBhcGVyXCIpIHx8XHJcbiAgICAocGxheWVyRHJhdyA9PT0gXCJzY2lzc29yc1wiICYmIGNvbXB1dGVyRHJhdyA9PT0gXCJzY2lzc29yc1wiKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIFwiRHJhd1wiO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICAocGxheWVyRHJhdyA9PT0gXCJyb2NrXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInBhcGVyXCIpIHx8XHJcbiAgICAocGxheWVyRHJhdyA9PT0gXCJwYXBlclwiICYmIGNvbXB1dGVyRHJhdyA9PT0gXCJzY2lzc29yc1wiKSB8fFxyXG4gICAgKHBsYXllckRyYXcgPT09IFwic2Npc3NvcnNcIiAmJiBjb21wdXRlckRyYXcgPT09IFwicm9ja1wiKVxyXG4gICkge1xyXG4gICAgY29tcHV0ZXJTY29yZSsrO1xyXG4gICAgcmV0dXJuIFwiQ29tcHV0ZXIgV29uXCI7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInJvY2tcIiAmJiBjb21wdXRlckRyYXcgPT09IFwic2Npc3NvcnNcIikgfHxcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInBhcGVyXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInJvY2tcIikgfHxcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInNjaXNzb3JzXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInBhcGVyXCIpXHJcbiAgKSB7XHJcbiAgICBwbGF5ZXJTY29yZSsrO1xyXG4gICAgcmV0dXJuIFwiUGxheWVyIFdvblwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gXCJQbGVhc2UgZW50ZXIgYSBjb3JyZWN0IHZhbHVlIGZyb20gdGhlIG9wdGlvbiBnaXZlbiA6IFJvY2sgfCBQYXBlciB8IFNjaXNzb3JzXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5R2FtZSgpIHtcclxuICAvLyBlYWNoQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICBnYW1lQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICByb3VuZFBsYXllZCsrO1xyXG4gIC8vIGlmIChyb3VuZFBsYXllZCA+IDEpIHtcclxuICAvLyAgIHN0YXJ0TWVudS5oaWRkZW4gPSB0cnVlO1xyXG4gIC8vICAgZ2FtZVBsYXlNZW51LmhpZGRlbiA9IGZhbHNlO1xyXG4gIC8vICAgZ2FtZUNvbnRlbnQuaGlkZGVuID0gZmFsc2U7XHJcbiAgLy8gICBjdXJyZW50R2FtZVNjb3JlLmhpZGRlbiA9IHRydWU7XHJcbiAgLy8gfVxyXG4gIGVhY2hSb3VuZFNjb3JlKCk7XHJcbiAgZ2FtZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGBQbGF5ZXIgIFNjb3JlICR7cGxheWVyU2NvcmV9YCk7XHJcbiAgLy8gY29uc29sZS5sb2coYENvbXB1dGVyIFNjb3JlICR7Y29tcHV0ZXJTY29yZX1gKTtcclxuICAvLyBjb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWApO1xyXG4gIC8vIGNvbnNvbGUubG9nKGBQbGF5ZXIgU2VsZWN0ZWQgJHt1c2VySW5wdXR9YCk7XHJcbiAgLy8gY29uc29sZS5sb2coYENvbXB1dGVyIFNlbGVjdGVkICR7Y29tcHV0ZXJJbnB1dH1gKTtcclxuICAvLyBjb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWApO1xyXG4gIC8vIGNvbnNvbGUubG9nKHJvdW5kUGxheWVkKTtcclxuXHJcbiAgaWYgKHBsYXllclNjb3JlID09PSAxIHx8IGNvbXB1dGVyU2NvcmUgPT09IDEpIHtcclxuICAgIGZpbmFsU2NvcmUoKTtcclxuICAgIHJlc3RhcnRHYW1lKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlYWNoUm91bmRTY29yZSgpIHtcclxuICBjb21wdXRlcklucHV0ID0gY29tcHV0ZXJHdWVzcygpO1xyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGdhbWVQYXVzZS5jbGFzc0xpc3QuYWRkKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICAgIGdhbWVQYXVzZS50ZXh0Q29udGVudCA9IGBDb21wdXRlciBTZWxlY3RlZCAke2NhcGl0YWxMZXR0ZXIoY29tcHV0ZXJJbnB1dCl9YDtcclxuICB9LCAyMDAwKTtcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBnYW1lUGF1c2UuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcbiAgICBnYW1lUGF1c2UudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIH0sIDMyMDApO1xyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vIHNjb3JlIGJvcmRlciBoaWRlclxyXG4gICAgY3VycmVudEdhbWVTY29yZS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIGN1cnJlbnRHYW1lU2NvcmUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVCb3JkZXJcIik7XHJcbiAgICBjdXJyZW50R2FtZVNjb3JlLmNsYXNzTGlzdC5hZGQoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG5cclxuICAgIHJvdW5kTnVtYmVyLnRleHRDb250ZW50ID0gYFJvdW5kICR7cm91bmRQbGF5ZWR9IGA7XHJcbiAgICBjdXJyZW50R2FtZVNjb3JlLmFwcGVuZChyb3VuZE51bWJlcik7XHJcblxyXG4gICAgcm91bmRSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX3N0YXR1c1wiKTtcclxuICAgIHJvdW5kUmVzdWx0LnRleHRDb250ZW50ID0gYFJvdW5kIFN0YXR1cyA6ICR7Z2FtZUxvZ2ljKFxyXG4gICAgICB1c2VySW5wdXQsXHJcbiAgICAgIGNvbXB1dGVySW5wdXRcclxuICAgICl9IGA7XHJcbiAgICBjdXJyZW50R2FtZVNjb3JlLmFwcGVuZChyb3VuZFJlc3VsdCk7XHJcblxyXG4gICAgcm91bmREcmF3LmNsYXNzTGlzdC5hZGQoXCJnYW1lX19kZXRhaWxzX19kcmF3c1wiKTtcclxuICAgIHJvdW5kRHJhdy50ZXh0Q29udGVudCA9IGAgJHtjYXBpdGFsTGV0dGVyKHVzZXJJbnB1dCl9ICA6ICR7Y2FwaXRhbExldHRlcihcclxuICAgICAgY29tcHV0ZXJJbnB1dFxyXG4gICAgKX1gO1xyXG4gICAgY3VycmVudEdhbWVTY29yZS5hcHBlbmQocm91bmREcmF3KTtcclxuXHJcbiAgICByb3VuZFNjb3JlLmNsYXNzTGlzdC5hZGQoXCJnYW1lX19kZXRhaWxzX19lYWNoUm91bmRTY29yZVwiKTtcclxuICAgIHJvdW5kU2NvcmUudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJTY29yZX0gOiAke2NvbXB1dGVyU2NvcmV9YDtcclxuICAgIGN1cnJlbnRHYW1lU2NvcmUuYXBwZW5kKHJvdW5kU2NvcmUpO1xyXG4gICAgcm9ja0Fycm93QW5pbWF0ZS5jbGFzc0xpc3QuYWRkKFwidmVydC1tb3ZlXCIpO1xyXG4gICAgcGFwZXJBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LmFkZChcInZlcnQtbW92ZVwiKTtcclxuICAgIHNjaXNzb3JzQXJyb3dBbmltYXRlLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0LW1vdmVcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmF3QnV0dG9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGRyYXdCdXR0b25baV0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByb2NrQXJyb3dBbmltYXRlLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0LW1vdmVcIik7XHJcbiAgICBwYXBlckFycm93QW5pbWF0ZS5jbGFzc0xpc3QuYWRkKFwidmVydC1tb3ZlXCIpO1xyXG4gICAgc2Npc3NvcnNBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LmFkZChcInZlcnQtbW92ZVwiKTtcclxuICB9LCAzMzEwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluYWxTY29yZSgpIHtcclxuICByZXNldEdhbWVTY29yZS5hcHBlbmQoZW5kR2FtZVRleHQpO1xyXG4gIHJlc2V0R2FtZVNjb3JlLmFwcGVuZChlbmRHYW1lUmVzdWx0KTtcclxuICByZXNldEdhbWVTY29yZS5hcHBlbmQocmVzdGFydEdhbWVEaXYpO1xyXG5cclxuICBpZiAocGxheWVyU2NvcmUgPiBjb21wdXRlclNjb3JlKSB7XHJcbiAgICBlbmRHYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiSHVycmF5LCBZb3UgV29uICFcIjtcclxuICAgIGVuZEdhbWVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX3dpblwiKTtcclxuICAgIGVuZEdhbWVSZXN1bHQudGV4dENvbnRlbnQgPSBgU2VlbXMgbGlrZSB5b3UgYXJlIGEgR2lmdGVkIFRhbGVudC5gO1xyXG4gIH0gZWxzZSBpZiAocGxheWVyU2NvcmUgPT09IGNvbXB1dGVyU2NvcmUpIHtcclxuICAgIGVuZEdhbWVUZXh0LnRleHRDb250ZW50ID0gXCIgQSBEcmF3ICFcIjtcclxuICAgIGVuZEdhbWVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX2RyYXdcIik7XHJcbiAgICBlbmRHYW1lUmVzdWx0LnRleHRDb250ZW50ID0gYCBPaCBTbmFwLCBTZWVtcyBsaWtlIGEgdGllLmA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVuZEdhbWVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX2xvc3RcIik7XHJcbiAgICBlbmRHYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiWW91IExvc3QgIVwiO1xyXG4gICAgZW5kR2FtZVJlc3VsdC50ZXh0Q29udGVudCA9IGBHdWVzcyB0aGF0IHlvdSBhcmUgbm90IGV2ZW4gYmV0dGVyIHRoYW4gYSBCT1QuYDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xyXG4gIHJlc3RhcnRHYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJnYW1lX19kZXRhaWxzX19yZXN0YXJ0XCIpO1xyXG4gIC8vIHJlc3RhcnRHYW1lRGl2LmFwcGVuZChyZXN0YXJ0R2FtZUJ1dHRvbik7XHJcblxyXG4gIHNjb3JlTWVudS5jbGFzc0xpc3QuYWRkKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICBzY29yZU1lbnUuY2xhc3NMaXN0LmFkZChcImdhbWVPdmVyXCIpO1xyXG5cclxuICBnYW1lUGxheU1lbnUuaGlkZGVuID0gdHJ1ZTtcclxuICBjdXJyZW50R2FtZVNjb3JlLmhpZGRlbiA9IHRydWU7XHJcbiAgcmVzZXRHYW1lU2NvcmUuaGlkZGVuID0gZmFsc2U7XHJcblxyXG4gIHJlc2V0R2FtZVNjb3JlLmNsYXNzTGlzdC5hZGQoXCJyZXNldF9fYm9yZGVyXCIpO1xyXG4gIHJlc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJnYW1lX19kZXRhaWxzX19yZXN0YXJ0X19idXR0b25cIik7XHJcbiAgcmVzdGFydEdhbWVCdXR0b24udGV4dENvbnRlbnQgPSBgUmVzdGFydGA7XHJcbiAgcmVzdGFydEdhbWVEaXYuYXBwZW5kKHJlc3RhcnRHYW1lQnV0dG9uKTtcclxuXHJcbiAgcmVzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAvLyBhZGQgYXJyb3cgYW5pbWF0aW9uXHJcbiAgICByb2NrQXJyb3dBbmltYXRlLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0LW1vdmVcIik7XHJcbiAgICBwYXBlckFycm93QW5pbWF0ZS5jbGFzc0xpc3QuYWRkKFwidmVydC1tb3ZlXCIpO1xyXG4gICAgc2Npc3NvcnNBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LmFkZChcInZlcnQtbW92ZVwiKTtcclxuXHJcbiAgICAvLyBhZGQgYXJyb3cgdHJhbnNpdGlvblxyXG4gICAgcm9ja0Fycm93QW5pbWF0ZS5jbGFzc0xpc3QucmVtb3ZlKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICAgIHBhcGVyQXJyb3dBbmltYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG4gICAgc2Npc3NvcnNBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcblxyXG4gICAgcmVzZXRHYW1lU2NvcmUuaGlkZGVuID0gdHJ1ZTtcclxuICAgIGN1cnJlbnRHYW1lU2NvcmUuaGlkZGVuID0gZmFsc2U7XHJcbiAgICBnYW1lUGxheU1lbnUuaGlkZGVuID0gZmFsc2U7XHJcbiAgICBjdXJyZW50R2FtZVNjb3JlLmNsYXNzTGlzdC5hZGQoXCJoaWRlQm9yZGVyXCIpO1xyXG5cclxuICAgIGN1cnJlbnRHYW1lU2NvcmUuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcbiAgICBzY29yZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImdhbWVPdmVyXCIpO1xyXG4gICAgc2NvcmVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG4gICAgZ2FtZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcbiAgICByZXNldEdhbWVTY29yZS5jbGFzc0xpc3QucmVtb3ZlKFwicmVzZXRfX2JvcmRlclwiKTtcclxuXHJcbiAgICBwbGF5ZXJTY29yZSA9IDA7XHJcbiAgICBjb21wdXRlclNjb3JlID0gMDtcclxuICAgIHJvdW5kUGxheWVkID0gMDtcclxuICAgIHJvdW5kTnVtYmVyLnRleHRDb250ZW50ID0gXCJSb3VuZCBEZXRhaWxzXCI7XHJcbiAgICByb3VuZERyYXcudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgcm91bmRTY29yZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICByb3VuZFJlc3VsdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBlbmRHYW1lUmVzdWx0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9KTtcclxufVxyXG5cclxuLy8gYnRuLmZvckVhY2goZWFjaEJ0biA9PiB7XHJcbi8vICAgICBlYWNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4vLyAgICAgICAgIGlmIChwbGF5ZXJTY29yZSA9PT0gNSB8fCBjb21wdXRlclNjb3JlID09PSA1KSB7XHJcbi8vICAgICAgICAgICAgIGVhY2hCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgdXNlcklucHV0ID0gZWFjaEJ0bi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpOyAvLyBnaXZlcyB0aGUgbmFtZSBvZiB1c2VySW5wdXQvL2EgdmFyaWFibGUgdGhhdCBoYXMgbm90IGJlZW4gZGVjbGFyZWQsIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZWNvbWUgYSBHTE9CQUwgdmFyaWFibGUuXHJcbi8vICAgICAgICAgICAgIHBsYXlHYW1lKCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSlcclxuLy8gfSlcclxuXHJcbi8vIHJhbmRvbSBjb21wdXRlckd1ZXNzIGdlbmVyYXRvclxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbioge1xuICBjb2xvcjogI2E5OTI3ZDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgSXNvXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGtzY3JlZW5cIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiQWNtZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogXCJBa3JvbmltXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIkthbGFtXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNwZWN0cmFsXCIsIHNlcmlmO1xuICBib3JkZXItY29sb3I6ICNhOTkyN2Q7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMzNiO1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmI2YTU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuaDEge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgSXNvXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGtzY3JlZW5cIiwgY3Vyc2l2ZTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE0YTA4NTtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbi5zdGFydF9fYnV0dG9uIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjMzM2I7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIElzb1wiLCBjdXJzaXZlO1xuICBmb250LWZhbWlseTogXCJTaWxrc2NyZWVuXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMTRhMDg1O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uc3RhcnQge1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN0YXJ0X19idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICMxNGEwODU7XG59XG4uc3RhcnRfX2J1dHRvbiA+IGEge1xuICBmb250LWZhbWlseTogXCJSdWJpayBJc29cIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2lsa3NjcmVlblwiLCBjdXJzaXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc3RhcnRfX2J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzE0YTA4NTtcbn1cblxuLmdhbWVfX2Rlc2lnbl9fcmlnaHQsIC5nYW1lX19kZXNpZ25fX2xlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogNS41cHg7XG59XG5cbi5nYW1lX19oZWFkZXIge1xuICBmb250LXNpemU6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgSXNvXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGtzY3JlZW5cIiwgY3Vyc2l2ZTtcbn1cbi5nYW1lX19oZWFkZXIgPiBpbWcge1xuICBoZWlnaHQ6IDk1cHg7XG4gIHdpZHRoOiA5NXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTBlbSkge1xuICAuZ2FtZV9faGVhZGVyIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAuZ2FtZV9faGVhZGVyID4gaW1nIHtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuZ2FtZV9faGVhZGVyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgLmdhbWVfX2hlYWRlciA+IGltZyB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2hlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLmdhbWVfX2hlYWRlciA+IGltZyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuXG4uZ2FtZV9fZGVzaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTRhMDg1O1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5nYW1lX19kZXNpZ24gPiBpbWcge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBwYWRkaW5nOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLmdhbWVfX2Rlc2lnbiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmdhbWVfX2Rlc2lnbiA+IGltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLmdhbWVfX2Rlc2lnbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmdhbWVfX2Rlc2lnbiA+IGltZyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2Rlc2lnbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIC5nYW1lX19kZXNpZ24gPiBpbWcge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cblxuLmdhbWVfX2J1dHRvbl9fc3R5bGUge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMzMzYjtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgSXNvXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGtzY3JlZW5cIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGJvcmRlcjogMi41cHggc29saWQgIzE0YTA4NTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmdhbWVfX2Fycm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ2FtZV9fYnV0dG9uX19vdXRlcl9fcm9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdhbWVfX2J1dHRvbl9fb3V0ZXJfX3JvY2tfX2Fycm93IHtcbiAgbWF4LWhlaWdodDogOTBweDtcbiAgbWF4LXdpZHRoOiA5MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9fb3V0ZXJfX3JvY2tfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9fb3V0ZXJfX3JvY2tfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgIG1heC13aWR0aDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9fb3V0ZXJfX3JvY2tfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgIG1heC13aWR0aDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuLmdhbWVfX2J1dHRvbl9faW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5nYW1lX19idXR0b25fX2lubmVyX19wYXBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdhbWVfX2J1dHRvbl9faW5uZXJfX3BhcGVyX19hcnJvdyB7XG4gIG1heC1oZWlnaHQ6IDkwcHg7XG4gIG1heC13aWR0aDogOTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7XG4gIC5nYW1lX19idXR0b25fX2lubmVyX19wYXBlcl9fYXJyb3cge1xuICAgIG1heC1oZWlnaHQ6IDc1cHg7XG4gICAgbWF4LXdpZHRoOiA3NXB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19pbm5lcl9fcGFwZXJfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiA1NXB4O1xuICAgIG1heC13aWR0aDogNTVweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9faW5uZXJfX3BhcGVyX19hcnJvdyB7XG4gICAgbWF4LWhlaWdodDogMzVweDtcbiAgICBtYXgtd2lkdGg6IDM1cHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cbi5nYW1lX19idXR0b25fX2lubmVyX19zY2lzc29ycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdhbWVfX2J1dHRvbl9faW5uZXJfX3NjaXNzb3JzX19hcnJvdyB7XG4gIG1heC1oZWlnaHQ6IDkwcHg7XG4gIG1heC13aWR0aDogOTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7XG4gIC5nYW1lX19idXR0b25fX2lubmVyX19zY2lzc29yc19fYXJyb3cge1xuICAgIG1heC1oZWlnaHQ6IDc1cHg7XG4gICAgbWF4LXdpZHRoOiA3NXB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19pbm5lcl9fc2Npc3NvcnNfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiA1NXB4O1xuICAgIG1heC13aWR0aDogNTVweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9faW5uZXJfX3NjaXNzb3JzX19hcnJvdyB7XG4gICAgbWF4LWhlaWdodDogMzVweDtcbiAgICBtYXgtd2lkdGg6IDM1cHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cbi5nYW1lX19idXR0b25fX3N0eWxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjMTRhMDg1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi5nYW1lX19idXR0b25fX3N0eWxlOmFjdGl2ZSB7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7XG4gIC5nYW1lX19idXR0b25fX3N0eWxlIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9fc3R5bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9fc3R5bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5cbi5nYW1lX19kZXRhaWxzX19yZXN0YXJ0X19idXR0b24ge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMzMzYjtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgSXNvXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGtzY3JlZW5cIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICMxNGEwODU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5nYW1lX19kZXRhaWxzX19wYXVzZSB7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ2FtZV9fZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7XG4gIC5nYW1lX19kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuZ2FtZV9fZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gIC5nYW1lX19kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG4uZ2FtZV9fZGV0YWlsc19fc2NvcmVib2FyZCB7XG4gIGJvcmRlci10b3A6IDMuNXB4IHNvbGlkICNhMTg5NzY7XG4gIGJvcmRlci1ib3R0b206IDMuNXB4IHNvbGlkICNhMTg5NzY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ2FtZV9fZGV0YWlsc19fc2NvcmVib2FyZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuLmdhbWVfX2RldGFpbHNfX3JvdW5kIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxNGEwODU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5nYW1lX19kZXRhaWxzX19yZXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZ2FtZV9fZGV0YWlsc19fcmVzdGFydF9fYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjMTRhMDg1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi5nYW1lX19kZXRhaWxzX19yZXN0YXJ0X19idXR0b246YWN0aXZlIHtcbiAgdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZ2FtZV9fc2NvcmVfX2N1cnJlbnQge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5nYW1lT3ZlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgLyogdG9wOiAzMyU7ICovXG4gIC8qIGJvcmRlcjogMy41cHggc29saWQgI2ExODk3NjsgKi9cbiAgbGVmdDogMSU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMDtcbn1cblxuLnJlc2V0X19ib3JkZXIge1xuICBib3JkZXItdG9wOiAzLjVweCBzb2xpZCAjYTE4OTc2O1xuICBib3JkZXItYm90dG9tOiAzLjVweCBzb2xpZCAjYTE4OTc2O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uaGlkZUJvcmRlciB7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5tYWluVHJhbnNpdGlvbkluIHtcbiAgYW5pbWF0aW9uOiB0cmFuc2l0aW9uSW4gMC43NXM7XG59XG5cbkBrZXlmcmFtZXMgdHJhbnNpdGlvbkluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XG4gIH1cbn1cbi52ZXJ0LW1vdmUge1xuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICBhbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyBtb3ZlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvZ2xvYmFscy9fYm9pbGVycGxhdGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9zdGFydEJ0bi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL2hlYWRlckRlc2lnbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy91dGlsL2JyZWFrcG9pbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbXBvbmVudHMvZ2FtZUJ0bi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL3Njb3JlRGV0YWlsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEUUE7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDTEY7O0FEUUE7RUFHRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNB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XHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi8vICosXFxyXFxuLy8gKjo6YmVmb3JlLFxcclxcbi8vICo6OmFmdGVyIHtcXHJcXG4vLyAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuLy8gfVxcclxcblxcclxcbioge1xcclxcbiAgY29sb3I6ICNhOTkyN2Q7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrIElzb1xcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNpbGtzY3JlZW5cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBY21lXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWtyb25pbVxcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkthbGFtXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWxcXFwiLCBzZXJpZjtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2E5OTI3ZDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjMzM2I7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJiNmE1O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAvLyBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAycHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcclxcbiAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrIElzb1xcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNpbGtzY3JlZW5cXFwiLCBjdXJzaXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE0YTA4NTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXHJcXG59XFxyXFxuXCIsXCJAZm9yd2FyZCBcXFwiZ2xvYmFsc1xcXCI7XFxyXFxuQGZvcndhcmQgXFxcImNvbXBvbmVudHNcXFwiO1xcclxcblxcclxcbi5tYWluVHJhbnNpdGlvbkluIHtcXHJcXG4gIGFuaW1hdGlvbjogdHJhbnNpdGlvbkluIDAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRyYW5zaXRpb25JbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnZlcnQtbW92ZSB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbiAgYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxufVxcclxcbi8vIGltZy52ZXJ0LW1vdmUge1xcclxcbi8vICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcXHJcXG4vLyAgICAgYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xcclxcbi8vIH1cXHJcXG4vLyBALXdlYmtpdC1rZXlmcmFtZXMgbW92ZXIge1xcclxcbi8vICAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcclxcbi8vICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxcclxcbi8vIH1cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiJWJ1dHRvblN0eWxlIHtcXHJcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMzMzYjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWsgSXNvXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2lsa3NjcmVlblxcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkICMxNGEwODU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG4uc3RhcnQge1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgJl9fYnV0dG9uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjMTRhMDg1O1xcclxcbiAgICBAZXh0ZW5kICVidXR0b25TdHlsZTtcXHJcXG5cXHJcXG4gICAgJiA+IGEge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiUnViaWsgSXNvXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gICAgICBmb250LWZhbWlseTogXFxcIlNpbGtzY3JlZW5cXFwiLCBjdXJzaXZlO1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzE0YTA4NTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWwvXFxcIiBhcyB1bDtcXHJcXG5cXHJcXG5AbWl4aW4gaGVhZGVyU3R5bGUoJGhlaWdodCwgJHdpZHRoLCAkcGFkZGluZykge1xcclxcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgd2lkdGg6ICR3aWR0aDtcXHJcXG4gIHBhZGRpbmc6ICRwYWRkaW5nO1xcclxcbn1cXHJcXG4lZGVzaWduU3R5bGUge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMnB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbiAgbWFyZ2luLXRvcDogNS41cHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lX19oZWFkZXIge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxyXFxuICBib3JkZXItdG9wOiAzLjVweCBzb2xpZCAjYTE4OTc2O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWsgSXNvXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2lsa3NjcmVlblxcXCIsIGN1cnNpdmU7XFxyXFxuICAmID4gaW1nIHtcXHJcXG4gICAgQGluY2x1ZGUgaGVhZGVyU3R5bGUoOTVweCwgOTVweCwgNXB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQoeExhcmdlKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICAmID4gaW1nIHtcXHJcXG4gICAgICBAaW5jbHVkZSBoZWFkZXJTdHlsZSg2NXB4LCA2NXB4LCA1cHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1bC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgJiA+IGltZyB7XFxyXFxuICAgICAgQGluY2x1ZGUgaGVhZGVyU3R5bGUoNDVweCwgNDVweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgICYgPiBpbWcge1xcclxcbiAgICAgIEBpbmNsdWRlIGhlYWRlclN0eWxlKDI1cHgsIDI1cHgsIDVweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX2Rlc2lnbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxNGEwODU7XFxyXFxuICBtYXJnaW4tbGVmdDogN3B4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxyXFxuICAmID4gaW1nIHtcXHJcXG4gICAgQGluY2x1ZGUgaGVhZGVyU3R5bGUoNDVweCwgNDVweCwgMCk7XFxyXFxuICB9XFxyXFxuICAmX19sZWZ0IHtcXHJcXG4gICAgQGV4dGVuZCAlZGVzaWduU3R5bGU7XFxyXFxuICB9XFxyXFxuICAmX19yaWdodCB7XFxyXFxuICAgIEBleHRlbmQgJWRlc2lnblN0eWxlO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICYgPiBpbWcge1xcclxcbiAgICAgIEBpbmNsdWRlIGhlYWRlclN0eWxlKDMwcHgsIDMwcHgsIDVweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICYgPiBpbWcge1xcclxcbiAgICAgIEBpbmNsdWRlIGhlYWRlclN0eWxlKDI1cHgsIDI1cHgsIDVweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgJiA+IGltZyB7XFxyXFxuICAgICAgQGluY2x1ZGUgaGVhZGVyU3R5bGUoMjBweCwgMjBweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIiRicmVha3BvaW50cy11cDogKFxcclxcbiAgXFxcIm1lZGl1bVxcXCI6IDQzLjc1ZW0sXFxyXFxuICBcXFwibGFyZ2VcXFwiOiA1Ni4yNWVtLFxcclxcbiAgXFxcInhMYXJnZVxcXCI6IDkwZW0sXFxyXFxuKTtcXHJcXG5cXHJcXG5AbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSkge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLXVwLCRzaXplKSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsL1xcXCIgYXMgdWw7XFxyXFxuXFxyXFxuJWJ1dHRvblN0eWxlIHtcXHJcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMzMzYjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWsgSXNvXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2lsa3NjcmVlblxcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgIzE0YTA4NTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBidXR0b25Qb3NpdGlvbigkZmxleCwgJGp1c3RpZnkpIHtcXHJcXG4gIGRpc3BsYXk6ICRmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX2Fycm93IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX2J1dHRvbiB7XFxyXFxuICAmX19vdXRlciB7XFxyXFxuICAgICZfX3JvY2sge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICZfX2Fycm93IHtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDkwcHg7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDkwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQoeExhcmdlKSB7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogNzBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogNDBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9faW5uZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgJl9fcGFwZXIge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICZfX2Fycm93IHtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDkwcHg7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDkwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQoeExhcmdlKSB7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDc1cHg7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogNzVweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1NXB4O1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDU1cHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDM1cHg7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogMzVweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmX19zY2lzc29ycyB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgJl9fYXJyb3cge1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogOTBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogNzVweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA3NXB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSB1bC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDU1cHg7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogNTVweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogMzVweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNXB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19zdHlsZSB7XFxyXFxuICAgIEBleHRlbmQgJWJ1dHRvblN0eWxlO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzE0YTA4NTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgdG9wOiAxMHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSB1bC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsL1xcXCIgYXMgdWw7XFxyXFxuJWJ1dHRvblN0eWxlIHtcXHJcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMzMzYjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWsgSXNvXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2lsa3NjcmVlblxcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkICMxNGEwODU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fZGV0YWlsc19fcGF1c2Uge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1bC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbiAgJl9fc2NvcmVib2FyZCB7XFxyXFxuICAgIGJvcmRlci10b3A6IDMuNXB4IHNvbGlkICNhMTg5NzY7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDMuNXB4IHNvbGlkICNhMTg5NzY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fcm91bmQge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE0YTA4NTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgfVxcclxcbiAgJl9fcmVzdGFydCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAmX19idXR0b24ge1xcclxcbiAgICAgIEBleHRlbmQgJWJ1dHRvblN0eWxlO1xcclxcbiAgICAgIC8vIG1hcmdpbjogMjBweDtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICMxNGEwODU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgdG9wOiAxMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX3Njb3JlX19jdXJyZW50IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lT3ZlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcclxcbiAgLyogdG9wOiAzMyU7ICovXFxyXFxuICAvKiBib3JkZXI6IDMuNXB4IHNvbGlkICNhMTg5NzY7ICovXFxyXFxuICBsZWZ0OiAxJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXRfX2JvcmRlciB7XFxyXFxuICBib3JkZXItdG9wOiAzLjVweCBzb2xpZCAjYTE4OTc2O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMy41cHggc29saWQgI2ExODk3NjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZUJvcmRlciB7XFxyXFxuICBib3JkZXItdG9wOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiY2FwaXRhbExldHRlciIsInN0ciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjb21wdXRlckd1ZXNzIiwicmFuZG9tVmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwidXNlcklucHV0IiwiY29tcHV0ZXJJbnB1dCIsInBsYXllclNjb3JlIiwiY29tcHV0ZXJTY29yZSIsInJvdW5kUGxheWVkIiwiZ2FtZVBsYXlNZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2NvcmVNZW51Iiwic3RhcnRNZW51IiwiZ2FtZUNvbnRlbnQiLCJkcmF3QnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRHYW1lU2NvcmUiLCJnYW1lUGF1c2UiLCJyZXNldEdhbWVTY29yZSIsInJvY2tBcnJvd0FuaW1hdGUiLCJwYXBlckFycm93QW5pbWF0ZSIsInNjaXNzb3JzQXJyb3dBbmltYXRlIiwicm91bmROdW1iZXIiLCJyb3VuZERyYXciLCJjcmVhdGVFbGVtZW50Iiwicm91bmRSZXN1bHQiLCJyb3VuZFNjb3JlIiwiZW5kR2FtZVRleHQiLCJlbmRHYW1lUmVzdWx0Iiwic3RhcnRHYW1lQnV0dG9uIiwicmVzdGFydEdhbWVCdXR0b24iLCJyZXN0YXJ0R2FtZURpdiIsImhpZGRlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xhc3NMaXN0IiwiYWRkIiwiZWFjaEJ0biIsInJlbW92ZSIsImRpc2FibGVkIiwidGV4dENvbnRlbnQiLCJ0b0xvd2VyQ2FzZSIsImkiLCJzZXRUaW1lb3V0IiwicGxheUdhbWUiLCJnYW1lTG9naWMiLCJwbGF5ZXJEcmF3IiwiY29tcHV0ZXJEcmF3IiwiZWFjaFJvdW5kU2NvcmUiLCJmaW5hbFNjb3JlIiwicmVzdGFydEdhbWUiLCJhcHBlbmQiXSwic291cmNlUm9vdCI6IiJ9