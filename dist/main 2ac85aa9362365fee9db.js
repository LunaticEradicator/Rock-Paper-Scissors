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

const randomValue = ["rock", "paper", "scissors"];
function computerGuess() {
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
const rockArrowAnimate = document.querySelector(".game__button__outer__rock__arrow");
const paperArrowAnimate = document.querySelector(".game__button__inner__paper__arrow");
const scissorsArrowAnimate = document.querySelector(".game__button__inner__scissors__arrow");

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
function disableAllBtn(booleanValue, opacityValue, cursorValue) {
  for (let i = 0; i < drawButton.length; i++) {
    drawButton[i].disabled = booleanValue;
    drawButton[i].style.opacity = opacityValue;
    drawButton[i].style.cursor = cursorValue;
  }
}

// When user press a button playGame
for (let eachBtn of drawButton) {
  eachBtn.addEventListener("click", e => {
    // remove arrow animation
    rockArrowAnimate.classList.remove("vert-move");
    paperArrowAnimate.classList.remove("vert-move");
    scissorsArrowAnimate.classList.remove("vert-move");
    if (playerScore === roundNeeded || computerScore === roundNeeded) {
      eachBtn.disabled = true;
    } else {
      userInput = eachBtn.textContent.toLowerCase(); // gives the name of userInput
      computerInput = (0,_computerGuess__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
  if (playerDraw === "rock" && computerDraw === "rock" || playerDraw === "paper" && computerDraw === "paper" || playerDraw === "scissors" && computerDraw === "scissors") {
    return "Draw";
  } else if (playerDraw === "rock" && computerDraw === "paper" || playerDraw === "paper" && computerDraw === "scissors" || playerDraw === "scissors" && computerDraw === "rock") {
    computerScore++;
    return "Computer";
  } else if (playerDraw === "rock" && computerDraw === "scissors" || playerDraw === "paper" && computerDraw === "rock" || playerDraw === "scissors" && computerDraw === "paper") {
    playerScore++;
    return "Player";
  } else {
    return "Please enter a correct value from the option given : Rock | Paper | Scissors";
  }
}
function playGame() {
  gameContent.classList.remove("mainTransitionIn");
  roundPlayed++;
  if (roundPlayed > 1 && playerScore !== roundNeeded || computerScore !== roundNeeded) {
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
    gamePause.textContent = `Computer Selected ${(0,_capitalizeLetter__WEBPACK_IMPORTED_MODULE_2__["default"])(computerInput)}`;
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
  roundDraw.textContent = ` ${(0,_capitalizeLetter__WEBPACK_IMPORTED_MODULE_2__["default"])(userInput)}  : ${(0,_capitalizeLetter__WEBPACK_IMPORTED_MODULE_2__["default"])(computerInput)}`;
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Caprasimo&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --font-header: "Caprasimo", cursive;
  --font-body: "Roboto Slab", serif;
}

html {
  box-sizing: border-box;
  font-size: 100%;
  min-width: 100vw;
  min-height: 100vh;
}

* {
  color: #a9927d;
  font-family: var(--font-body);
  letter-spacing: 4px;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.start__button {
  background-color: #000000;
  box-shadow: 0px 0px 15px 0px #14a085;
  padding: 10px;
}
.start__button > a {
  font-family: var(--font-header);
  text-decoration: none;
}
.start__button:hover {
  background-color: #ffffff;
  box-shadow: 0px 0px 15px 0px #14a085;
  transform: translateY(4px);
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
  font-family: var(--font-header);
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
  font-family: var(--font-header);
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
  font-size: 3rem;
  border: 2.5px solid #14a085;
  border-radius: 20px;
}

.game__details {
  display: flex;
  justify-content: center;
  padding-top: 5px;
  text-align: center;
  font-size: 2.3rem;
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
.game__details__pause {
  transition: all 1s;
}

.game__score__current {
  padding-top: 10px;
  padding-bottom: 10px;
}

.gameOver {
  display: grid;
  place-items: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
  border-radius: 20px;
  padding: 0px;
  margin: 0 auto;
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
}`, "",{"version":3,"sources":["webpack://./src/sass/util/fonts.scss","webpack://./src/sass/style.scss","webpack://./src/sass/globals/_boilerplate.scss","webpack://./src/sass/components/startBtn.scss","webpack://./src/sass/components/headerDesign.scss","webpack://./src/sass/util/breakpoints.scss","webpack://./src/sass/components/gameBtn.scss","webpack://./src/sass/components/scoreDetail.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Caprasimo&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap\");\r\n:root {\r\n  --font-header: \"Caprasimo\", cursive;\r\n  --font-body: \"Roboto Slab\", serif;\r\n  //   --font-body: \"Prompt\", sans-serif;\r\n}\r\n","@forward \"globals\";\r\n@forward \"components\";\r\n\r\n.mainTransitionIn {\r\n  animation: transitionIn 0.75s;\r\n}\r\n\r\n@keyframes transitionIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: rotateX(-10deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: rotateX(0);\r\n  }\r\n}\r\n\r\n.vert-move {\r\n  -webkit-animation: mover 1s infinite alternate;\r\n  animation: mover 1s infinite alternate;\r\n}\r\n\r\n@keyframes mover {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    transform: translateY(-10px);\r\n  }\r\n}\r\n\r\n// img.vert-move {\r\n//     -webkit-animation: mover 1s infinite  alternate;\r\n//     animation: mover 1s infinite  alternate;\r\n// }\r\n// @-webkit-keyframes mover {\r\n//     0% { transform: translateY(0); }\r\n//     100% { transform: translateY(-10px); }\r\n// }\r\n","@use \"../util/\" as ut;\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n}\r\n\r\n// *,\r\n// *::before,\r\n// *::after {\r\n//   box-sizing: inherit;\r\n// }\r\n\r\n* {\r\n  color: #a9927d;\r\n  font-family: var(--font-body);\r\n  letter-spacing: 4px;\r\n  border-color: #a9927d;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: #22333b;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  background-color: #c2b6a5;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\nh1 {\r\n  // display: flex;\r\n  // justify-content: center;\r\n  margin-top: 2px;\r\n  text-align: center;\r\n  border-radius: 11px;\r\n  border-top: 3.5px solid #a18976;\r\n  border-radius: 50px;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n}\r\n\r\nh2 {\r\n  font-size: 30px;\r\n  text-align: center;\r\n  border-radius: 7px;\r\n  border-bottom: 2px solid #14a085;\r\n  margin-left: 7px;\r\n  margin-right: 7px;\r\n}\r\n","@use \"../util/\" as ut;\r\n\r\n%buttonStyle {\r\n  padding: 0px 10px;\r\n  background-color: #22333b;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  font-size: 3rem;\r\n  border: 2.5px solid #14a085;\r\n  border-radius: 20px;\r\n}\r\n.start {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n\r\n  &__button {\r\n    background-color: #000000;\r\n    box-shadow: 0px 0px 15px 0px #14a085;\r\n    @extend %buttonStyle;\r\n    padding: 10px;\r\n\r\n    & > a {\r\n      font-family: var(--font-header);\r\n      text-decoration: none;\r\n    }\r\n    &:hover {\r\n      background-color: #ffffff;\r\n      box-shadow: 0px 0px 15px 0px #14a085;\r\n      transform: translateY(4px);\r\n    }\r\n  }\r\n}\r\n","@use \"../util/\" as ut;\r\n// @import url(\"https://fonts.googleapis.com/css2?family=Caprasimo&display=swap\");\r\n\r\n@mixin headerStyle($height, $width, $padding) {\r\n  height: $height;\r\n  width: $width;\r\n  padding: $padding;\r\n}\r\n%designStyle {\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n  padding-top: 2px;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  margin-top: 5.5px;\r\n}\r\n\r\n.game__header {\r\n  font-size: 3rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  text-align: center;\r\n  border-radius: 11px;\r\n  border-top: 3.5px solid #a18976;\r\n  border-radius: 50px;\r\n  font-family: var(--font-header);\r\n\r\n  & > img {\r\n    @include headerStyle(95px, 95px, 5px);\r\n  }\r\n\r\n  @include ut.breakpoint(xLarge) {\r\n    font-size: 2.5rem;\r\n    & > img {\r\n      @include headerStyle(65px, 65px, 5px);\r\n    }\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    font-size: 2rem;\r\n    & > img {\r\n      @include headerStyle(45px, 45px, 5px);\r\n    }\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 1.3rem;\r\n    & > img {\r\n      @include headerStyle(25px, 25px, 5px);\r\n    }\r\n  }\r\n}\r\n\r\n.game__design {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  border-radius: 7px;\r\n  border-bottom: 2px solid #14a085;\r\n  margin-left: 7px;\r\n  margin-right: 7px;\r\n  & > img {\r\n    @include headerStyle(45px, 45px, 0);\r\n  }\r\n  &__left {\r\n    @extend %designStyle;\r\n  }\r\n  &__right {\r\n    @extend %designStyle;\r\n  }\r\n\r\n  @include ut.breakpoint(xLarge) {\r\n    font-size: 1.5rem;\r\n    & > img {\r\n      @include headerStyle(30px, 30px, 5px);\r\n    }\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    font-size: 1.2rem;\r\n    & > img {\r\n      @include headerStyle(25px, 25px, 5px);\r\n    }\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 1rem;\r\n    & > img {\r\n      @include headerStyle(20px, 20px, 5px);\r\n    }\r\n  }\r\n}\r\n","$breakpoints-up: (\r\n  \"medium\": 43.75em,\r\n  \"large\": 56.25em,\r\n  \"xLarge\": 90em,\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n  @media (max-width: map-get($breakpoints-up,$size)) {\r\n    @content;\r\n  }\r\n}\r\n","@use \"../util/\" as ul;\r\n\r\n%buttonStyle {\r\n  padding: 0px 10px;\r\n  background-color: #22333b;\r\n  font-family: var(--font-header);\r\n  font-size: 3.5rem;\r\n  border: 2.5px solid #14a085;\r\n  border-radius: 20px;\r\n}\r\n\r\n@mixin buttonPosition($flex, $justify) {\r\n  display: $flex;\r\n  justify-content: $justify;\r\n}\r\n\r\n.game__arrow {\r\n  text-align: center;\r\n}\r\n\r\n.game__button {\r\n  &__outer {\r\n    &__rock {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      &__arrow {\r\n        max-height: 90px;\r\n        max-width: 90px;\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n        @include ul.breakpoint(xLarge) {\r\n          max-height: 70px;\r\n          max-width: 70px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(large) {\r\n          max-height: 50px;\r\n          max-width: 50px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(medium) {\r\n          max-height: 40px;\r\n          max-width: 40px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &__inner {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    &__paper {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      &__arrow {\r\n        max-height: 90px;\r\n        max-width: 90px;\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n        @include ul.breakpoint(xLarge) {\r\n          max-height: 75px;\r\n          max-width: 75px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(large) {\r\n          max-height: 55px;\r\n          max-width: 55px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(medium) {\r\n          max-height: 35px;\r\n          max-width: 35px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n      }\r\n    }\r\n    &__scissors {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      &__arrow {\r\n        max-height: 90px;\r\n        max-width: 90px;\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n        @include ul.breakpoint(xLarge) {\r\n          max-height: 75px;\r\n          max-width: 75px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(large) {\r\n          max-height: 55px;\r\n          max-width: 55px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(medium) {\r\n          max-height: 35px;\r\n          max-width: 35px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &__style {\r\n    @extend %buttonStyle;\r\n    &:hover {\r\n      background-color: #000000;\r\n      box-shadow: 0px 0px 15px 0px #14a085;\r\n      transform: translateY(4px);\r\n    }\r\n    &:active {\r\n      top: 10px;\r\n      background-color: #ffffff;\r\n    }\r\n    @include ul.breakpoint(xLarge) {\r\n      font-size: 2.5rem;\r\n    }\r\n    @include ul.breakpoint(large) {\r\n      font-size: 2rem;\r\n    }\r\n    @include ul.breakpoint(medium) {\r\n      font-size: 1.5rem;\r\n    }\r\n  }\r\n}\r\n","@use \"../util/\" as ul;\r\n%buttonStyle {\r\n  padding: 0px 10px;\r\n  background-color: #22333b;\r\n  // font-family: \"Rubik Iso\", cursive;\r\n  // font-family: \"Silkscreen\", cursive;\r\n  font-size: 3rem;\r\n  border: 2.5px solid #14a085;\r\n  border-radius: 20px;\r\n}\r\n\r\n.game__details {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 5px;\r\n  text-align: center;\r\n  font-size: 2.3rem;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n  margin-top: 20px;\r\n  @include ul.breakpoint(xLarge) {\r\n    margin-top: 40px;\r\n    font-size: 2.2rem;\r\n  }\r\n  @include ul.breakpoint(large) {\r\n    margin-top: 40px;\r\n    font-size: 2rem;\r\n  }\r\n  @include ul.breakpoint(medium) {\r\n    margin-top: 40px;\r\n    font-size: 1.5rem;\r\n  }\r\n  &__scoreboard {\r\n    border-top: 3.5px solid #a18976;\r\n    border-bottom: 3.5px solid #a18976;\r\n    border-radius: 50px;\r\n    padding: 20px;\r\n  }\r\n  &__round {\r\n    border-bottom: 2px solid #14a085;\r\n    border-radius: 7px;\r\n  }\r\n  &__restart {\r\n    display: flex;\r\n    justify-content: center;\r\n    &__button {\r\n      @extend %buttonStyle;\r\n      // margin: 20px;\r\n      &:hover {\r\n        background-color: #000000;\r\n        box-shadow: 0px 0px 15px 0px #14a085;\r\n        transform: translateY(4px);\r\n      }\r\n      &:active {\r\n        top: 10px;\r\n        background-color: #ffffff;\r\n      }\r\n    }\r\n  }\r\n  &__pause {\r\n    transition: all 1s;\r\n    // color: white;\r\n  }\r\n}\r\n\r\n.game__score__current {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.gameOver {\r\n  display: grid;\r\n  place-items: center;\r\n  align-content: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  border-radius: 20px;\r\n  padding: 0px;\r\n  margin: 0 auto;\r\n  border: 0;\r\n}\r\n\r\n.reset__border {\r\n  border-top: 3.5px solid #a18976;\r\n  border-bottom: 3.5px solid #a18976;\r\n  padding: 20px;\r\n  border-radius: 50px;\r\n}\r\n\r\n.hideBorder {\r\n  border-top: 0;\r\n  border-bottom: 0;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saWFBQWlhLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxhQUFhLGNBQWMsY0FBYyxPQUFPLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxhQUFhLGNBQWMsY0FBYyxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLGFBQWEsY0FBYyxjQUFjLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sYUFBYSxjQUFjLGNBQWMsT0FBTyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLGFBQWEsY0FBYyxjQUFjLE9BQU8sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLGFBQWEsY0FBYyxjQUFjLE9BQU8sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sYUFBYSxjQUFjLGNBQWMsT0FBTyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxhQUFhLGNBQWMsY0FBYyxPQUFPLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcs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QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9zcmMvY2FwaXRhbGl6ZUxldHRlci5qcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vc3JjL2NvbXB1dGVyR3Vlc3MuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vc3JjL3Nhc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/NGQzNyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRvIENhcGl0YWxpemUgdGhlIGxldHRlclxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsTGV0dGVyKHN0cikge1xyXG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcbn1cclxuIiwiLy8gaW1wb3J0IHsgY2FtZWxDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG4vLyBpbXBvcnQgaWNvbiBmcm9tIFwiLi9hc3NldHMvQXJyb3dEb3duLnBuZ1wiO1xyXG5cclxuY29uc3QgcmFuZG9tVmFsdWUgPSBbXCJyb2NrXCIsIFwicGFwZXJcIiwgXCJzY2lzc29yc1wiXTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZXJHdWVzcygpIHtcclxuICBsZXQgY29tcHV0ZXJHdWVzcyA9XHJcbiAgICByYW5kb21WYWx1ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5kb21WYWx1ZS5sZW5ndGgpXTtcclxuICBjb25zb2xlLmxvZyhjb21wdXRlckd1ZXNzKTtcclxuICByZXR1cm4gY29tcHV0ZXJHdWVzcztcclxufVxyXG4iLCJpbXBvcnQgXCIuL3Nhc3Mvc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgY29tcHV0ZXJHdWVzcyBmcm9tIFwiLi9jb21wdXRlckd1ZXNzXCI7XHJcbmltcG9ydCBjYXBpdGFsTGV0dGVyIGZyb20gXCIuL2NhcGl0YWxpemVMZXR0ZXJcIjtcclxuXHJcbmxldCB1c2VySW5wdXQ7XHJcbmxldCBjb21wdXRlcklucHV0O1xyXG5cclxuLy8gU2NvcmVcclxubGV0IHBsYXllclNjb3JlID0gMDtcclxubGV0IGNvbXB1dGVyU2NvcmUgPSAwO1xyXG5sZXQgcm91bmRQbGF5ZWQgPSAwO1xyXG5sZXQgcm91bmROZWVkZWQgPSA1O1xyXG5cclxuLy9NZW51XHJcbmNvbnN0IGdhbWVQbGF5TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZV9fbWVudVwiKTtcclxuY29uc3Qgc2NvcmVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lX19kZXRhaWxzXCIpO1xyXG5sZXQgc3RhcnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydFwiKTtcclxuXHJcbi8vIEhUTUwgRWxlbWVudCBTZWxlY3Rpb24gLy9cclxuY29uc3QgZ2FtZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVcIik7XHJcbmNvbnN0IGRyYXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWVfX2J1dHRvbl9fc3R5bGVcIik7XHJcbmNvbnN0IGN1cnJlbnRHYW1lU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVfX2RldGFpbHNfX3Njb3JlYm9hcmRcIik7XHJcbmNvbnN0IGdhbWVQYXVzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZV9fZGV0YWlsc19fcGF1c2VcIik7XHJcbmNvbnN0IHJlc2V0R2FtZVNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lX19kZXRhaWxzX19yZXNldFwiKTtcclxuXHJcbmNvbnN0IHJvY2tBcnJvd0FuaW1hdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLmdhbWVfX2J1dHRvbl9fb3V0ZXJfX3JvY2tfX2Fycm93XCJcclxuKTtcclxuY29uc3QgcGFwZXJBcnJvd0FuaW1hdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLmdhbWVfX2J1dHRvbl9faW5uZXJfX3BhcGVyX19hcnJvd1wiXHJcbik7XHJcbmNvbnN0IHNjaXNzb3JzQXJyb3dBbmltYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5nYW1lX19idXR0b25fX2lubmVyX19zY2lzc29yc19fYXJyb3dcIlxyXG4pO1xyXG5cclxuLy9lYWNoUm91bmQgRE9NLy9cclxubGV0IHJvdW5kTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lX19kZXRhaWxzX19yb3VuZFwiKTtcclxubGV0IHJvdW5kRHJhdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmxldCByb3VuZFJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmxldCByb3VuZFNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubGV0IHJvdW5kUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbi8vZW5kUm91bmQgRE9NLy9cclxubGV0IGVuZEdhbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubGV0IGVuZEdhbWVSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxubGV0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRfX2J1dHRvblwiKTtcclxubGV0IHJlc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxubGV0IHJlc3RhcnRHYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnN0YXJ0TWVudS5oaWRkZW4gPSBmYWxzZTtcclxuZ2FtZVBsYXlNZW51LmhpZGRlbiA9IHRydWU7XHJcbmdhbWVDb250ZW50LmhpZGRlbiA9IHRydWU7XHJcbmN1cnJlbnRHYW1lU2NvcmUuaGlkZGVuID0gdHJ1ZTtcclxuXHJcbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAvLyBhZGQgYXJyb3cgYW5pbWF0aW9uXHJcbiAgcm9ja0Fycm93QW5pbWF0ZS5jbGFzc0xpc3QuYWRkKFwidmVydC1tb3ZlXCIpO1xyXG4gIHBhcGVyQXJyb3dBbmltYXRlLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0LW1vdmVcIik7XHJcbiAgc2Npc3NvcnNBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LmFkZChcInZlcnQtbW92ZVwiKTtcclxuXHJcbiAgc3RhcnRNZW51LmhpZGRlbiA9IHRydWU7XHJcbiAgZ2FtZVBsYXlNZW51LmhpZGRlbiA9IGZhbHNlO1xyXG4gIGdhbWVDb250ZW50LmhpZGRlbiA9IGZhbHNlO1xyXG4gIGdhbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGRpc2FibGVBbGxCdG4oYm9vbGVhblZhbHVlLCBvcGFjaXR5VmFsdWUsIGN1cnNvclZhbHVlKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmF3QnV0dG9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBkcmF3QnV0dG9uW2ldLmRpc2FibGVkID0gYm9vbGVhblZhbHVlO1xyXG4gICAgZHJhd0J1dHRvbltpXS5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eVZhbHVlO1xyXG4gICAgZHJhd0J1dHRvbltpXS5zdHlsZS5jdXJzb3IgPSBjdXJzb3JWYWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFdoZW4gdXNlciBwcmVzcyBhIGJ1dHRvbiBwbGF5R2FtZVxyXG5mb3IgKGxldCBlYWNoQnRuIG9mIGRyYXdCdXR0b24pIHtcclxuICBlYWNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgLy8gcmVtb3ZlIGFycm93IGFuaW1hdGlvblxyXG4gICAgcm9ja0Fycm93QW5pbWF0ZS5jbGFzc0xpc3QucmVtb3ZlKFwidmVydC1tb3ZlXCIpO1xyXG4gICAgcGFwZXJBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LnJlbW92ZShcInZlcnQtbW92ZVwiKTtcclxuICAgIHNjaXNzb3JzQXJyb3dBbmltYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJ2ZXJ0LW1vdmVcIik7XHJcblxyXG4gICAgaWYgKHBsYXllclNjb3JlID09PSByb3VuZE5lZWRlZCB8fCBjb21wdXRlclNjb3JlID09PSByb3VuZE5lZWRlZCkge1xyXG4gICAgICBlYWNoQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVzZXJJbnB1dCA9IGVhY2hCdG4udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTsgLy8gZ2l2ZXMgdGhlIG5hbWUgb2YgdXNlcklucHV0XHJcbiAgICAgIGNvbXB1dGVySW5wdXQgPSBjb21wdXRlckd1ZXNzKCk7XHJcblxyXG4gICAgICBkaXNhYmxlQWxsQnRuKHRydWUsIFwiIDAuM1wiLCBcIm5vdC1hbGxvd2VkXCIpO1xyXG4gICAgICAvLyBnYW1lUGF1c2UudGV4dENvbnRlbnQgPSBgV2FpdGluZyBmb3IgQ29tcHV0ZXIgRHJhd2A7XHJcbiAgICAgIC8vIGdhbWVQYXVzZS5jbGFzc0xpc3QuYWRkKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gZ2FtZVBhdXNlLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG4gICAgICAgIHJvY2tBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcbiAgICAgICAgcGFwZXJBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcbiAgICAgICAgc2Npc3NvcnNBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgICBwbGF5R2FtZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0byBwbGF5IGEgc2luZ2xlIHJvdW5kXHJcbmZ1bmN0aW9uIGdhbWVMb2dpYyhwbGF5ZXJEcmF3LCBjb21wdXRlckRyYXcpIHtcclxuICBpZiAoXHJcbiAgICAocGxheWVyRHJhdyA9PT0gXCJyb2NrXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInJvY2tcIikgfHxcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInBhcGVyXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInBhcGVyXCIpIHx8XHJcbiAgICAocGxheWVyRHJhdyA9PT0gXCJzY2lzc29yc1wiICYmIGNvbXB1dGVyRHJhdyA9PT0gXCJzY2lzc29yc1wiKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIFwiRHJhd1wiO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICAocGxheWVyRHJhdyA9PT0gXCJyb2NrXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInBhcGVyXCIpIHx8XHJcbiAgICAocGxheWVyRHJhdyA9PT0gXCJwYXBlclwiICYmIGNvbXB1dGVyRHJhdyA9PT0gXCJzY2lzc29yc1wiKSB8fFxyXG4gICAgKHBsYXllckRyYXcgPT09IFwic2Npc3NvcnNcIiAmJiBjb21wdXRlckRyYXcgPT09IFwicm9ja1wiKVxyXG4gICkge1xyXG4gICAgY29tcHV0ZXJTY29yZSsrO1xyXG4gICAgcmV0dXJuIFwiQ29tcHV0ZXJcIjtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgKHBsYXllckRyYXcgPT09IFwicm9ja1wiICYmIGNvbXB1dGVyRHJhdyA9PT0gXCJzY2lzc29yc1wiKSB8fFxyXG4gICAgKHBsYXllckRyYXcgPT09IFwicGFwZXJcIiAmJiBjb21wdXRlckRyYXcgPT09IFwicm9ja1wiKSB8fFxyXG4gICAgKHBsYXllckRyYXcgPT09IFwic2Npc3NvcnNcIiAmJiBjb21wdXRlckRyYXcgPT09IFwicGFwZXJcIilcclxuICApIHtcclxuICAgIHBsYXllclNjb3JlKys7XHJcbiAgICByZXR1cm4gXCJQbGF5ZXJcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiUGxlYXNlIGVudGVyIGEgY29ycmVjdCB2YWx1ZSBmcm9tIHRoZSBvcHRpb24gZ2l2ZW4gOiBSb2NrIHwgUGFwZXIgfCBTY2lzc29yc1wiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGxheUdhbWUoKSB7XHJcbiAgZ2FtZUNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcbiAgcm91bmRQbGF5ZWQrKztcclxuICBpZiAoXHJcbiAgICAocm91bmRQbGF5ZWQgPiAxICYmIHBsYXllclNjb3JlICE9PSByb3VuZE5lZWRlZCkgfHxcclxuICAgIGNvbXB1dGVyU2NvcmUgIT09IHJvdW5kTmVlZGVkXHJcbiAgKSB7XHJcbiAgICBzdGFydE1lbnUuaGlkZGVuID0gdHJ1ZTtcclxuICAgIGdhbWVQbGF5TWVudS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIGdhbWVDb250ZW50LmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgY3VycmVudEdhbWVTY29yZS5oaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxuICBlYWNoUm91bmQoKTtcclxuICBnYW1lQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuXHJcbiAgY29uc29sZS5sb2coYFBsYXllciAgU2NvcmUgJHtwbGF5ZXJTY29yZX1gKTtcclxuICBjb25zb2xlLmxvZyhgQ29tcHV0ZXIgU2NvcmUgJHtjb21wdXRlclNjb3JlfWApO1xyXG4gIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYCk7XHJcbiAgY29uc29sZS5sb2coYFBsYXllciBTZWxlY3RlZCAke3VzZXJJbnB1dH1gKTtcclxuICBjb25zb2xlLmxvZyhgQ29tcHV0ZXIgU2VsZWN0ZWQgJHtjb21wdXRlcklucHV0fWApO1xyXG4gIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYCk7XHJcbiAgY29uc29sZS5sb2cocm91bmRQbGF5ZWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYWNoUm91bmQoKSB7XHJcbiAgcm91bmRTY29yZTtcclxuICBjb25zdCBsb2dpYyA9IGdhbWVMb2dpYyh1c2VySW5wdXQsIGNvbXB1dGVySW5wdXQpO1xyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGdhbWVQYXVzZS5jbGFzc0xpc3QuYWRkKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICAgIGdhbWVQYXVzZS50ZXh0Q29udGVudCA9IGBDb21wdXRlciBTZWxlY3RlZCAke2NhcGl0YWxMZXR0ZXIoY29tcHV0ZXJJbnB1dCl9YDtcclxuICB9LCAyMDApO1xyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGdhbWVQYXVzZS5jbGFzc0xpc3QucmVtb3ZlKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICAgIGdhbWVQYXVzZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfSwgMTUwMCk7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZWFjaFJvdW5kU2NvcmUobG9naWMpO1xyXG4gIH0sIDE2MDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYWNoUm91bmRTY29yZShsb2dpYykge1xyXG4gIGRpc2FibGVBbGxCdG4oZmFsc2UsIFwiIDFcIiwgXCJwb2ludGVyXCIpO1xyXG4gIHJvY2tBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LmFkZChcInZlcnQtbW92ZVwiKTtcclxuICBwYXBlckFycm93QW5pbWF0ZS5jbGFzc0xpc3QuYWRkKFwidmVydC1tb3ZlXCIpO1xyXG4gIHNjaXNzb3JzQXJyb3dBbmltYXRlLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0LW1vdmVcIik7XHJcblxyXG4gIGN1cnJlbnRHYW1lU2NvcmUuaGlkZGVuID0gZmFsc2U7XHJcbiAgY3VycmVudEdhbWVTY29yZS5jbGFzc0xpc3QuYWRkKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuXHJcbiAgcm91bmROdW1iZXIudGV4dENvbnRlbnQgPSBgUm91bmQgJHtyb3VuZFBsYXllZH0gYDtcclxuICByb3VuZFBsYXllci50ZXh0Q29udGVudCA9IGBQbGF5ZXIgOiBDb21wdXRlcmA7XHJcbiAgcm91bmRQbGF5ZXIuc3R5bGUubWFyZ2luVG9wID0gXCI1cHhcIjtcclxuICByb3VuZFNjb3JlLnRleHRDb250ZW50ID0gYCR7cGxheWVyU2NvcmV9IDogJHtjb21wdXRlclNjb3JlfWA7XHJcbiAgcm91bmRSZXN1bHQudGV4dENvbnRlbnQgPSBgUm91bmQgV29uIDogJHtsb2dpY30gYDtcclxuICByb3VuZERyYXcudGV4dENvbnRlbnQgPSBgICR7Y2FwaXRhbExldHRlcih1c2VySW5wdXQpfSAgOiAke2NhcGl0YWxMZXR0ZXIoXHJcbiAgICBjb21wdXRlcklucHV0XHJcbiAgKX1gO1xyXG5cclxuICByb3VuZFJlc3VsdC5jbGFzc0xpc3QuYWRkKFwiZ2FtZV9fZGV0YWlsc19fc3RhdHVzXCIpO1xyXG4gIHJvdW5kRHJhdy5jbGFzc0xpc3QuYWRkKFwiZ2FtZV9fZGV0YWlsc19fZHJhd3NcIik7XHJcbiAgcm91bmRTY29yZS5jbGFzc0xpc3QuYWRkKFwiZ2FtZV9fZGV0YWlsc19fZWFjaFJvdW5kU2NvcmVcIik7XHJcblxyXG4gIGN1cnJlbnRHYW1lU2NvcmUuYXBwZW5kKHJvdW5kTnVtYmVyKTtcclxuICBjdXJyZW50R2FtZVNjb3JlLmFwcGVuZChyb3VuZFBsYXllcik7XHJcbiAgY3VycmVudEdhbWVTY29yZS5hcHBlbmQocm91bmRTY29yZSk7XHJcbiAgY3VycmVudEdhbWVTY29yZS5hcHBlbmQocm91bmREcmF3KTtcclxuICBjdXJyZW50R2FtZVNjb3JlLmFwcGVuZChyb3VuZFJlc3VsdCk7XHJcbiAgaWYgKHBsYXllclNjb3JlID09PSByb3VuZE5lZWRlZCB8fCBjb21wdXRlclNjb3JlID09PSByb3VuZE5lZWRlZCkge1xyXG4gICAgZ2FtZU92ZXIoKTtcclxuICAgIHJlc3RhcnRHYW1lKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuICByZXNldEdhbWVTY29yZS5hcHBlbmQoZW5kR2FtZVRleHQpO1xyXG4gIHJlc2V0R2FtZVNjb3JlLmFwcGVuZChlbmRHYW1lUmVzdWx0KTtcclxuICByZXNldEdhbWVTY29yZS5hcHBlbmQocmVzdGFydEdhbWVEaXYpO1xyXG5cclxuICBpZiAocGxheWVyU2NvcmUgPiBjb21wdXRlclNjb3JlKSB7XHJcbiAgICBlbmRHYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiSHVycmF5LCBZb3UgV29uICFcIjtcclxuICAgIGVuZEdhbWVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX3dpblwiKTtcclxuICAgIGVuZEdhbWVSZXN1bHQudGV4dENvbnRlbnQgPSBgU2VlbXMgbGlrZSB5b3UgYXJlIGEgR2lmdGVkIFRhbGVudC5gO1xyXG4gIH0gZWxzZSBpZiAocGxheWVyU2NvcmUgPT09IGNvbXB1dGVyU2NvcmUpIHtcclxuICAgIGVuZEdhbWVUZXh0LnRleHRDb250ZW50ID0gXCIgQSBEcmF3ICFcIjtcclxuICAgIGVuZEdhbWVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX2RyYXdcIik7XHJcbiAgICBlbmRHYW1lUmVzdWx0LnRleHRDb250ZW50ID0gYCBPaCBTbmFwLCBTZWVtcyBsaWtlIGEgdGllLmA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVuZEdhbWVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX2xvc3RcIik7XHJcbiAgICBlbmRHYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiWW91IExvc3QgIVwiO1xyXG4gICAgZW5kR2FtZVJlc3VsdC50ZXh0Q29udGVudCA9IGBHdWVzcyB0aGF0IHlvdSBhcmUgbm90IGV2ZW4gYmV0dGVyIHRoYW4gYSBCT1QuYDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xyXG4gIGdhbWVQbGF5TWVudS5oaWRkZW4gPSB0cnVlO1xyXG4gIGN1cnJlbnRHYW1lU2NvcmUuaGlkZGVuID0gdHJ1ZTtcclxuICByZXNldEdhbWVTY29yZS5oaWRkZW4gPSBmYWxzZTtcclxuXHJcbiAgc2NvcmVNZW51LmNsYXNzTGlzdC5hZGQoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG4gIHNjb3JlTWVudS5jbGFzc0xpc3QuYWRkKFwiZ2FtZU92ZXJcIik7XHJcblxyXG4gIHJlc2V0R2FtZVNjb3JlLmNsYXNzTGlzdC5hZGQoXCJyZXNldF9fYm9yZGVyXCIpO1xyXG4gIHJlc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJnYW1lX19kZXRhaWxzX19yZXN0YXJ0X19idXR0b25cIik7XHJcbiAgcmVzdGFydEdhbWVCdXR0b24udGV4dENvbnRlbnQgPSBgUmVzdGFydGA7XHJcbiAgcmVzdGFydEdhbWVEaXYuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX3Jlc3RhcnRcIik7XHJcbiAgcmVzdGFydEdhbWVEaXYuYXBwZW5kKHJlc3RhcnRHYW1lQnV0dG9uKTtcclxuXHJcbiAgcmVzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAvLyBhZGQgYXJyb3cgYW5pbWF0aW9uXHJcbiAgICByb2NrQXJyb3dBbmltYXRlLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0LW1vdmVcIik7XHJcbiAgICBwYXBlckFycm93QW5pbWF0ZS5jbGFzc0xpc3QuYWRkKFwidmVydC1tb3ZlXCIpO1xyXG4gICAgc2Npc3NvcnNBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LmFkZChcInZlcnQtbW92ZVwiKTtcclxuXHJcbiAgICAvLyBhZGQgYXJyb3cgdHJhbnNpdGlvblxyXG4gICAgcm9ja0Fycm93QW5pbWF0ZS5jbGFzc0xpc3QucmVtb3ZlKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICAgIHBhcGVyQXJyb3dBbmltYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG4gICAgc2Npc3NvcnNBcnJvd0FuaW1hdGUuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcblxyXG4gICAgcmVzZXRHYW1lU2NvcmUuaGlkZGVuID0gdHJ1ZTtcclxuICAgIGdhbWVQbGF5TWVudS5oaWRkZW4gPSBmYWxzZTtcclxuXHJcbiAgICBjdXJyZW50R2FtZVNjb3JlLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG4gICAgc2NvcmVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJnYW1lT3ZlclwiKTtcclxuICAgIHNjb3JlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICAgIGdhbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG4gICAgcmVzZXRHYW1lU2NvcmUuY2xhc3NMaXN0LnJlbW92ZShcInJlc2V0X19ib3JkZXJcIik7XHJcblxyXG4gICAgcGxheWVyU2NvcmUgPSAwO1xyXG4gICAgY29tcHV0ZXJTY29yZSA9IDA7XHJcbiAgICByb3VuZFBsYXllZCA9IDA7XHJcbiAgICByb3VuZE51bWJlci50ZXh0Q29udGVudCA9IFwiUm91bmQgRGV0YWlsc1wiO1xyXG4gICAgcm91bmREcmF3LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIHJvdW5kU2NvcmUudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgcm91bmRSZXN1bHQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgZW5kR2FtZVJlc3VsdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIGJ0bi5mb3JFYWNoKGVhY2hCdG4gPT4ge1xyXG4vLyAgICAgZWFjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuLy8gICAgICAgICBpZiAocGxheWVyU2NvcmUgPT09IDUgfHwgY29tcHV0ZXJTY29yZSA9PT0gNSkge1xyXG4vLyAgICAgICAgICAgICBlYWNoQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHVzZXJJbnB1dCA9IGVhY2hCdG4udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTsgLy8gZ2l2ZXMgdGhlIG5hbWUgb2YgdXNlcklucHV0Ly9hIHZhcmlhYmxlIHRoYXQgaGFzIG5vdCBiZWVuIGRlY2xhcmVkLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYmVjb21lIGEgR0xPQkFMIHZhcmlhYmxlLlxyXG4vLyAgICAgICAgICAgICBwbGF5R2FtZSgpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vIH0pXHJcblxyXG4vLyByYW5kb20gY29tcHV0ZXJHdWVzcyBnZW5lcmF0b3JcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXByYXNpbW8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK1NsYWImZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJvbXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWZvbnQtaGVhZGVyOiBcIkNhcHJhc2ltb1wiLCBjdXJzaXZlO1xuICAtLWZvbnQtYm9keTogXCJSb2JvdG8gU2xhYlwiLCBzZXJpZjtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbioge1xuICBjb2xvcjogI2E5OTI3ZDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYm9keSk7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGJvcmRlci1jb2xvcjogI2E5OTI3ZDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjMzM2I7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyYjZhNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBib3JkZXItdG9wOiAzLjVweCBzb2xpZCAjYTE4OTc2O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJSdWJpayBJc29cIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2lsa3NjcmVlblwiLCBjdXJzaXZlO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTRhMDg1O1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cblxuLnN0YXJ0X19idXR0b24ge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMzMzYjtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgSXNvXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGtzY3JlZW5cIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICMxNGEwODU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5zdGFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uc3RhcnRfX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzE0YTA4NTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zdGFydF9fYnV0dG9uID4gYSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWhlYWRlcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zdGFydF9fYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjMTRhMDg1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cblxuLmdhbWVfX2Rlc2lnbl9fcmlnaHQsIC5nYW1lX19kZXNpZ25fX2xlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogNS41cHg7XG59XG5cbi5nYW1lX19oZWFkZXIge1xuICBmb250LXNpemU6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtaGVhZGVyKTtcbn1cbi5nYW1lX19oZWFkZXIgPiBpbWcge1xuICBoZWlnaHQ6IDk1cHg7XG4gIHdpZHRoOiA5NXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTBlbSkge1xuICAuZ2FtZV9faGVhZGVyIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAuZ2FtZV9faGVhZGVyID4gaW1nIHtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuZ2FtZV9faGVhZGVyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgLmdhbWVfX2hlYWRlciA+IGltZyB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2hlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLmdhbWVfX2hlYWRlciA+IGltZyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuXG4uZ2FtZV9fZGVzaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTRhMDg1O1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5nYW1lX19kZXNpZ24gPiBpbWcge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBwYWRkaW5nOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLmdhbWVfX2Rlc2lnbiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmdhbWVfX2Rlc2lnbiA+IGltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLmdhbWVfX2Rlc2lnbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmdhbWVfX2Rlc2lnbiA+IGltZyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2Rlc2lnbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIC5nYW1lX19kZXNpZ24gPiBpbWcge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cblxuLmdhbWVfX2J1dHRvbl9fc3R5bGUge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMzMzYjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtaGVhZGVyKTtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGJvcmRlcjogMi41cHggc29saWQgIzE0YTA4NTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmdhbWVfX2Fycm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ2FtZV9fYnV0dG9uX19vdXRlcl9fcm9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdhbWVfX2J1dHRvbl9fb3V0ZXJfX3JvY2tfX2Fycm93IHtcbiAgbWF4LWhlaWdodDogOTBweDtcbiAgbWF4LXdpZHRoOiA5MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9fb3V0ZXJfX3JvY2tfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9fb3V0ZXJfX3JvY2tfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgIG1heC13aWR0aDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9fb3V0ZXJfX3JvY2tfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgIG1heC13aWR0aDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuLmdhbWVfX2J1dHRvbl9faW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5nYW1lX19idXR0b25fX2lubmVyX19wYXBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdhbWVfX2J1dHRvbl9faW5uZXJfX3BhcGVyX19hcnJvdyB7XG4gIG1heC1oZWlnaHQ6IDkwcHg7XG4gIG1heC13aWR0aDogOTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7XG4gIC5nYW1lX19idXR0b25fX2lubmVyX19wYXBlcl9fYXJyb3cge1xuICAgIG1heC1oZWlnaHQ6IDc1cHg7XG4gICAgbWF4LXdpZHRoOiA3NXB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19pbm5lcl9fcGFwZXJfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiA1NXB4O1xuICAgIG1heC13aWR0aDogNTVweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9faW5uZXJfX3BhcGVyX19hcnJvdyB7XG4gICAgbWF4LWhlaWdodDogMzVweDtcbiAgICBtYXgtd2lkdGg6IDM1cHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cbi5nYW1lX19idXR0b25fX2lubmVyX19zY2lzc29ycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdhbWVfX2J1dHRvbl9faW5uZXJfX3NjaXNzb3JzX19hcnJvdyB7XG4gIG1heC1oZWlnaHQ6IDkwcHg7XG4gIG1heC13aWR0aDogOTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7XG4gIC5nYW1lX19idXR0b25fX2lubmVyX19zY2lzc29yc19fYXJyb3cge1xuICAgIG1heC1oZWlnaHQ6IDc1cHg7XG4gICAgbWF4LXdpZHRoOiA3NXB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19pbm5lcl9fc2Npc3NvcnNfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiA1NXB4O1xuICAgIG1heC13aWR0aDogNTVweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9faW5uZXJfX3NjaXNzb3JzX19hcnJvdyB7XG4gICAgbWF4LWhlaWdodDogMzVweDtcbiAgICBtYXgtd2lkdGg6IDM1cHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cbi5nYW1lX19idXR0b25fX3N0eWxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjMTRhMDg1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi5nYW1lX19idXR0b25fX3N0eWxlOmFjdGl2ZSB7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7XG4gIC5nYW1lX19idXR0b25fX3N0eWxlIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9fc3R5bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9fc3R5bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5cbi5nYW1lX19kZXRhaWxzX19yZXN0YXJ0X19idXR0b24ge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMzMzYjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICMxNGEwODU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5nYW1lX19kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjNyZW07XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLmdhbWVfX2RldGFpbHMge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5nYW1lX19kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2RldGFpbHMge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbi5nYW1lX19kZXRhaWxzX19zY29yZWJvYXJkIHtcbiAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcbiAgYm9yZGVyLWJvdHRvbTogMy41cHggc29saWQgI2ExODk3NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5nYW1lX19kZXRhaWxzX19yb3VuZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTRhMDg1O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4uZ2FtZV9fZGV0YWlsc19fcmVzdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdhbWVfX2RldGFpbHNfX3Jlc3RhcnRfX2J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzE0YTA4NTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59XG4uZ2FtZV9fZGV0YWlsc19fcmVzdGFydF9fYnV0dG9uOmFjdGl2ZSB7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5nYW1lX19kZXRhaWxzX19wYXVzZSB7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbn1cblxuLmdhbWVfX3Njb3JlX19jdXJyZW50IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uZ2FtZU92ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAwO1xufVxuXG4ucmVzZXRfX2JvcmRlciB7XG4gIGJvcmRlci10b3A6IDMuNXB4IHNvbGlkICNhMTg5NzY7XG4gIGJvcmRlci1ib3R0b206IDMuNXB4IHNvbGlkICNhMTg5NzY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5oaWRlQm9yZGVyIHtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLm1haW5UcmFuc2l0aW9uSW4ge1xuICBhbmltYXRpb246IHRyYW5zaXRpb25JbiAwLjc1cztcbn1cblxuQGtleWZyYW1lcyB0cmFuc2l0aW9uSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcbiAgfVxufVxuLnZlcnQtbW92ZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy91dGlsL2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2dsb2JhbHMvX2JvaWxlcnBsYXRlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbXBvbmVudHMvc3RhcnRCdG4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9oZWFkZXJEZXNpZ24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvdXRpbC9icmVha3BvaW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL2dhbWVCdG4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9zY29yZURldGFpbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtBQ0NGOztBQ0xBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRFFGOztBQ0NBO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJB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RjtFQS9hQTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtFQWliRjtBQUNGO0FBOWFBO0VBQ0UsOENBQUE7RUFDQSxzQ0FBQTtBQWdiRjs7QUE3YUE7RUFDRTtJQUNFLHdCQUFBO0VBZ2JGO0VBOWFBO0lBQ0UsNEJBQUE7RUFnYkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXByYXNpbW8mZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK1NsYWImZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJvbXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbjpyb290IHtcXHJcXG4gIC0tZm9udC1oZWFkZXI6IFxcXCJDYXByYXNpbW9cXFwiLCBjdXJzaXZlO1xcclxcbiAgLS1mb250LWJvZHk6IFxcXCJSb2JvdG8gU2xhYlxcXCIsIHNlcmlmO1xcclxcbiAgLy8gICAtLWZvbnQtYm9keTogXFxcIlByb21wdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblwiLFwiQGZvcndhcmQgXFxcImdsb2JhbHNcXFwiO1xcclxcbkBmb3J3YXJkIFxcXCJjb21wb25lbnRzXFxcIjtcXHJcXG5cXHJcXG4ubWFpblRyYW5zaXRpb25JbiB7XFxyXFxuICBhbmltYXRpb246IHRyYW5zaXRpb25JbiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0cmFuc2l0aW9uSW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi52ZXJ0LW1vdmUge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG4gIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIGltZy52ZXJ0LW1vdmUge1xcclxcbi8vICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcXHJcXG4vLyAgICAgYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xcclxcbi8vIH1cXHJcXG4vLyBALXdlYmtpdC1rZXlmcmFtZXMgbW92ZXIge1xcclxcbi8vICAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcclxcbi8vICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxcclxcbi8vIH1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWwvXFxcIiBhcyB1dDtcXHJcXG5odG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi8vICosXFxyXFxuLy8gKjo6YmVmb3JlLFxcclxcbi8vICo6OmFmdGVyIHtcXHJcXG4vLyAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuLy8gfVxcclxcblxcclxcbioge1xcclxcbiAgY29sb3I6ICNhOTkyN2Q7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ib2R5KTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICBib3JkZXItY29sb3I6ICNhOTkyN2Q7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMzNiO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyYjZhNTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgLy8gZGlzcGxheTogZmxleDtcXHJcXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gIGJvcmRlci10b3A6IDMuNXB4IHNvbGlkICNhMTg5NzY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpayBJc29cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTaWxrc2NyZWVuXFxcIiwgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxNGEwODU7XFxyXFxuICBtYXJnaW4tbGVmdDogN3B4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbC9cXFwiIGFzIHV0O1xcclxcblxcclxcbiVidXR0b25TdHlsZSB7XFxyXFxuICBwYWRkaW5nOiAwcHggMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjMzM2I7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrIElzb1xcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNpbGtzY3JlZW5cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMTRhMDg1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuLnN0YXJ0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFxyXFxuICAmX19idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICMxNGEwODU7XFxyXFxuICAgIEBleHRlbmQgJWJ1dHRvblN0eWxlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcblxcclxcbiAgICAmID4gYSB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtaGVhZGVyKTtcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICMxNGEwODU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsL1xcXCIgYXMgdXQ7XFxyXFxuLy8gQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FwcmFzaW1vJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbkBtaXhpbiBoZWFkZXJTdHlsZSgkaGVpZ2h0LCAkd2lkdGgsICRwYWRkaW5nKSB7XFxyXFxuICBoZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICB3aWR0aDogJHdpZHRoO1xcclxcbiAgcGFkZGluZzogJHBhZGRpbmc7XFxyXFxufVxcclxcbiVkZXNpZ25TdHlsZSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAycHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1LjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX2hlYWRlciB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gIGJvcmRlci10b3A6IDMuNXB4IHNvbGlkICNhMTg5NzY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtaGVhZGVyKTtcXHJcXG5cXHJcXG4gICYgPiBpbWcge1xcclxcbiAgICBAaW5jbHVkZSBoZWFkZXJTdHlsZSg5NXB4LCA5NXB4LCA1cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgICYgPiBpbWcge1xcclxcbiAgICAgIEBpbmNsdWRlIGhlYWRlclN0eWxlKDY1cHgsIDY1cHgsIDVweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAmID4gaW1nIHtcXHJcXG4gICAgICBAaW5jbHVkZSBoZWFkZXJTdHlsZSg0NXB4LCA0NXB4LCA1cHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgJiA+IGltZyB7XFxyXFxuICAgICAgQGluY2x1ZGUgaGVhZGVyU3R5bGUoMjVweCwgMjVweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fZGVzaWduIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE0YTA4NTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXHJcXG4gICYgPiBpbWcge1xcclxcbiAgICBAaW5jbHVkZSBoZWFkZXJTdHlsZSg0NXB4LCA0NXB4LCAwKTtcXHJcXG4gIH1cXHJcXG4gICZfX2xlZnQge1xcclxcbiAgICBAZXh0ZW5kICVkZXNpZ25TdHlsZTtcXHJcXG4gIH1cXHJcXG4gICZfX3JpZ2h0IHtcXHJcXG4gICAgQGV4dGVuZCAlZGVzaWduU3R5bGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgJiA+IGltZyB7XFxyXFxuICAgICAgQGluY2x1ZGUgaGVhZGVyU3R5bGUoMzBweCwgMzBweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgJiA+IGltZyB7XFxyXFxuICAgICAgQGluY2x1ZGUgaGVhZGVyU3R5bGUoMjVweCwgMjVweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAmID4gaW1nIHtcXHJcXG4gICAgICBAaW5jbHVkZSBoZWFkZXJTdHlsZSgyMHB4LCAyMHB4LCA1cHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiJGJyZWFrcG9pbnRzLXVwOiAoXFxyXFxuICBcXFwibWVkaXVtXFxcIjogNDMuNzVlbSxcXHJcXG4gIFxcXCJsYXJnZVxcXCI6IDU2LjI1ZW0sXFxyXFxuICBcXFwieExhcmdlXFxcIjogOTBlbSxcXHJcXG4pO1xcclxcblxcclxcbkBtaXhpbiBicmVha3BvaW50KCRzaXplKSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMtdXAsJHNpemUpKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWwvXFxcIiBhcyB1bDtcXHJcXG5cXHJcXG4lYnV0dG9uU3R5bGUge1xcclxcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMzNiO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtaGVhZGVyKTtcXHJcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMTRhMDg1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJ1dHRvblBvc2l0aW9uKCRmbGV4LCAkanVzdGlmeSkge1xcclxcbiAgZGlzcGxheTogJGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fYXJyb3cge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fYnV0dG9uIHtcXHJcXG4gICZfX291dGVyIHtcXHJcXG4gICAgJl9fcm9jayB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgJl9fYXJyb3cge1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogOTBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogNzBweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA3MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSB1bC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogNTBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogNDBweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19pbm5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAmX19wYXBlciB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgJl9fYXJyb3cge1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogOTBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogNzVweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA3NXB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSB1bC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDU1cHg7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogNTVweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogMzVweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNXB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICZfX3NjaXNzb3JzIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAmX19hcnJvdyB7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiA5MHB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA5MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSB1bC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA3NXB4O1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDc1cHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogNTVweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA1NXB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSB1bC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1cHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX3N0eWxlIHtcXHJcXG4gICAgQGV4dGVuZCAlYnV0dG9uU3R5bGU7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjMTRhMDg1O1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcclxcbiAgICB9XFxyXFxuICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICB0b3A6IDEwcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSB1bC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWwvXFxcIiBhcyB1bDtcXHJcXG4lYnV0dG9uU3R5bGUge1xcclxcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMzNiO1xcclxcbiAgLy8gZm9udC1mYW1pbHk6IFxcXCJSdWJpayBJc29cXFwiLCBjdXJzaXZlO1xcclxcbiAgLy8gZm9udC1mYW1pbHk6IFxcXCJTaWxrc2NyZWVuXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgIzE0YTA4NTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lX19kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIuM3JlbTtcXHJcXG4gIG1heC13aWR0aDogODAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBAaW5jbHVkZSB1bC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuICAmX19zY29yZWJvYXJkIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMy41cHggc29saWQgI2ExODk3NjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gIH1cXHJcXG4gICZfX3JvdW5kIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxNGEwODU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gIH1cXHJcXG4gICZfX3Jlc3RhcnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgJl9fYnV0dG9uIHtcXHJcXG4gICAgICBAZXh0ZW5kICVidXR0b25TdHlsZTtcXHJcXG4gICAgICAvLyBtYXJnaW46IDIwcHg7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjMTRhMDg1O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgIHRvcDogMTBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19wYXVzZSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXHJcXG4gICAgLy8gY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fc2NvcmVfX2N1cnJlbnQge1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVPdmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0X19ib3JkZXIge1xcclxcbiAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDMuNXB4IHNvbGlkICNhMTg5NzY7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGVCb3JkZXIge1xcclxcbiAgYm9yZGVyLXRvcDogMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbImNhcGl0YWxMZXR0ZXIiLCJzdHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicmFuZG9tVmFsdWUiLCJjb21wdXRlckd1ZXNzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInVzZXJJbnB1dCIsImNvbXB1dGVySW5wdXQiLCJwbGF5ZXJTY29yZSIsImNvbXB1dGVyU2NvcmUiLCJyb3VuZFBsYXllZCIsInJvdW5kTmVlZGVkIiwiZ2FtZVBsYXlNZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2NvcmVNZW51Iiwic3RhcnRNZW51IiwiZ2FtZUNvbnRlbnQiLCJkcmF3QnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRHYW1lU2NvcmUiLCJnYW1lUGF1c2UiLCJyZXNldEdhbWVTY29yZSIsInJvY2tBcnJvd0FuaW1hdGUiLCJwYXBlckFycm93QW5pbWF0ZSIsInNjaXNzb3JzQXJyb3dBbmltYXRlIiwicm91bmROdW1iZXIiLCJyb3VuZERyYXciLCJjcmVhdGVFbGVtZW50Iiwicm91bmRSZXN1bHQiLCJyb3VuZFNjb3JlIiwicm91bmRQbGF5ZXIiLCJlbmRHYW1lVGV4dCIsImVuZEdhbWVSZXN1bHQiLCJzdGFydEdhbWVCdXR0b24iLCJyZXN0YXJ0R2FtZUJ1dHRvbiIsInJlc3RhcnRHYW1lRGl2IiwiaGlkZGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNhYmxlQWxsQnRuIiwiYm9vbGVhblZhbHVlIiwib3BhY2l0eVZhbHVlIiwiY3Vyc29yVmFsdWUiLCJpIiwiZGlzYWJsZWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJjdXJzb3IiLCJlYWNoQnRuIiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJ0b0xvd2VyQ2FzZSIsInNldFRpbWVvdXQiLCJwbGF5R2FtZSIsImdhbWVMb2dpYyIsInBsYXllckRyYXciLCJjb21wdXRlckRyYXciLCJlYWNoUm91bmQiLCJsb2dpYyIsImVhY2hSb3VuZFNjb3JlIiwibWFyZ2luVG9wIiwiYXBwZW5kIiwiZ2FtZU92ZXIiLCJyZXN0YXJ0R2FtZSJdLCJzb3VyY2VSb290IjoiIn0=