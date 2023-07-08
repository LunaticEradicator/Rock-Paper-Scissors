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
startGameButton.addEventListener("click", e => {
  startMenu.hidden = true;
  gamePlayMenu.hidden = false;
  gameContent.hidden = false;
  gameContent.classList.add("mainTransitionIn");
});

// When user press a button playGame
for (let eachBtn of drawButton) {
  eachBtn.addEventListener("click", e => {
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
  if (playerDraw === "rock" && computerDraw === "rock" || playerDraw === "paper" && computerDraw === "paper" || playerDraw === "scissors" && computerDraw === "scissors") {
    return "Round Draw";
  } else if (playerDraw === "rock" && computerDraw === "paper" || playerDraw === "paper" && computerDraw === "scissors" || playerDraw === "scissors" && computerDraw === "rock") {
    computerScore++;
    return "Computer Wins";
  } else if (playerDraw === "rock" && computerDraw === "scissors" || playerDraw === "paper" && computerDraw === "rock" || playerDraw === "scissors" && computerDraw === "paper") {
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
  computerInput = (0,_computerGuess__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
}`, "",{"version":3,"sources":["webpack://./src/sass/globals/_boilerplate.scss","webpack://./src/sass/style.scss","webpack://./src/sass/components/startBtn.scss","webpack://./src/sass/components/headerDesign.scss","webpack://./src/sass/util/breakpoints.scss","webpack://./src/sass/components/gameBtn.scss","webpack://./src/sass/components/scoreDetail.scss"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n}\r\n\r\n// *,\r\n// *::before,\r\n// *::after {\r\n//   box-sizing: inherit;\r\n// }\r\n\r\n* {\r\n  color: #a9927d;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  font-family: \"Acme\", sans-serif;\r\n  font-family: \"Akronim\", cursive;\r\n  font-family: \"Kalam\", cursive;\r\n  font-family: \"Spectral\", serif;\r\n  border-color: #a9927d;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: #22333b;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  background-color: #c2b6a5;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\nh1 {\r\n  // display: flex;\r\n  // justify-content: center;\r\n  margin-top: 2px;\r\n  text-align: center;\r\n  border-radius: 11px;\r\n  border-top: 3.5px solid #a18976;\r\n  border-radius: 50px;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n}\r\n\r\nh2 {\r\n  font-size: 30px;\r\n  text-align: center;\r\n  border-radius: 7px;\r\n  border-bottom: 2px solid #14a085;\r\n  margin-left: 7px;\r\n  margin-right: 7px;\r\n}\r\n","@forward \"globals\";\r\n@forward \"components\";\r\n\r\n.mainTransitionIn {\r\n  animation: transitionIn 0.75s;\r\n}\r\n\r\n@keyframes transitionIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: rotateX(-10deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: rotateX(0);\r\n  }\r\n}\r\n","%buttonStyle {\r\n  padding: 0px 10px;\r\n  background-color: #22333b;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  font-size: 3rem;\r\n  border: 2.5px solid #14a085;\r\n  border-radius: 20px;\r\n}\r\n.start {\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  position: relative;\r\n\r\n  &__button {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: #000000;\r\n    box-shadow: 0px 0px 15px 0px #14a085;\r\n    @extend %buttonStyle;\r\n\r\n    & > a {\r\n      font-family: \"Rubik Iso\", cursive;\r\n      font-family: \"Silkscreen\", cursive;\r\n      text-decoration: none;\r\n    }\r\n    &:hover {\r\n      background-color: #ffffff;\r\n      box-shadow: 0px 0px 15px 0px #14a085;\r\n    }\r\n  }\r\n}\r\n","@use \"../util/\" as ul;\r\n\r\n@mixin headerStyle($height, $width, $padding) {\r\n  height: $height;\r\n  width: $width;\r\n  padding: $padding;\r\n}\r\n%designStyle {\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n  padding-top: 2px;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  margin-top: 5.5px;\r\n}\r\n\r\n.game__header {\r\n  font-size: 3rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  text-align: center;\r\n  border-radius: 11px;\r\n  border-top: 3.5px solid #a18976;\r\n  border-radius: 50px;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  & > img {\r\n    @include headerStyle(95px, 95px, 5px);\r\n  }\r\n\r\n  @include ul.breakpoint(xLarge) {\r\n    font-size: 2.5rem;\r\n    & > img {\r\n      @include headerStyle(65px, 65px, 5px);\r\n    }\r\n  }\r\n  @include ul.breakpoint(large) {\r\n    font-size: 2rem;\r\n    & > img {\r\n      @include headerStyle(45px, 45px, 5px);\r\n    }\r\n  }\r\n  @include ul.breakpoint(medium) {\r\n    font-size: 1.3rem;\r\n    & > img {\r\n      @include headerStyle(25px, 25px, 5px);\r\n    }\r\n  }\r\n}\r\n\r\n.game__design {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  border-radius: 7px;\r\n  border-bottom: 2px solid #14a085;\r\n  margin-left: 7px;\r\n  margin-right: 7px;\r\n  & > img {\r\n    @include headerStyle(45px, 45px, 0);\r\n  }\r\n  &__left {\r\n    @extend %designStyle;\r\n  }\r\n  &__right {\r\n    @extend %designStyle;\r\n  }\r\n\r\n  @include ul.breakpoint(xLarge) {\r\n    font-size: 1.5rem;\r\n    & > img {\r\n      @include headerStyle(30px, 30px, 5px);\r\n    }\r\n  }\r\n  @include ul.breakpoint(large) {\r\n    font-size: 1.2rem;\r\n    & > img {\r\n      @include headerStyle(25px, 25px, 5px);\r\n    }\r\n  }\r\n  @include ul.breakpoint(medium) {\r\n    font-size: 1rem;\r\n    & > img {\r\n      @include headerStyle(20px, 20px, 5px);\r\n    }\r\n  }\r\n}\r\n","$breakpoints-up: (\r\n  \"medium\": 43.75em,\r\n  \"large\": 56.25em,\r\n  \"xLarge\": 90em,\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n  @media (max-width: map-get($breakpoints-up,$size)) {\r\n    @content;\r\n  }\r\n}\r\n","@use \"../util/\" as ul;\r\n\r\n%buttonStyle {\r\n  padding: 0px 10px;\r\n  background-color: #22333b;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  font-size: 3.5rem;\r\n  border: 2.5px solid #14a085;\r\n  border-radius: 20px;\r\n}\r\n\r\n@mixin buttonPosition($flex, $justify) {\r\n  display: $flex;\r\n  justify-content: $justify;\r\n}\r\n\r\n.game__arrow {\r\n  text-align: center;\r\n}\r\n\r\n.game__button {\r\n  &__outer {\r\n    &__rock {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      &__arrow {\r\n        max-height: 90px;\r\n        max-width: 90px;\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n        @include ul.breakpoint(xLarge) {\r\n          max-height: 70px;\r\n          max-width: 70px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(large) {\r\n          max-height: 50px;\r\n          max-width: 50px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(medium) {\r\n          max-height: 40px;\r\n          max-width: 40px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &__inner {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    &__paper {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      &__arrow {\r\n        max-height: 90px;\r\n        max-width: 90px;\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n        @include ul.breakpoint(xLarge) {\r\n          max-height: 75px;\r\n          max-width: 75px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(large) {\r\n          max-height: 55px;\r\n          max-width: 55px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(medium) {\r\n          max-height: 35px;\r\n          max-width: 35px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n      }\r\n    }\r\n    &__scissors {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      &__arrow {\r\n        max-height: 90px;\r\n        max-width: 90px;\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n        @include ul.breakpoint(xLarge) {\r\n          max-height: 75px;\r\n          max-width: 75px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(large) {\r\n          max-height: 55px;\r\n          max-width: 55px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @include ul.breakpoint(medium) {\r\n          max-height: 35px;\r\n          max-width: 35px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &__style {\r\n    @extend %buttonStyle;\r\n    &:hover {\r\n      background-color: #000000;\r\n      box-shadow: 0px 0px 15px 0px #14a085;\r\n      transform: translateY(4px);\r\n    }\r\n    &:active {\r\n      top: 10px;\r\n      background-color: #ffffff;\r\n    }\r\n    @include ul.breakpoint(xLarge) {\r\n      font-size: 2.5rem;\r\n    }\r\n    @include ul.breakpoint(large) {\r\n      font-size: 2rem;\r\n    }\r\n    @include ul.breakpoint(medium) {\r\n      font-size: 1.5rem;\r\n    }\r\n  }\r\n}\r\n","@use \"../util/\" as ul;\r\n%buttonStyle {\r\n  padding: 0px 10px;\r\n  background-color: #22333b;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  font-size: 3rem;\r\n  border: 2.5px solid #14a085;\r\n  border-radius: 20px;\r\n}\r\n\r\n.game__details {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 5px;\r\n  text-align: center;\r\n  font-size: 2.5rem;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n  margin-top: 20px;\r\n  @include ul.breakpoint(xLarge) {\r\n    margin-top: 40px;\r\n    font-size: 2.2rem;\r\n  }\r\n  @include ul.breakpoint(large) {\r\n    margin-top: 40px;\r\n    font-size: 2rem;\r\n  }\r\n  @include ul.breakpoint(medium) {\r\n    margin-top: 40px;\r\n    font-size: 1.5rem;\r\n  }\r\n  &__scoreboard {\r\n    border-top: 3.5px solid #a18976;\r\n    border-bottom: 3.5px solid #a18976;\r\n    border-radius: 50px;\r\n    padding: 20px;\r\n    @include ul.breakpoint(medium) {\r\n      padding: 10px;\r\n    }\r\n  }\r\n  &__round {\r\n    border-bottom: 2px solid #14a085;\r\n    border-radius: 7px;\r\n  }\r\n  &__restart {\r\n    display: flex;\r\n    justify-content: center;\r\n    &__button {\r\n      @extend %buttonStyle;\r\n      // margin: 20px;\r\n      &:hover {\r\n        background-color: #000000;\r\n        box-shadow: 0px 0px 15px 0px #14a085;\r\n        transform: translateY(4px);\r\n      }\r\n      &:active {\r\n        top: 10px;\r\n        background-color: #ffffff;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.game__score__current {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.gameOver {\r\n  display: grid;\r\n  place-items: center;\r\n  align-content: center;\r\n  min-height: 100vh;\r\n  /* position: absolute; */\r\n  /* top: 33%; */\r\n  /* border: 3.5px solid #a18976; */\r\n  left: 1%;\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  border: 0;\r\n}\r\n\r\n.reset__border {\r\n  border-top: 3.5px solid #a18976;\r\n  border-bottom: 3.5px solid #a18976;\r\n  padding: 20px;\r\n  border-radius: 50px;\r\n}\r\n\r\n.hideBorder {\r\n  border-top: 0;\r\n  border-bottom: 0;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsZUFBZTtBQUNmLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDBYQUEwWCxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sYUFBYSxjQUFjLGNBQWMsT0FBTyxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sYUFBYSxjQUFjLGNBQWMsT0FBTyxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxhQUFhLGNBQWMsY0FBYyxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLGFBQWEsY0FBYyxjQUFjLE9BQU8sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxhQUFhLGNBQWMsY0FBYyxPQUFPLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxhQUFhLGNBQWMsY0FBYyxPQUFPLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLGFBQWEsY0FBYyxjQUFjLE9BQU8sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sYUFBYSxjQUFjLGNBQWMsT0FBTyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLCtCQUErQiw2QkFBNkIsc0JBQXNCLHVCQUF1Qix3QkFBd0IsS0FBSywrQ0FBK0MsNkJBQTZCLFFBQVEsV0FBVyxxQkFBcUIsMENBQTBDLDJDQUEyQyx3Q0FBd0Msd0NBQXdDLHNDQUFzQyx1Q0FBdUMsNEJBQTRCLGtCQUFrQixtQkFBbUIsS0FBSyxjQUFjLGdCQUFnQixpQkFBaUIsZ0RBQWdELGdDQUFnQyxLQUFLLGdCQUFnQixzQkFBc0IsZ0NBQWdDLG9CQUFvQiw2QkFBNkIsd0JBQXdCLDJCQUEyQixLQUFLLFlBQVksdUJBQXVCLGlDQUFpQyxzQkFBc0IseUJBQXlCLDBCQUEwQixzQ0FBc0MsMEJBQTBCLDBDQUEwQywyQ0FBMkMsS0FBSyxZQUFZLHNCQUFzQix5QkFBeUIseUJBQXlCLHVDQUF1Qyx1QkFBdUIsd0JBQXdCLEtBQUssNEJBQTRCLDRCQUE0QiwyQkFBMkIsb0NBQW9DLEtBQUssaUNBQWlDLFlBQVksbUJBQW1CLG1DQUFtQyxPQUFPLGNBQWMsbUJBQW1CLDhCQUE4QixPQUFPLEtBQUsscUJBQXFCLHdCQUF3QixnQ0FBZ0MsMENBQTBDLDJDQUEyQyxzQkFBc0Isa0NBQWtDLDBCQUEwQixLQUFLLFlBQVksdUJBQXVCLHdCQUF3Qix5QkFBeUIscUJBQXFCLDJCQUEyQixpQkFBaUIsa0JBQWtCLHlDQUF5QyxrQ0FBa0MsNkNBQTZDLDZCQUE2QixtQkFBbUIsOENBQThDLCtDQUErQyxnQ0FBZ0MsU0FBUyxpQkFBaUIsb0NBQW9DLCtDQUErQyxTQUFTLE9BQU8sS0FBSywrQkFBK0IsdURBQXVELHNCQUFzQixvQkFBb0Isd0JBQXdCLEtBQUssa0JBQWtCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLHVCQUF1Qix3QkFBd0Isd0JBQXdCLEtBQUssdUJBQXVCLHNCQUFzQixvQkFBb0IsOEJBQThCLHNCQUFzQiwwQkFBMEIseUJBQXlCLDBCQUEwQixzQ0FBc0MsMEJBQTBCLDBDQUEwQywyQ0FBMkMsZUFBZSw4Q0FBOEMsT0FBTywwQ0FBMEMsMEJBQTBCLGlCQUFpQixnREFBZ0QsU0FBUyxPQUFPLHFDQUFxQyx3QkFBd0IsaUJBQWlCLGdEQUFnRCxTQUFTLE9BQU8sc0NBQXNDLDBCQUEwQixpQkFBaUIsZ0RBQWdELFNBQVMsT0FBTyxLQUFLLHVCQUF1QixvQkFBb0IsMEJBQTBCLDhCQUE4QixzQkFBc0IseUJBQXlCLHlCQUF5Qix1Q0FBdUMsdUJBQXVCLHdCQUF3QixlQUFlLDRDQUE0QyxPQUFPLGVBQWUsNkJBQTZCLE9BQU8sZ0JBQWdCLDZCQUE2QixPQUFPLDBDQUEwQywwQkFBMEIsaUJBQWlCLGdEQUFnRCxTQUFTLE9BQU8scUNBQXFDLDBCQUEwQixpQkFBaUIsZ0RBQWdELFNBQVMsT0FBTyxzQ0FBc0Msd0JBQXdCLGlCQUFpQixnREFBZ0QsU0FBUyxPQUFPLEtBQUsseUdBQXlHLGtDQUFrQywwREFBMEQsaUJBQWlCLE9BQU8sS0FBSywrQkFBK0Isc0JBQXNCLHdCQUF3QixnQ0FBZ0MsMENBQTBDLDJDQUEyQyx3QkFBd0Isa0NBQWtDLDBCQUEwQixLQUFLLGdEQUFnRCxxQkFBcUIsZ0NBQWdDLEtBQUssc0JBQXNCLHlCQUF5QixLQUFLLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHdCQUF3QixpQ0FBaUMsOEJBQThCLGtDQUFrQyxvQkFBb0IsNkJBQTZCLDRCQUE0Qiw2QkFBNkIsZ0NBQWdDLDRDQUE0QywrQkFBK0IsOEJBQThCLCtCQUErQixpQ0FBaUMsYUFBYSwyQ0FBMkMsK0JBQStCLDhCQUE4QiwrQkFBK0IsaUNBQWlDLGFBQWEsNENBQTRDLCtCQUErQiw4QkFBOEIsK0JBQStCLGlDQUFpQyxhQUFhLFdBQVcsU0FBUyxPQUFPLGdCQUFnQixzQkFBc0Isc0NBQXNDLGtCQUFrQix3QkFBd0IsaUNBQWlDLDhCQUE4QixrQ0FBa0Msb0JBQW9CLDZCQUE2Qiw0QkFBNEIsNkJBQTZCLGdDQUFnQyw0Q0FBNEMsK0JBQStCLDhCQUE4QiwrQkFBK0IsaUNBQWlDLGFBQWEsMkNBQTJDLCtCQUErQiw4QkFBOEIsK0JBQStCLGlDQUFpQyxhQUFhLDRDQUE0QywrQkFBK0IsOEJBQThCLCtCQUErQixpQ0FBaUMsYUFBYSxXQUFXLFNBQVMscUJBQXFCLHdCQUF3QixpQ0FBaUMsOEJBQThCLGtDQUFrQyxvQkFBb0IsNkJBQTZCLDRCQUE0Qiw2QkFBNkIsZ0NBQWdDLDRDQUE0QywrQkFBK0IsOEJBQThCLCtCQUErQixpQ0FBaUMsYUFBYSwyQ0FBMkMsK0JBQStCLDhCQUE4QiwrQkFBK0IsaUNBQWlDLGFBQWEsNENBQTRDLCtCQUErQiw4QkFBOEIsK0JBQStCLGlDQUFpQyxhQUFhLFdBQVcsU0FBUyxPQUFPLGdCQUFnQiw2QkFBNkIsaUJBQWlCLG9DQUFvQywrQ0FBK0MscUNBQXFDLFNBQVMsa0JBQWtCLG9CQUFvQixvQ0FBb0MsU0FBUyx3Q0FBd0MsNEJBQTRCLFNBQVMsdUNBQXVDLDBCQUEwQixTQUFTLHdDQUF3Qyw0QkFBNEIsU0FBUyxPQUFPLEtBQUssK0JBQStCLGtCQUFrQix3QkFBd0IsZ0NBQWdDLDBDQUEwQywyQ0FBMkMsc0JBQXNCLGtDQUFrQywwQkFBMEIsS0FBSyx3QkFBd0Isb0JBQW9CLDhCQUE4Qix1QkFBdUIseUJBQXlCLHdCQUF3Qix1QkFBdUIscUJBQXFCLHVCQUF1QixzQ0FBc0MseUJBQXlCLDBCQUEwQixPQUFPLHFDQUFxQyx5QkFBeUIsd0JBQXdCLE9BQU8sc0NBQXNDLHlCQUF5QiwwQkFBMEIsT0FBTyxxQkFBcUIsd0NBQXdDLDJDQUEyQyw0QkFBNEIsc0JBQXNCLHdDQUF3Qyx3QkFBd0IsU0FBUyxPQUFPLGdCQUFnQix5Q0FBeUMsMkJBQTJCLE9BQU8sa0JBQWtCLHNCQUFzQixnQ0FBZ0MsbUJBQW1CLCtCQUErQiwwQkFBMEIsbUJBQW1CLHNDQUFzQyxpREFBaUQsdUNBQXVDLFdBQVcsb0JBQW9CLHNCQUFzQixzQ0FBc0MsV0FBVyxTQUFTLE9BQU8sS0FBSywrQkFBK0Isd0JBQXdCLDJCQUEyQixLQUFLLG1CQUFtQixvQkFBb0IsMEJBQTBCLDRCQUE0Qix3QkFBd0IsNkJBQTZCLHFCQUFxQix3Q0FBd0MsaUJBQWlCLDBCQUEwQixvQkFBb0IsZ0JBQWdCLEtBQUssd0JBQXdCLHNDQUFzQyx5Q0FBeUMsb0JBQW9CLDBCQUEwQixLQUFLLHFCQUFxQixvQkFBb0IsdUJBQXVCLEtBQUssdUJBQXVCO0FBQy81YztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzljMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWtKO0FBQ2xKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJNEY7QUFDcEgsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLDRIQUFPLFVBQVUsNEhBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vc3JjL2NhcGl0YWxpemVMZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL3NyYy9jb21wdXRlckd1ZXNzLmpzIiwid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzPzRkMzciLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUbyBDYXBpdGFsaXplIHRoZSBsZXR0ZXJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FwaXRhbExldHRlcihzdHIpIHtcclxuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG59XHJcbiIsIi8vIGltcG9ydCB7IGNhbWVsQ2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuLy8gaW1wb3J0IGljb24gZnJvbSBcIi4vYXNzZXRzL0Fycm93RG93bi5wbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVyR3Vlc3MoKSB7XHJcbiAgY29uc3QgcmFuZG9tVmFsdWUgPSBbXCJyb2NrXCIsIFwicGFwZXJcIiwgXCJzY2lzc29yc1wiXTtcclxuICBsZXQgY29tcHV0ZXJHdWVzcyA9XHJcbiAgICByYW5kb21WYWx1ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5kb21WYWx1ZS5sZW5ndGgpXTtcclxuICBjb25zb2xlLmxvZyhjb21wdXRlckd1ZXNzKTtcclxuICByZXR1cm4gY29tcHV0ZXJHdWVzcztcclxufVxyXG4iLCJpbXBvcnQgXCIuL3Nhc3Mvc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgY29tcHV0ZXJHdWVzcyBmcm9tIFwiLi9jb21wdXRlckd1ZXNzXCI7XHJcbmltcG9ydCBjYXBpdGFsTGV0dGVyIGZyb20gXCIuL2NhcGl0YWxpemVMZXR0ZXJcIjtcclxuXHJcbmxldCB1c2VySW5wdXQ7XHJcbmxldCBjb21wdXRlcklucHV0O1xyXG5cclxuLy8gU2NvcmVcclxubGV0IHBsYXllclNjb3JlID0gMDtcclxubGV0IGNvbXB1dGVyU2NvcmUgPSAwO1xyXG5sZXQgcm91bmRQbGF5ZWQgPSAwO1xyXG5cclxuLy9NZW51XHJcbmNvbnN0IGdhbWVQbGF5TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZV9fbWVudVwiKTtcclxuY29uc3Qgc2NvcmVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lX19kZXRhaWxzXCIpO1xyXG5sZXQgc3RhcnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydFwiKTtcclxuXHJcbi8vIEhUTUwgRWxlbWVudCBTZWxlY3Rpb24gLy9cclxuY29uc3QgZ2FtZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVcIik7XHJcbmNvbnN0IGRyYXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWVfX2J1dHRvbl9fc3R5bGVcIik7XHJcbmNvbnN0IGN1cnJlbnRHYW1lU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVfX2RldGFpbHNfX3Njb3JlYm9hcmRcIik7XHJcbmNvbnN0IHJlc2V0R2FtZVNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lX19kZXRhaWxzX19yZXNldFwiKTtcclxuXHJcbi8vZWFjaFJvdW5kIERPTS8vXHJcbmxldCByb3VuZE51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZV9fZGV0YWlsc19fcm91bmRcIik7XHJcbmxldCByb3VuZERyYXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5sZXQgcm91bmRSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5sZXQgcm91bmRTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4vL2VuZFJvdW5kIERPTS8vXHJcbmxldCBlbmRHYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmxldCBlbmRHYW1lUmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbmxldCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0X19idXR0b25cIik7XHJcbmxldCByZXN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmxldCByZXN0YXJ0R2FtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5zdGFydE1lbnUuaGlkZGVuID0gZmFsc2U7XHJcbmdhbWVQbGF5TWVudS5oaWRkZW4gPSB0cnVlO1xyXG5nYW1lQ29udGVudC5oaWRkZW4gPSB0cnVlO1xyXG5jdXJyZW50R2FtZVNjb3JlLmhpZGRlbiA9IHRydWU7XHJcblxyXG5zdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgc3RhcnRNZW51LmhpZGRlbiA9IHRydWU7XHJcbiAgZ2FtZVBsYXlNZW51LmhpZGRlbiA9IGZhbHNlO1xyXG4gIGdhbWVDb250ZW50LmhpZGRlbiA9IGZhbHNlO1xyXG4gIGdhbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG59KTtcclxuXHJcbi8vIFdoZW4gdXNlciBwcmVzcyBhIGJ1dHRvbiBwbGF5R2FtZVxyXG5mb3IgKGxldCBlYWNoQnRuIG9mIGRyYXdCdXR0b24pIHtcclxuICBlYWNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgY3VycmVudEdhbWVTY29yZS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIGN1cnJlbnRHYW1lU2NvcmUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVCb3JkZXJcIik7XHJcbiAgICBjdXJyZW50R2FtZVNjb3JlLmNsYXNzTGlzdC5hZGQoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG4gICAgaWYgKHBsYXllclNjb3JlID09PSA1IHx8IGNvbXB1dGVyU2NvcmUgPT09IDUpIHtcclxuICAgICAgZWFjaEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1c2VySW5wdXQgPSBlYWNoQnRuLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7IC8vIGdpdmVzIHRoZSBuYW1lIG9mIHVzZXJJbnB1dFxyXG4gICAgICBwbGF5R2FtZSgpOyAvL2EgdmFyaWFibGUgdGhhdCBoYXMgbm90IGJlZW4gZGVjbGFyZWQsIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZWNvbWUgYSBHTE9CQUwgdmFyaWFibGUuXHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIHBsYXkgYSBzaW5nbGUgcm91bmRcclxuZnVuY3Rpb24gZ2FtZUxvZ2ljKHBsYXllckRyYXcsIGNvbXB1dGVyRHJhdykge1xyXG4gIGlmIChcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInJvY2tcIiAmJiBjb21wdXRlckRyYXcgPT09IFwicm9ja1wiKSB8fFxyXG4gICAgKHBsYXllckRyYXcgPT09IFwicGFwZXJcIiAmJiBjb21wdXRlckRyYXcgPT09IFwicGFwZXJcIikgfHxcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInNjaXNzb3JzXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInNjaXNzb3JzXCIpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gXCJSb3VuZCBEcmF3XCI7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInJvY2tcIiAmJiBjb21wdXRlckRyYXcgPT09IFwicGFwZXJcIikgfHxcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInBhcGVyXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInNjaXNzb3JzXCIpIHx8XHJcbiAgICAocGxheWVyRHJhdyA9PT0gXCJzY2lzc29yc1wiICYmIGNvbXB1dGVyRHJhdyA9PT0gXCJyb2NrXCIpXHJcbiAgKSB7XHJcbiAgICBjb21wdXRlclNjb3JlKys7XHJcbiAgICByZXR1cm4gXCJDb21wdXRlciBXaW5zXCI7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInJvY2tcIiAmJiBjb21wdXRlckRyYXcgPT09IFwic2Npc3NvcnNcIikgfHxcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInBhcGVyXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInJvY2tcIikgfHxcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInNjaXNzb3JzXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInBhcGVyXCIpXHJcbiAgKSB7XHJcbiAgICBwbGF5ZXJTY29yZSsrO1xyXG4gICAgcmV0dXJuIFwiUGxheWVyIFdpbnNcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiUGxlYXNlIGVudGVyIGEgY29ycmVjdCB2YWx1ZSBmcm9tIHRoZSBvcHRpb24gZ2l2ZW4gOiBSb2NrIHwgUGFwZXIgfCBTY2lzc29yc1wiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGxheUdhbWUoKSB7XHJcbiAgcm91bmRQbGF5ZWQrKztcclxuICBlYWNoUm91bmRTY29yZSgpO1xyXG4gIGdhbWVDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG5cclxuICBpZiAocGxheWVyU2NvcmUgPT09IDUgfHwgY29tcHV0ZXJTY29yZSA9PT0gNSkge1xyXG4gICAgZmluYWxTY29yZSgpO1xyXG4gICAgcmVzdGFydEdhbWUoKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coYFBsYXllciAgU2NvcmUgJHtwbGF5ZXJTY29yZX1gKTtcclxuICBjb25zb2xlLmxvZyhgQ29tcHV0ZXIgU2NvcmUgJHtjb21wdXRlclNjb3JlfWApO1xyXG4gIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYCk7XHJcbiAgY29uc29sZS5sb2coYFBsYXllciBTZWxlY3RlZCAke3VzZXJJbnB1dH1gKTtcclxuICBjb25zb2xlLmxvZyhgQ29tcHV0ZXIgU2VsZWN0ZWQgJHtjb21wdXRlcklucHV0fWApO1xyXG4gIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYCk7XHJcbiAgY29uc29sZS5sb2cocm91bmRQbGF5ZWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYWNoUm91bmRTY29yZSgpIHtcclxuICBjb21wdXRlcklucHV0ID0gY29tcHV0ZXJHdWVzcygpO1xyXG5cclxuICByb3VuZE51bWJlci50ZXh0Q29udGVudCA9IGBSb3VuZCAke3JvdW5kUGxheWVkfSBgO1xyXG4gIGN1cnJlbnRHYW1lU2NvcmUuYXBwZW5kKHJvdW5kTnVtYmVyKTtcclxuXHJcbiAgcm91bmRSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX3N0YXR1c1wiKTtcclxuICByb3VuZFJlc3VsdC50ZXh0Q29udGVudCA9IGBSb3VuZCBTdGF0dXMgOiAke2dhbWVMb2dpYyhcclxuICAgIHVzZXJJbnB1dCxcclxuICAgIGNvbXB1dGVySW5wdXRcclxuICApfSBgO1xyXG4gIGN1cnJlbnRHYW1lU2NvcmUuYXBwZW5kKHJvdW5kUmVzdWx0KTtcclxuXHJcbiAgcm91bmREcmF3LmNsYXNzTGlzdC5hZGQoXCJnYW1lX19kZXRhaWxzX19kcmF3c1wiKTtcclxuICByb3VuZERyYXcudGV4dENvbnRlbnQgPSBgICR7Y2FwaXRhbExldHRlcih1c2VySW5wdXQpfSAgOiAke2NhcGl0YWxMZXR0ZXIoXHJcbiAgICBjb21wdXRlcklucHV0XHJcbiAgKX1gO1xyXG4gIGN1cnJlbnRHYW1lU2NvcmUuYXBwZW5kKHJvdW5kRHJhdyk7XHJcblxyXG4gIHJvdW5kU2NvcmUuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX2VhY2hSb3VuZFNjb3JlXCIpO1xyXG4gIHJvdW5kU2NvcmUudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJTY29yZX0gOiAke2NvbXB1dGVyU2NvcmV9YDtcclxuICBjdXJyZW50R2FtZVNjb3JlLmFwcGVuZChyb3VuZFNjb3JlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluYWxTY29yZSgpIHtcclxuICByZXNldEdhbWVTY29yZS5hcHBlbmQoZW5kR2FtZVRleHQpO1xyXG4gIHJlc2V0R2FtZVNjb3JlLmFwcGVuZChlbmRHYW1lUmVzdWx0KTtcclxuICByZXNldEdhbWVTY29yZS5hcHBlbmQocmVzdGFydEdhbWVEaXYpO1xyXG5cclxuICBpZiAocGxheWVyU2NvcmUgPiBjb21wdXRlclNjb3JlKSB7XHJcbiAgICBlbmRHYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiSHVycmF5LCBZb3UgV29uICFcIjtcclxuICAgIGVuZEdhbWVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX3dpblwiKTtcclxuICAgIGVuZEdhbWVSZXN1bHQudGV4dENvbnRlbnQgPSBgU2VlbXMgbGlrZSB5b3UgYXJlIGEgR2lmdGVkIFRhbGVudC5gO1xyXG4gIH0gZWxzZSBpZiAocGxheWVyU2NvcmUgPT09IGNvbXB1dGVyU2NvcmUpIHtcclxuICAgIGVuZEdhbWVUZXh0LnRleHRDb250ZW50ID0gXCIgQSBEcmF3ICFcIjtcclxuICAgIGVuZEdhbWVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX2RyYXdcIik7XHJcbiAgICBlbmRHYW1lUmVzdWx0LnRleHRDb250ZW50ID0gYCBPaCBTbmFwLCBTZWVtcyBsaWtlIGEgdGllLmA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVuZEdhbWVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX2xvc3RcIik7XHJcbiAgICBlbmRHYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiWW91IExvc3QgIVwiO1xyXG4gICAgZW5kR2FtZVJlc3VsdC50ZXh0Q29udGVudCA9IGBHdWVzcyB0aGF0IHlvdSBhcmUgbm90IGV2ZW4gYmV0dGVyIHRoYW4gYSBCT1QuYDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xyXG4gIHJlc3RhcnRHYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJnYW1lX19kZXRhaWxzX19yZXN0YXJ0XCIpO1xyXG4gIC8vIHJlc3RhcnRHYW1lRGl2LmFwcGVuZChyZXN0YXJ0R2FtZUJ1dHRvbik7XHJcblxyXG4gIHNjb3JlTWVudS5jbGFzc0xpc3QuYWRkKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICBzY29yZU1lbnUuY2xhc3NMaXN0LmFkZChcImdhbWVPdmVyXCIpO1xyXG5cclxuICBnYW1lUGxheU1lbnUuaGlkZGVuID0gdHJ1ZTtcclxuICBjdXJyZW50R2FtZVNjb3JlLmhpZGRlbiA9IHRydWU7XHJcbiAgcmVzZXRHYW1lU2NvcmUuaGlkZGVuID0gZmFsc2U7XHJcblxyXG4gIHJlc2V0R2FtZVNjb3JlLmNsYXNzTGlzdC5hZGQoXCJyZXNldF9fYm9yZGVyXCIpO1xyXG4gIHJlc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJnYW1lX19kZXRhaWxzX19yZXN0YXJ0X19idXR0b25cIik7XHJcbiAgcmVzdGFydEdhbWVCdXR0b24udGV4dENvbnRlbnQgPSBgUmVzdGFydGA7XHJcbiAgcmVzdGFydEdhbWVEaXYuYXBwZW5kKHJlc3RhcnRHYW1lQnV0dG9uKTtcclxuXHJcbiAgcmVzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICByZXNldEdhbWVTY29yZS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgY3VycmVudEdhbWVTY29yZS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIGdhbWVQbGF5TWVudS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIGN1cnJlbnRHYW1lU2NvcmUuY2xhc3NMaXN0LmFkZChcImhpZGVCb3JkZXJcIik7XHJcblxyXG4gICAgY3VycmVudEdhbWVTY29yZS5jbGFzc0xpc3QucmVtb3ZlKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICAgIHNjb3JlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiZ2FtZU92ZXJcIik7XHJcbiAgICBzY29yZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcbiAgICBnYW1lQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICAgIHJlc2V0R2FtZVNjb3JlLmNsYXNzTGlzdC5yZW1vdmUoXCJyZXNldF9fYm9yZGVyXCIpO1xyXG5cclxuICAgIHBsYXllclNjb3JlID0gMDtcclxuICAgIGNvbXB1dGVyU2NvcmUgPSAwO1xyXG4gICAgcm91bmRQbGF5ZWQgPSAwO1xyXG4gICAgcm91bmROdW1iZXIudGV4dENvbnRlbnQgPSBcIlJvdW5kIERldGFpbHNcIjtcclxuICAgIHJvdW5kRHJhdy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICByb3VuZFNjb3JlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIHJvdW5kUmVzdWx0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGVuZEdhbWVSZXN1bHQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBidG4uZm9yRWFjaChlYWNoQnRuID0+IHtcclxuLy8gICAgIGVhY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKHBsYXllclNjb3JlID09PSA1IHx8IGNvbXB1dGVyU2NvcmUgPT09IDUpIHtcclxuLy8gICAgICAgICAgICAgZWFjaEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICB1c2VySW5wdXQgPSBlYWNoQnRuLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7IC8vIGdpdmVzIHRoZSBuYW1lIG9mIHVzZXJJbnB1dC8vYSB2YXJpYWJsZSB0aGF0IGhhcyBub3QgYmVlbiBkZWNsYXJlZCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlY29tZSBhIEdMT0JBTCB2YXJpYWJsZS5cclxuLy8gICAgICAgICAgICAgcGxheUdhbWUoKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyB9KVxyXG5cclxuLy8gcmFuZG9tIGNvbXB1dGVyR3Vlc3MgZ2VuZXJhdG9yXHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuKiB7XG4gIGNvbG9yOiAjYTk5MjdkO1xuICBmb250LWZhbWlseTogXCJSdWJpayBJc29cIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2lsa3NjcmVlblwiLCBjdXJzaXZlO1xuICBmb250LWZhbWlseTogXCJBY21lXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiBcIkFrcm9uaW1cIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiS2FsYW1cIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU3BlY3RyYWxcIiwgc2VyaWY7XG4gIGJvcmRlci1jb2xvcjogI2E5OTI3ZDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjMzM2I7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyYjZhNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBib3JkZXItdG9wOiAzLjVweCBzb2xpZCAjYTE4OTc2O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJSdWJpayBJc29cIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2lsa3NjcmVlblwiLCBjdXJzaXZlO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTRhMDg1O1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cblxuLnN0YXJ0X19idXR0b24ge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMzMzYjtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgSXNvXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGtzY3JlZW5cIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICMxNGEwODU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5zdGFydCB7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3RhcnRfX2J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzE0YTA4NTtcbn1cbi5zdGFydF9fYnV0dG9uID4gYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIElzb1wiLCBjdXJzaXZlO1xuICBmb250LWZhbWlseTogXCJTaWxrc2NyZWVuXCIsIGN1cnNpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zdGFydF9fYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjMTRhMDg1O1xufVxuXG4uZ2FtZV9fZGVzaWduX19yaWdodCwgLmdhbWVfX2Rlc2lnbl9fbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tdG9wOiA1LjVweDtcbn1cblxuLmdhbWVfX2hlYWRlciB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBib3JkZXItdG9wOiAzLjVweCBzb2xpZCAjYTE4OTc2O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJSdWJpayBJc29cIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2lsa3NjcmVlblwiLCBjdXJzaXZlO1xufVxuLmdhbWVfX2hlYWRlciA+IGltZyB7XG4gIGhlaWdodDogOTVweDtcbiAgd2lkdGg6IDk1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7XG4gIC5nYW1lX19oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIC5nYW1lX19oZWFkZXIgPiBpbWcge1xuICAgIGhlaWdodDogNjVweDtcbiAgICB3aWR0aDogNjVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5nYW1lX19oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICAuZ2FtZV9faGVhZGVyID4gaW1nIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ2FtZV9faGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZ2FtZV9faGVhZGVyID4gaW1nIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG5cbi5nYW1lX19kZXNpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxNGEwODU7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLmdhbWVfX2Rlc2lnbiA+IGltZyB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTBlbSkge1xuICAuZ2FtZV9fZGVzaWduIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuZ2FtZV9fZGVzaWduID4gaW1nIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuZ2FtZV9fZGVzaWduIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuZ2FtZV9fZGVzaWduID4gaW1nIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ2FtZV9fZGVzaWduIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgLmdhbWVfX2Rlc2lnbiA+IGltZyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuXG4uZ2FtZV9fYnV0dG9uX19zdHlsZSB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMzNiO1xuICBmb250LWZhbWlseTogXCJSdWJpayBJc29cIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2lsa3NjcmVlblwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMTRhMDg1O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uZ2FtZV9fYXJyb3cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nYW1lX19idXR0b25fX291dGVyX19yb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZ2FtZV9fYnV0dG9uX19vdXRlcl9fcm9ja19fYXJyb3cge1xuICBtYXgtaGVpZ2h0OiA5MHB4O1xuICBtYXgtd2lkdGg6IDkwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTBlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19vdXRlcl9fcm9ja19fYXJyb3cge1xuICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19vdXRlcl9fcm9ja19fYXJyb3cge1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19vdXRlcl9fcm9ja19fYXJyb3cge1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG4uZ2FtZV9fYnV0dG9uX19pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmdhbWVfX2J1dHRvbl9faW5uZXJfX3BhcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZ2FtZV9fYnV0dG9uX19pbm5lcl9fcGFwZXJfX2Fycm93IHtcbiAgbWF4LWhlaWdodDogOTBweDtcbiAgbWF4LXdpZHRoOiA5MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9faW5uZXJfX3BhcGVyX19hcnJvdyB7XG4gICAgbWF4LWhlaWdodDogNzVweDtcbiAgICBtYXgtd2lkdGg6IDc1cHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5nYW1lX19idXR0b25fX2lubmVyX19wYXBlcl9fYXJyb3cge1xuICAgIG1heC1oZWlnaHQ6IDU1cHg7XG4gICAgbWF4LXdpZHRoOiA1NXB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19pbm5lcl9fcGFwZXJfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xuICAgIG1heC13aWR0aDogMzVweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuLmdhbWVfX2J1dHRvbl9faW5uZXJfX3NjaXNzb3JzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZ2FtZV9fYnV0dG9uX19pbm5lcl9fc2Npc3NvcnNfX2Fycm93IHtcbiAgbWF4LWhlaWdodDogOTBweDtcbiAgbWF4LXdpZHRoOiA5MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9faW5uZXJfX3NjaXNzb3JzX19hcnJvdyB7XG4gICAgbWF4LWhlaWdodDogNzVweDtcbiAgICBtYXgtd2lkdGg6IDc1cHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5nYW1lX19idXR0b25fX2lubmVyX19zY2lzc29yc19fYXJyb3cge1xuICAgIG1heC1oZWlnaHQ6IDU1cHg7XG4gICAgbWF4LXdpZHRoOiA1NXB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19pbm5lcl9fc2Npc3NvcnNfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xuICAgIG1heC13aWR0aDogMzVweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuLmdhbWVfX2J1dHRvbl9fc3R5bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICMxNGEwODU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuLmdhbWVfX2J1dHRvbl9fc3R5bGU6YWN0aXZlIHtcbiAgdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9fc3R5bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19zdHlsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19zdHlsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cblxuLmdhbWVfX2RldGFpbHNfX3Jlc3RhcnRfX2J1dHRvbiB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMzNiO1xuICBmb250LWZhbWlseTogXCJSdWJpayBJc29cIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2lsa3NjcmVlblwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDNyZW07XG4gIGJvcmRlcjogMi41cHggc29saWQgIzE0YTA4NTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmdhbWVfX2RldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTBlbSkge1xuICAuZ2FtZV9fZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLmdhbWVfX2RldGFpbHMge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ2FtZV9fZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuLmdhbWVfX2RldGFpbHNfX3Njb3JlYm9hcmQge1xuICBib3JkZXItdG9wOiAzLjVweCBzb2xpZCAjYTE4OTc2O1xuICBib3JkZXItYm90dG9tOiAzLjVweCBzb2xpZCAjYTE4OTc2O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2RldGFpbHNfX3Njb3JlYm9hcmQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cbi5nYW1lX19kZXRhaWxzX19yb3VuZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTRhMDg1O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4uZ2FtZV9fZGV0YWlsc19fcmVzdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdhbWVfX2RldGFpbHNfX3Jlc3RhcnRfX2J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzE0YTA4NTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59XG4uZ2FtZV9fZGV0YWlsc19fcmVzdGFydF9fYnV0dG9uOmFjdGl2ZSB7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmdhbWVfX3Njb3JlX19jdXJyZW50IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uZ2FtZU92ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gIC8qIHRvcDogMzMlOyAqL1xuICAvKiBib3JkZXI6IDMuNXB4IHNvbGlkICNhMTg5NzY7ICovXG4gIGxlZnQ6IDElO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDA7XG59XG5cbi5yZXNldF9fYm9yZGVyIHtcbiAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcbiAgYm9yZGVyLWJvdHRvbTogMy41cHggc29saWQgI2ExODk3NjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLmhpZGVCb3JkZXIge1xuICBib3JkZXItdG9wOiAwO1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4ubWFpblRyYW5zaXRpb25JbiB7XG4gIGFuaW1hdGlvbjogdHJhbnNpdGlvbkluIDAuNzVzO1xufVxuXG5Aa2V5ZnJhbWVzIHRyYW5zaXRpb25JbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9nbG9iYWxzL19ib2lsZXJwbGF0ZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL3N0YXJ0QnRuLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbXBvbmVudHMvaGVhZGVyRGVzaWduLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3V0aWwvYnJlYWtwb2ludHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9nYW1lQnRuLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbXBvbmVudHMvc2NvcmVEZXRhaWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNMRjs7QURRQTtFQUdFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7QUNQRjs7QURVQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUEY7O0FDckRBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBRHdERjs7QUN0REE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUR5REY7QUN2REU7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Q0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUwrVko7QUc1WEU7RUV5QkE7SUFNSSxhQUFBO0VMaVdKO0FBQ0Y7QUsvVkU7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0FMaVdKO0FLL1ZFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FMaVdKO0FLN1ZNO0VBQ0UseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0FMK1ZSO0FLN1ZNO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0FMK1ZSOztBS3pWQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUw0VkY7O0FLelZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUw0VkY7O0FLelZBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBTDRWRjs7QUt6VkE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUw0VkY7O0FBcmJBO0VBQ0UsNkJBQUE7QUF3YkY7O0FBcmJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUF3YkY7RUFyYkE7SUFDRSxVQUFBO0lBQ0EscUJBQUE7RUF1YkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi8vICosXFxyXFxuLy8gKjo6YmVmb3JlLFxcclxcbi8vICo6OmFmdGVyIHtcXHJcXG4vLyAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuLy8gfVxcclxcblxcclxcbioge1xcclxcbiAgY29sb3I6ICNhOTkyN2Q7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrIElzb1xcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNpbGtzY3JlZW5cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBY21lXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWtyb25pbVxcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkthbGFtXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWxcXFwiLCBzZXJpZjtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2E5OTI3ZDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjMzM2I7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJiNmE1O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAvLyBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAycHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcclxcbiAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrIElzb1xcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNpbGtzY3JlZW5cXFwiLCBjdXJzaXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE0YTA4NTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXHJcXG59XFxyXFxuXCIsXCJAZm9yd2FyZCBcXFwiZ2xvYmFsc1xcXCI7XFxyXFxuQGZvcndhcmQgXFxcImNvbXBvbmVudHNcXFwiO1xcclxcblxcclxcbi5tYWluVHJhbnNpdGlvbkluIHtcXHJcXG4gIGFuaW1hdGlvbjogdHJhbnNpdGlvbkluIDAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRyYW5zaXRpb25JbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIlYnV0dG9uU3R5bGUge1xcclxcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMzNiO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpayBJc29cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTaWxrc2NyZWVuXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgIzE0YTA4NTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbi5zdGFydCB7XFxyXFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAmX19idXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICMxNGEwODU7XFxyXFxuICAgIEBleHRlbmQgJWJ1dHRvblN0eWxlO1xcclxcblxcclxcbiAgICAmID4gYSB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJSdWJpayBJc29cXFwiLCBjdXJzaXZlO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiU2lsa3NjcmVlblxcXCIsIGN1cnNpdmU7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjMTRhMDg1O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbC9cXFwiIGFzIHVsO1xcclxcblxcclxcbkBtaXhpbiBoZWFkZXJTdHlsZSgkaGVpZ2h0LCAkd2lkdGgsICRwYWRkaW5nKSB7XFxyXFxuICBoZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICB3aWR0aDogJHdpZHRoO1xcclxcbiAgcGFkZGluZzogJHBhZGRpbmc7XFxyXFxufVxcclxcbiVkZXNpZ25TdHlsZSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAycHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1LjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX2hlYWRlciB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gIGJvcmRlci10b3A6IDMuNXB4IHNvbGlkICNhMTg5NzY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpayBJc29cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTaWxrc2NyZWVuXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gICYgPiBpbWcge1xcclxcbiAgICBAaW5jbHVkZSBoZWFkZXJTdHlsZSg5NXB4LCA5NXB4LCA1cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgICYgPiBpbWcge1xcclxcbiAgICAgIEBpbmNsdWRlIGhlYWRlclN0eWxlKDY1cHgsIDY1cHgsIDVweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAmID4gaW1nIHtcXHJcXG4gICAgICBAaW5jbHVkZSBoZWFkZXJTdHlsZSg0NXB4LCA0NXB4LCA1cHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1bC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgJiA+IGltZyB7XFxyXFxuICAgICAgQGluY2x1ZGUgaGVhZGVyU3R5bGUoMjVweCwgMjVweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fZGVzaWduIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE0YTA4NTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXHJcXG4gICYgPiBpbWcge1xcclxcbiAgICBAaW5jbHVkZSBoZWFkZXJTdHlsZSg0NXB4LCA0NXB4LCAwKTtcXHJcXG4gIH1cXHJcXG4gICZfX2xlZnQge1xcclxcbiAgICBAZXh0ZW5kICVkZXNpZ25TdHlsZTtcXHJcXG4gIH1cXHJcXG4gICZfX3JpZ2h0IHtcXHJcXG4gICAgQGV4dGVuZCAlZGVzaWduU3R5bGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSB1bC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgJiA+IGltZyB7XFxyXFxuICAgICAgQGluY2x1ZGUgaGVhZGVyU3R5bGUoMzBweCwgMzBweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgJiA+IGltZyB7XFxyXFxuICAgICAgQGluY2x1ZGUgaGVhZGVyU3R5bGUoMjVweCwgMjVweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAmID4gaW1nIHtcXHJcXG4gICAgICBAaW5jbHVkZSBoZWFkZXJTdHlsZSgyMHB4LCAyMHB4LCA1cHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiJGJyZWFrcG9pbnRzLXVwOiAoXFxyXFxuICBcXFwibWVkaXVtXFxcIjogNDMuNzVlbSxcXHJcXG4gIFxcXCJsYXJnZVxcXCI6IDU2LjI1ZW0sXFxyXFxuICBcXFwieExhcmdlXFxcIjogOTBlbSxcXHJcXG4pO1xcclxcblxcclxcbkBtaXhpbiBicmVha3BvaW50KCRzaXplKSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMtdXAsJHNpemUpKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWwvXFxcIiBhcyB1bDtcXHJcXG5cXHJcXG4lYnV0dG9uU3R5bGUge1xcclxcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMzNiO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpayBJc29cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTaWxrc2NyZWVuXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMTRhMDg1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJ1dHRvblBvc2l0aW9uKCRmbGV4LCAkanVzdGlmeSkge1xcclxcbiAgZGlzcGxheTogJGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fYXJyb3cge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fYnV0dG9uIHtcXHJcXG4gICZfX291dGVyIHtcXHJcXG4gICAgJl9fcm9jayB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgJl9fYXJyb3cge1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogOTBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogNzBweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA3MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSB1bC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogNTBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogNDBweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19pbm5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAmX19wYXBlciB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgJl9fYXJyb3cge1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogOTBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogNzVweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA3NXB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSB1bC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDU1cHg7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogNTVweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogMzVweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNXB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICZfX3NjaXNzb3JzIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAmX19hcnJvdyB7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiA5MHB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA5MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSB1bC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA3NXB4O1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDc1cHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogNTVweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA1NXB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSB1bC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1cHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX3N0eWxlIHtcXHJcXG4gICAgQGV4dGVuZCAlYnV0dG9uU3R5bGU7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjMTRhMDg1O1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcclxcbiAgICB9XFxyXFxuICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICB0b3A6IDEwcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSB1bC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWwvXFxcIiBhcyB1bDtcXHJcXG4lYnV0dG9uU3R5bGUge1xcclxcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMzNiO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpayBJc29cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTaWxrc2NyZWVuXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgIzE0YTA4NTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lX19kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIG1heC13aWR0aDogODAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBAaW5jbHVkZSB1bC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHVsLmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuICAmX19zY29yZWJvYXJkIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMy41cHggc29saWQgI2ExODk3NjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgQGluY2x1ZGUgdWwuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19yb3VuZCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTRhMDg1O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICB9XFxyXFxuICAmX19yZXN0YXJ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICZfX2J1dHRvbiB7XFxyXFxuICAgICAgQGV4dGVuZCAlYnV0dG9uU3R5bGU7XFxyXFxuICAgICAgLy8gbWFyZ2luOiAyMHB4O1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzE0YTA4NTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICB0b3A6IDEwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fc2NvcmVfX2N1cnJlbnQge1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVPdmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxyXFxuICAvKiB0b3A6IDMzJTsgKi9cXHJcXG4gIC8qIGJvcmRlcjogMy41cHggc29saWQgI2ExODk3NjsgKi9cXHJcXG4gIGxlZnQ6IDElO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5yZXNldF9fYm9yZGVyIHtcXHJcXG4gIGJvcmRlci10b3A6IDMuNXB4IHNvbGlkICNhMTg5NzY7XFxyXFxuICBib3JkZXItYm90dG9tOiAzLjVweCBzb2xpZCAjYTE4OTc2O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5oaWRlQm9yZGVyIHtcXHJcXG4gIGJvcmRlci10b3A6IDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJjYXBpdGFsTGV0dGVyIiwic3RyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNvbXB1dGVyR3Vlc3MiLCJyYW5kb21WYWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySW5wdXQiLCJjb21wdXRlcklucHV0IiwicGxheWVyU2NvcmUiLCJjb21wdXRlclNjb3JlIiwicm91bmRQbGF5ZWQiLCJnYW1lUGxheU1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY29yZU1lbnUiLCJzdGFydE1lbnUiLCJnYW1lQ29udGVudCIsImRyYXdCdXR0b24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudEdhbWVTY29yZSIsInJlc2V0R2FtZVNjb3JlIiwicm91bmROdW1iZXIiLCJyb3VuZERyYXciLCJjcmVhdGVFbGVtZW50Iiwicm91bmRSZXN1bHQiLCJyb3VuZFNjb3JlIiwiZW5kR2FtZVRleHQiLCJlbmRHYW1lUmVzdWx0Iiwic3RhcnRHYW1lQnV0dG9uIiwicmVzdGFydEdhbWVCdXR0b24iLCJyZXN0YXJ0R2FtZURpdiIsImhpZGRlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xhc3NMaXN0IiwiYWRkIiwiZWFjaEJ0biIsInJlbW92ZSIsImRpc2FibGVkIiwidGV4dENvbnRlbnQiLCJ0b0xvd2VyQ2FzZSIsInBsYXlHYW1lIiwiZ2FtZUxvZ2ljIiwicGxheWVyRHJhdyIsImNvbXB1dGVyRHJhdyIsImVhY2hSb3VuZFNjb3JlIiwiZmluYWxTY29yZSIsInJlc3RhcnRHYW1lIiwiYXBwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==