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
scoreMenu.hidden = true;
startGameButton.addEventListener("click", e => {
  startMenu.hidden = true;
  gamePlayMenu.hidden = false;
  scoreMenu.hidden = false;
  gameContent.classList.add("mainTransitionIn");
});

// When user press a button playGame
for (let eachBtn of drawButton) {
  eachBtn.addEventListener("click", e => {
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
  font-size: 60px;
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
  display: flex;
  justify-content: center;
  font-size: 3rem;
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
  padding: 20px;
}
@media (max-width: 43.75em) {
  .game__header {
    font-size: 2rem;
  }
  .game__header > img {
    height: 40px;
    width: 40px;
    padding: 10px;
  }
}
@media (min-width: 44em) and (max-width: 89em) {
  .game__header {
    font-size: 2.5rem;
  }
  .game__header > img {
    height: 65px;
    width: 65px;
    padding: 10px;
  }
}

.game__design {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
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
@media (max-width: 43.75em) {
  .game__design {
    font-size: 1.2rem;
  }
  .game__design > img {
    height: 25px;
    width: 25px;
    padding: 5px;
  }
}
@media (min-width: 44em) and (max-width: 89em) {
  .game__design {
    font-size: 2rem;
  }
  .game__design > img {
    height: 45px;
    width: 45px;
    padding: 10px;
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
@media (max-width: 43.75em) {
  .game__button__outer__rock__arrow {
    max-height: 55px;
    max-width: 55px;
    margin-top: 40px;
    margin-bottom: 5px;
  }
}
@media (min-width: 44em) and (max-width: 89em) {
  .game__button__outer__rock__arrow {
    max-height: 75px;
    max-width: 75px;
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
@media (max-width: 43.75em) {
  .game__button__inner__paper__arrow {
    max-height: 45px;
    max-width: 45px;
    margin-top: 40px;
    margin-bottom: 5px;
  }
}
@media (min-width: 44em) and (max-width: 89em) {
  .game__button__inner__paper__arrow {
    max-height: 75px;
    max-width: 75px;
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
@media (max-width: 43.75em) {
  .game__button__inner__scissors__arrow {
    max-height: 45px;
    max-width: 45px;
    margin-top: 40px;
    margin-bottom: 5px;
  }
}
@media (min-width: 44em) and (max-width: 89em) {
  .game__button__inner__scissors__arrow {
    max-height: 75px;
    max-width: 75px;
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
@media (max-width: 43.75em) {
  .game__button__style {
    font-size: 1.7rem;
  }
}
@media (min-width: 44em) and (max-width: 89em) {
  .game__button__style {
    font-size: 2.5rem;
  }
}

.game__details__restart__button {
  padding: 0px 10px;
  background-color: #22333b;
  font-family: "Rubik Iso", cursive;
  font-family: "Silkscreen", cursive;
  font-size: 60px;
  border: 2.5px solid #14a085;
  border-radius: 20px;
}

.game__details {
  display: flex;
  justify-content: center;
  padding-top: 5px;
  text-align: center;
  font-size: 2.5rem;
  border-top: 3.5px solid #a18976;
  border-bottom: 3.5px solid #a18976;
  border-radius: 50px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
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
@media (max-width: 43.75em) {
  .game__details {
    margin-top: 40px;
    font-size: 1.5rem;
  }
}
@media (min-width: 44em) and (max-width: 89em) {
  .game__details {
    font-size: 2.2rem;
  }
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
  border: 3.5px solid #a18976;
  padding: 20px;
  border-radius: 50px;
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
}`, "",{"version":3,"sources":["webpack://./src/sass/globals/_boilerplate.scss","webpack://./src/sass/style.scss","webpack://./src/sass/components/startBtn.scss","webpack://./src/sass/components/headerDesign.scss","webpack://./src/sass/components/gameBtn.scss","webpack://./src/sass/components/scoreDetail.scss"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n}\r\n\r\n// *,\r\n// *::before,\r\n// *::after {\r\n//   box-sizing: inherit;\r\n// }\r\n\r\n* {\r\n  color: #a9927d;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  font-family: \"Acme\", sans-serif;\r\n  font-family: \"Akronim\", cursive;\r\n  font-family: \"Kalam\", cursive;\r\n  font-family: \"Spectral\", serif;\r\n  border-color: #a9927d;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: #22333b;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  background-color: #c2b6a5;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\nh1 {\r\n  // display: flex;\r\n  // justify-content: center;\r\n  margin-top: 2px;\r\n  text-align: center;\r\n  border-radius: 11px;\r\n  border-top: 3.5px solid #a18976;\r\n  border-radius: 50px;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n}\r\n\r\nh2 {\r\n  font-size: 30px;\r\n  text-align: center;\r\n  border-radius: 7px;\r\n  border-bottom: 2px solid #14a085;\r\n  margin-left: 7px;\r\n  margin-right: 7px;\r\n}\r\n","@forward \"globals\";\r\n@forward \"components\";\r\n\r\n.mainTransitionIn {\r\n  animation: transitionIn 0.75s;\r\n}\r\n\r\n@keyframes transitionIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: rotateX(-10deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: rotateX(0);\r\n  }\r\n}\r\n","%buttonStyle {\r\n  padding: 0px 10px;\r\n  background-color: #22333b;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  font-size: 60px;\r\n  border: 2.5px solid #14a085;\r\n  border-radius: 20px;\r\n}\r\n.start {\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  position: relative;\r\n\r\n  &__button {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: #000000;\r\n    box-shadow: 0px 0px 15px 0px #14a085;\r\n    @extend %buttonStyle;\r\n\r\n    & > a {\r\n      font-family: \"Rubik Iso\", cursive;\r\n      font-family: \"Silkscreen\", cursive;\r\n      text-decoration: none;\r\n    }\r\n    &:hover {\r\n      background-color: #ffffff;\r\n      box-shadow: 0px 0px 15px 0px #14a085;\r\n    }\r\n  }\r\n}\r\n","@mixin headerStyle($height, $width, $padding) {\r\n  height: $height;\r\n  width: $width;\r\n  padding: $padding;\r\n}\r\n\r\n// $breakpoints-up: (\r\n//   \"medium\": 43.75em,\r\n//   \"large\": 56.25em,\r\n//   \"xLarge\": 90em,\r\n// );\r\n\r\n// @mixin breakpoint($size) {\r\n//   @media (min-width: map-get($breakpoints-up,$size)) {\r\n//     @content;\r\n//   }\r\n// }\r\n\r\n%designStyle {\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n  padding-top: 2px;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  margin-top: 5.5px;\r\n}\r\n\r\n.game__header {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 3rem;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  text-align: center;\r\n  border-radius: 11px;\r\n  border-top: 3.5px solid #a18976;\r\n  border-radius: 50px;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n\r\n  & > img {\r\n    @include headerStyle(95px, 95px, 20px);\r\n  }\r\n\r\n  @media (max-width: 43.75em) {\r\n    font-size: 2rem;\r\n    & > img {\r\n      @include headerStyle(40px, 40px, 10px);\r\n    }\r\n  }\r\n  @media (min-width: 44em) and (max-width: 89em) {\r\n    font-size: 2.5rem;\r\n    & > img {\r\n      @include headerStyle(65px, 65px, 10px);\r\n    }\r\n  }\r\n}\r\n\r\n.game__design {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n  border-radius: 7px;\r\n  border-bottom: 2px solid #14a085;\r\n  margin-left: 7px;\r\n  margin-right: 7px;\r\n  & > img {\r\n    @include headerStyle(45px, 45px, 0);\r\n  }\r\n  &__left {\r\n    @extend %designStyle;\r\n  }\r\n  &__right {\r\n    @extend %designStyle;\r\n  }\r\n\r\n  @media (max-width: 43.75em) {\r\n    font-size: 1.2rem;\r\n    & > img {\r\n      @include headerStyle(25px, 25px, 5px);\r\n    }\r\n  }\r\n  @media (min-width: 44em) and (max-width: 89em) {\r\n    & > img {\r\n      @include headerStyle(45px, 45px, 10px);\r\n    }\r\n    font-size: 2rem;\r\n  }\r\n}\r\n","%buttonStyle {\r\n  padding: 0px 10px;\r\n  background-color: #22333b;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  font-size: 3.5rem;\r\n  border: 2.5px solid #14a085;\r\n  border-radius: 20px;\r\n}\r\n\r\n@mixin buttonPosition($flex, $justify) {\r\n  display: $flex;\r\n  justify-content: $justify;\r\n}\r\n\r\n.game__arrow {\r\n  text-align: center;\r\n}\r\n\r\n.game__button {\r\n  &__outer {\r\n    &__rock {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      &__arrow {\r\n        max-height: 90px;\r\n        max-width: 90px;\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n        @media (max-width: 43.75em) {\r\n          max-height: 55px;\r\n          max-width: 55px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @media (min-width: 44em) and (max-width: 89em) {\r\n          max-height: 75px;\r\n          max-width: 75px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &__inner {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    &__paper {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      &__arrow {\r\n        max-height: 90px;\r\n        max-width: 90px;\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n        @media (max-width: 43.75em) {\r\n          max-height: 45px;\r\n          max-width: 45px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @media (min-width: 44em) and (max-width: 89em) {\r\n          max-height: 75px;\r\n          max-width: 75px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n      }\r\n    }\r\n    &__scissors {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      &__arrow {\r\n        max-height: 90px;\r\n        max-width: 90px;\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n        @media (max-width: 43.75em) {\r\n          max-height: 45px;\r\n          max-width: 45px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n        @media (min-width: 44em) and (max-width: 89em) {\r\n          max-height: 75px;\r\n          max-width: 75px;\r\n          margin-top: 40px;\r\n          margin-bottom: 5px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &__style {\r\n    @extend %buttonStyle;\r\n    &:hover {\r\n      background-color: #000000;\r\n      box-shadow: 0px 0px 15px 0px #14a085;\r\n      transform: translateY(4px);\r\n    }\r\n    &:active {\r\n      top: 10px;\r\n      background-color: #ffffff;\r\n    }\r\n    @media (max-width: 43.75em) {\r\n      font-size: 1.7rem;\r\n    }\r\n    @media (min-width: 44em) and (max-width: 89em) {\r\n      font-size: 2.5rem;\r\n    }\r\n  }\r\n}\r\n","%buttonStyle {\r\n  padding: 0px 10px;\r\n  background-color: #22333b;\r\n  font-family: \"Rubik Iso\", cursive;\r\n  font-family: \"Silkscreen\", cursive;\r\n  font-size: 60px;\r\n  border: 2.5px solid #14a085;\r\n  border-radius: 20px;\r\n}\r\n\r\n.game__details {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 5px;\r\n  text-align: center;\r\n  font-size: 2.5rem;\r\n  border-top: 3.5px solid #a18976;\r\n  border-bottom: 3.5px solid #a18976;\r\n  border-radius: 50px;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n  margin-top: 20px;\r\n  &__round {\r\n    border-bottom: 2px solid #14a085;\r\n    border-radius: 7px;\r\n  }\r\n  &__restart {\r\n    display: flex;\r\n    justify-content: center;\r\n    &__button {\r\n      @extend %buttonStyle;\r\n      // margin: 20px;\r\n      &:hover {\r\n        background-color: #000000;\r\n        box-shadow: 0px 0px 15px 0px #14a085;\r\n        transform: translateY(4px);\r\n      }\r\n      &:active {\r\n        top: 10px;\r\n        background-color: #ffffff;\r\n      }\r\n    }\r\n  }\r\n  @media (max-width: 43.75em) {\r\n    margin-top: 40px;\r\n    font-size: 1.5rem;\r\n  }\r\n  @media (min-width: 44em) and (max-width: 89em) {\r\n    font-size: 2.2rem;\r\n  }\r\n}\r\n\r\n.game__score__current {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.gameOver {\r\n  display: grid;\r\n  place-items: center;\r\n  align-content: center;\r\n  min-height: 100vh;\r\n  /* position: absolute; */\r\n  /* top: 33%; */\r\n  /* border: 3.5px solid #a18976; */\r\n  left: 1%;\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  border: 0;\r\n}\r\n\r\n.reset__border {\r\n  border: 3.5px solid #a18976;\r\n  padding: 20px;\r\n  border-radius: 50px;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLGVBQWU7QUFDZixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNlVBQTZVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxhQUFhLGNBQWMsY0FBYyxPQUFPLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxhQUFhLGNBQWMsY0FBYyxPQUFPLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLGFBQWEsY0FBYyxjQUFjLE9BQU8sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxhQUFhLGNBQWMsY0FBYyxPQUFPLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxhQUFhLGNBQWMsY0FBYyxPQUFPLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLGFBQWEsY0FBYyxjQUFjLE9BQU8sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vc3JjL2NhcGl0YWxpemVMZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL3NyYy9jb21wdXRlckd1ZXNzLmpzIiwid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzPzRkMzciLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUbyBDYXBpdGFsaXplIHRoZSBsZXR0ZXJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FwaXRhbExldHRlcihzdHIpIHtcclxuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG59XHJcbiIsIi8vIGltcG9ydCB7IGNhbWVsQ2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuLy8gaW1wb3J0IGljb24gZnJvbSBcIi4vYXNzZXRzL0Fycm93RG93bi5wbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVyR3Vlc3MoKSB7XHJcbiAgY29uc3QgcmFuZG9tVmFsdWUgPSBbXCJyb2NrXCIsIFwicGFwZXJcIiwgXCJzY2lzc29yc1wiXTtcclxuICBsZXQgY29tcHV0ZXJHdWVzcyA9XHJcbiAgICByYW5kb21WYWx1ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5kb21WYWx1ZS5sZW5ndGgpXTtcclxuICBjb25zb2xlLmxvZyhjb21wdXRlckd1ZXNzKTtcclxuICByZXR1cm4gY29tcHV0ZXJHdWVzcztcclxufVxyXG4iLCJpbXBvcnQgXCIuL3Nhc3Mvc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgY29tcHV0ZXJHdWVzcyBmcm9tIFwiLi9jb21wdXRlckd1ZXNzXCI7XHJcbmltcG9ydCBjYXBpdGFsTGV0dGVyIGZyb20gXCIuL2NhcGl0YWxpemVMZXR0ZXJcIjtcclxuXHJcbmxldCB1c2VySW5wdXQ7XHJcbmxldCBjb21wdXRlcklucHV0O1xyXG5cclxuLy8gU2NvcmVcclxubGV0IHBsYXllclNjb3JlID0gMDtcclxubGV0IGNvbXB1dGVyU2NvcmUgPSAwO1xyXG5sZXQgcm91bmRQbGF5ZWQgPSAwO1xyXG5cclxuLy9NZW51XHJcbmNvbnN0IGdhbWVQbGF5TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZV9fbWVudVwiKTtcclxuY29uc3Qgc2NvcmVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lX19kZXRhaWxzXCIpO1xyXG5sZXQgc3RhcnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydFwiKTtcclxuXHJcbi8vIEhUTUwgRWxlbWVudCBTZWxlY3Rpb24gLy9cclxuY29uc3QgZ2FtZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVcIik7XHJcbmNvbnN0IGRyYXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWVfX2J1dHRvbl9fc3R5bGVcIik7XHJcbmNvbnN0IGN1cnJlbnRHYW1lU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVfX2RldGFpbHNfX3Njb3JlYm9hcmRcIik7XHJcbmNvbnN0IHJlc2V0R2FtZVNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lX19kZXRhaWxzX19yZXNldFwiKTtcclxuXHJcbi8vZWFjaFJvdW5kIERPTS8vXHJcbmxldCByb3VuZE51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZV9fZGV0YWlsc19fcm91bmRcIik7XHJcbmxldCByb3VuZERyYXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5sZXQgcm91bmRSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5sZXQgcm91bmRTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4vL2VuZFJvdW5kIERPTS8vXHJcbmxldCBlbmRHYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmxldCBlbmRHYW1lUmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbmxldCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0X19idXR0b25cIik7XHJcbmxldCByZXN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmxldCByZXN0YXJ0R2FtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5zdGFydE1lbnUuaGlkZGVuID0gZmFsc2U7XHJcbmdhbWVQbGF5TWVudS5oaWRkZW4gPSB0cnVlO1xyXG5zY29yZU1lbnUuaGlkZGVuID0gdHJ1ZTtcclxuXHJcbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBzdGFydE1lbnUuaGlkZGVuID0gdHJ1ZTtcclxuICBnYW1lUGxheU1lbnUuaGlkZGVuID0gZmFsc2U7XHJcbiAgc2NvcmVNZW51LmhpZGRlbiA9IGZhbHNlO1xyXG4gIGdhbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG59KTtcclxuXHJcbi8vIFdoZW4gdXNlciBwcmVzcyBhIGJ1dHRvbiBwbGF5R2FtZVxyXG5mb3IgKGxldCBlYWNoQnRuIG9mIGRyYXdCdXR0b24pIHtcclxuICBlYWNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKHBsYXllclNjb3JlID09PSA1IHx8IGNvbXB1dGVyU2NvcmUgPT09IDUpIHtcclxuICAgICAgZWFjaEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1c2VySW5wdXQgPSBlYWNoQnRuLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7IC8vIGdpdmVzIHRoZSBuYW1lIG9mIHVzZXJJbnB1dFxyXG4gICAgICBwbGF5R2FtZSgpOyAvL2EgdmFyaWFibGUgdGhhdCBoYXMgbm90IGJlZW4gZGVjbGFyZWQsIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZWNvbWUgYSBHTE9CQUwgdmFyaWFibGUuXHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIHBsYXkgYSBzaW5nbGUgcm91bmRcclxuZnVuY3Rpb24gZ2FtZUxvZ2ljKHBsYXllckRyYXcsIGNvbXB1dGVyRHJhdykge1xyXG4gIGlmIChcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInJvY2tcIiAmJiBjb21wdXRlckRyYXcgPT09IFwicm9ja1wiKSB8fFxyXG4gICAgKHBsYXllckRyYXcgPT09IFwicGFwZXJcIiAmJiBjb21wdXRlckRyYXcgPT09IFwicGFwZXJcIikgfHxcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInNjaXNzb3JzXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInNjaXNzb3JzXCIpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gXCJSb3VuZCBEcmF3XCI7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInJvY2tcIiAmJiBjb21wdXRlckRyYXcgPT09IFwicGFwZXJcIikgfHxcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInBhcGVyXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInNjaXNzb3JzXCIpIHx8XHJcbiAgICAocGxheWVyRHJhdyA9PT0gXCJzY2lzc29yc1wiICYmIGNvbXB1dGVyRHJhdyA9PT0gXCJyb2NrXCIpXHJcbiAgKSB7XHJcbiAgICBjb21wdXRlclNjb3JlKys7XHJcbiAgICByZXR1cm4gXCJDb21wdXRlciBXaW5zXCI7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInJvY2tcIiAmJiBjb21wdXRlckRyYXcgPT09IFwic2Npc3NvcnNcIikgfHxcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInBhcGVyXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInJvY2tcIikgfHxcclxuICAgIChwbGF5ZXJEcmF3ID09PSBcInNjaXNzb3JzXCIgJiYgY29tcHV0ZXJEcmF3ID09PSBcInBhcGVyXCIpXHJcbiAgKSB7XHJcbiAgICBwbGF5ZXJTY29yZSsrO1xyXG4gICAgcmV0dXJuIFwiUGxheWVyIFdpbnNcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiUGxlYXNlIGVudGVyIGEgY29ycmVjdCB2YWx1ZSBmcm9tIHRoZSBvcHRpb24gZ2l2ZW4gOiBSb2NrIHwgUGFwZXIgfCBTY2lzc29yc1wiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGxheUdhbWUoKSB7XHJcbiAgcm91bmRQbGF5ZWQrKztcclxuICBlYWNoUm91bmRTY29yZSgpO1xyXG4gIGdhbWVDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG5cclxuICBpZiAocGxheWVyU2NvcmUgPT09IDUgfHwgY29tcHV0ZXJTY29yZSA9PT0gNSkge1xyXG4gICAgZmluYWxTY29yZSgpO1xyXG4gICAgcmVzdGFydEdhbWUoKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coYFBsYXllciAgU2NvcmUgJHtwbGF5ZXJTY29yZX1gKTtcclxuICBjb25zb2xlLmxvZyhgQ29tcHV0ZXIgU2NvcmUgJHtjb21wdXRlclNjb3JlfWApO1xyXG4gIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYCk7XHJcbiAgY29uc29sZS5sb2coYFBsYXllciBTZWxlY3RlZCAke3VzZXJJbnB1dH1gKTtcclxuICBjb25zb2xlLmxvZyhgQ29tcHV0ZXIgU2VsZWN0ZWQgJHtjb21wdXRlcklucHV0fWApO1xyXG4gIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYCk7XHJcbiAgY29uc29sZS5sb2cocm91bmRQbGF5ZWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYWNoUm91bmRTY29yZSgpIHtcclxuICBjb21wdXRlcklucHV0ID0gY29tcHV0ZXJHdWVzcygpO1xyXG5cclxuICByb3VuZE51bWJlci50ZXh0Q29udGVudCA9IGBSb3VuZCAke3JvdW5kUGxheWVkfSBgO1xyXG4gIGN1cnJlbnRHYW1lU2NvcmUuYXBwZW5kKHJvdW5kTnVtYmVyKTtcclxuXHJcbiAgcm91bmRSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX3N0YXR1c1wiKTtcclxuICByb3VuZFJlc3VsdC50ZXh0Q29udGVudCA9IGBSb3VuZCBTdGF0dXMgOiAke2dhbWVMb2dpYyhcclxuICAgIHVzZXJJbnB1dCxcclxuICAgIGNvbXB1dGVySW5wdXRcclxuICApfSBgO1xyXG4gIGN1cnJlbnRHYW1lU2NvcmUuYXBwZW5kKHJvdW5kUmVzdWx0KTtcclxuXHJcbiAgcm91bmREcmF3LmNsYXNzTGlzdC5hZGQoXCJnYW1lX19kZXRhaWxzX19kcmF3c1wiKTtcclxuICByb3VuZERyYXcudGV4dENvbnRlbnQgPSBgICR7Y2FwaXRhbExldHRlcih1c2VySW5wdXQpfSAgOiAke2NhcGl0YWxMZXR0ZXIoXHJcbiAgICBjb21wdXRlcklucHV0XHJcbiAgKX1gO1xyXG4gIGN1cnJlbnRHYW1lU2NvcmUuYXBwZW5kKHJvdW5kRHJhdyk7XHJcblxyXG4gIHJvdW5kU2NvcmUuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX2VhY2hSb3VuZFNjb3JlXCIpO1xyXG4gIHJvdW5kU2NvcmUudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJTY29yZX0gOiAke2NvbXB1dGVyU2NvcmV9YDtcclxuICBjdXJyZW50R2FtZVNjb3JlLmFwcGVuZChyb3VuZFNjb3JlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluYWxTY29yZSgpIHtcclxuICByZXNldEdhbWVTY29yZS5hcHBlbmQoZW5kR2FtZVRleHQpO1xyXG4gIHJlc2V0R2FtZVNjb3JlLmFwcGVuZChlbmRHYW1lUmVzdWx0KTtcclxuICByZXNldEdhbWVTY29yZS5hcHBlbmQocmVzdGFydEdhbWVEaXYpO1xyXG5cclxuICBpZiAocGxheWVyU2NvcmUgPiBjb21wdXRlclNjb3JlKSB7XHJcbiAgICBlbmRHYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiSHVycmF5LCBZb3UgV29uICFcIjtcclxuICAgIGVuZEdhbWVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX3dpblwiKTtcclxuICAgIGVuZEdhbWVSZXN1bHQudGV4dENvbnRlbnQgPSBgU2VlbXMgbGlrZSB5b3UgYXJlIGEgR2lmdGVkIFRhbGVudC5gO1xyXG4gIH0gZWxzZSBpZiAocGxheWVyU2NvcmUgPT09IGNvbXB1dGVyU2NvcmUpIHtcclxuICAgIGVuZEdhbWVUZXh0LnRleHRDb250ZW50ID0gXCIgQSBEcmF3ICFcIjtcclxuICAgIGVuZEdhbWVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX2RyYXdcIik7XHJcbiAgICBlbmRHYW1lUmVzdWx0LnRleHRDb250ZW50ID0gYCBPaCBTbmFwLCBTZWVtcyBsaWtlIGEgdGllLmA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVuZEdhbWVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWVfX2RldGFpbHNfX2xvc3RcIik7XHJcbiAgICBlbmRHYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiWW91IExvc3QgIVwiO1xyXG4gICAgZW5kR2FtZVJlc3VsdC50ZXh0Q29udGVudCA9IGBHdWVzcyB0aGF0IHlvdSBhcmUgbm90IGV2ZW4gYmV0dGVyIHRoYW4gYSBCT1QuYDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xyXG4gIHJlc3RhcnRHYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJnYW1lX19kZXRhaWxzX19yZXN0YXJ0XCIpO1xyXG4gIC8vIHJlc3RhcnRHYW1lRGl2LmFwcGVuZChyZXN0YXJ0R2FtZUJ1dHRvbik7XHJcblxyXG4gIHNjb3JlTWVudS5jbGFzc0xpc3QuYWRkKFwibWFpblRyYW5zaXRpb25JblwiKTtcclxuICBzY29yZU1lbnUuY2xhc3NMaXN0LmFkZChcImdhbWVPdmVyXCIpO1xyXG5cclxuICBnYW1lUGxheU1lbnUuaGlkZGVuID0gdHJ1ZTtcclxuICBjdXJyZW50R2FtZVNjb3JlLmhpZGRlbiA9IHRydWU7XHJcbiAgcmVzZXRHYW1lU2NvcmUuaGlkZGVuID0gZmFsc2U7XHJcblxyXG4gIHJlc2V0R2FtZVNjb3JlLmNsYXNzTGlzdC5hZGQoXCJyZXNldF9fYm9yZGVyXCIpO1xyXG4gIHJlc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJnYW1lX19kZXRhaWxzX19yZXN0YXJ0X19idXR0b25cIik7XHJcbiAgcmVzdGFydEdhbWVCdXR0b24udGV4dENvbnRlbnQgPSBgUmVzdGFydGA7XHJcbiAgcmVzdGFydEdhbWVEaXYuYXBwZW5kKHJlc3RhcnRHYW1lQnV0dG9uKTtcclxuXHJcbiAgcmVzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICByZXNldEdhbWVTY29yZS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgY3VycmVudEdhbWVTY29yZS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIGdhbWVQbGF5TWVudS5oaWRkZW4gPSBmYWxzZTtcclxuXHJcbiAgICBzY29yZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImdhbWVPdmVyXCIpO1xyXG4gICAgc2NvcmVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluVHJhbnNpdGlvbkluXCIpO1xyXG4gICAgZ2FtZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW5UcmFuc2l0aW9uSW5cIik7XHJcbiAgICByZXNldEdhbWVTY29yZS5jbGFzc0xpc3QucmVtb3ZlKFwicmVzZXRfX2JvcmRlclwiKTtcclxuXHJcbiAgICBwbGF5ZXJTY29yZSA9IDA7XHJcbiAgICBjb21wdXRlclNjb3JlID0gMDtcclxuICAgIHJvdW5kUGxheWVkID0gMDtcclxuICAgIHJvdW5kTnVtYmVyLnRleHRDb250ZW50ID0gXCJSb3VuZCBEZXRhaWxzXCI7XHJcbiAgICByb3VuZERyYXcudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgcm91bmRTY29yZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICByb3VuZFJlc3VsdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBlbmRHYW1lUmVzdWx0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9KTtcclxufVxyXG5cclxuLy8gYnRuLmZvckVhY2goZWFjaEJ0biA9PiB7XHJcbi8vICAgICBlYWNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4vLyAgICAgICAgIGlmIChwbGF5ZXJTY29yZSA9PT0gNSB8fCBjb21wdXRlclNjb3JlID09PSA1KSB7XHJcbi8vICAgICAgICAgICAgIGVhY2hCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgdXNlcklucHV0ID0gZWFjaEJ0bi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpOyAvLyBnaXZlcyB0aGUgbmFtZSBvZiB1c2VySW5wdXQvL2EgdmFyaWFibGUgdGhhdCBoYXMgbm90IGJlZW4gZGVjbGFyZWQsIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZWNvbWUgYSBHTE9CQUwgdmFyaWFibGUuXHJcbi8vICAgICAgICAgICAgIHBsYXlHYW1lKCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSlcclxuLy8gfSlcclxuXHJcbi8vIHJhbmRvbSBjb21wdXRlckd1ZXNzIGdlbmVyYXRvclxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbioge1xuICBjb2xvcjogI2E5OTI3ZDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgSXNvXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGtzY3JlZW5cIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiQWNtZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogXCJBa3JvbmltXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIkthbGFtXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNwZWN0cmFsXCIsIHNlcmlmO1xuICBib3JkZXItY29sb3I6ICNhOTkyN2Q7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMzNiO1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmI2YTU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuaDEge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgSXNvXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGtzY3JlZW5cIiwgY3Vyc2l2ZTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE0YTA4NTtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbi5zdGFydF9fYnV0dG9uIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjMzM2I7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIElzb1wiLCBjdXJzaXZlO1xuICBmb250LWZhbWlseTogXCJTaWxrc2NyZWVuXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMTRhMDg1O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uc3RhcnQge1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN0YXJ0X19idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICMxNGEwODU7XG59XG4uc3RhcnRfX2J1dHRvbiA+IGEge1xuICBmb250LWZhbWlseTogXCJSdWJpayBJc29cIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2lsa3NjcmVlblwiLCBjdXJzaXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc3RhcnRfX2J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzE0YTA4NTtcbn1cblxuLmdhbWVfX2Rlc2lnbl9fcmlnaHQsIC5nYW1lX19kZXNpZ25fX2xlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogNS41cHg7XG59XG5cbi5nYW1lX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgSXNvXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGtzY3JlZW5cIiwgY3Vyc2l2ZTtcbn1cbi5nYW1lX19oZWFkZXIgPiBpbWcge1xuICBoZWlnaHQ6IDk1cHg7XG4gIHdpZHRoOiA5NXB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2hlYWRlciB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5nYW1lX19oZWFkZXIgPiBpbWcge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDRlbSkgYW5kIChtYXgtd2lkdGg6IDg5ZW0pIHtcbiAgLmdhbWVfX2hlYWRlciB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmdhbWVfX2hlYWRlciA+IGltZyB7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cblxuLmdhbWVfX2Rlc2lnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE0YTA4NTtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG4uZ2FtZV9fZGVzaWduID4gaW1nIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgcGFkZGluZzogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gIC5nYW1lX19kZXNpZ24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5nYW1lX19kZXNpZ24gPiBpbWcge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0NGVtKSBhbmQgKG1heC13aWR0aDogODllbSkge1xuICAuZ2FtZV9fZGVzaWduIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgLmdhbWVfX2Rlc2lnbiA+IGltZyB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cblxuLmdhbWVfX2J1dHRvbl9fc3R5bGUge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMzMzYjtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgSXNvXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGtzY3JlZW5cIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGJvcmRlcjogMi41cHggc29saWQgIzE0YTA4NTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmdhbWVfX2Fycm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ2FtZV9fYnV0dG9uX19vdXRlcl9fcm9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdhbWVfX2J1dHRvbl9fb3V0ZXJfX3JvY2tfX2Fycm93IHtcbiAgbWF4LWhlaWdodDogOTBweDtcbiAgbWF4LXdpZHRoOiA5MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdhbWVfX2J1dHRvbl9fb3V0ZXJfX3JvY2tfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiA1NXB4O1xuICAgIG1heC13aWR0aDogNTVweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ0ZW0pIGFuZCAobWF4LXdpZHRoOiA4OWVtKSB7XG4gIC5nYW1lX19idXR0b25fX291dGVyX19yb2NrX19hcnJvdyB7XG4gICAgbWF4LWhlaWdodDogNzVweDtcbiAgICBtYXgtd2lkdGg6IDc1cHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cbi5nYW1lX19idXR0b25fX2lubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZ2FtZV9fYnV0dG9uX19pbm5lcl9fcGFwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5nYW1lX19idXR0b25fX2lubmVyX19wYXBlcl9fYXJyb3cge1xuICBtYXgtaGVpZ2h0OiA5MHB4O1xuICBtYXgtd2lkdGg6IDkwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19pbm5lcl9fcGFwZXJfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xuICAgIG1heC13aWR0aDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ0ZW0pIGFuZCAobWF4LXdpZHRoOiA4OWVtKSB7XG4gIC5nYW1lX19idXR0b25fX2lubmVyX19wYXBlcl9fYXJyb3cge1xuICAgIG1heC1oZWlnaHQ6IDc1cHg7XG4gICAgbWF4LXdpZHRoOiA3NXB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG4uZ2FtZV9fYnV0dG9uX19pbm5lcl9fc2Npc3NvcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5nYW1lX19idXR0b25fX2lubmVyX19zY2lzc29yc19fYXJyb3cge1xuICBtYXgtaGVpZ2h0OiA5MHB4O1xuICBtYXgtd2lkdGg6IDkwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19pbm5lcl9fc2Npc3NvcnNfX2Fycm93IHtcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xuICAgIG1heC13aWR0aDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ0ZW0pIGFuZCAobWF4LXdpZHRoOiA4OWVtKSB7XG4gIC5nYW1lX19idXR0b25fX2lubmVyX19zY2lzc29yc19fYXJyb3cge1xuICAgIG1heC1oZWlnaHQ6IDc1cHg7XG4gICAgbWF4LXdpZHRoOiA3NXB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG4uZ2FtZV9fYnV0dG9uX19zdHlsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzE0YTA4NTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59XG4uZ2FtZV9fYnV0dG9uX19zdHlsZTphY3RpdmUge1xuICB0b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ2FtZV9fYnV0dG9uX19zdHlsZSB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0NGVtKSBhbmQgKG1heC13aWR0aDogODllbSkge1xuICAuZ2FtZV9fYnV0dG9uX19zdHlsZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbn1cblxuLmdhbWVfX2RldGFpbHNfX3Jlc3RhcnRfX2J1dHRvbiB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMzNiO1xuICBmb250LWZhbWlseTogXCJSdWJpayBJc29cIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2lsa3NjcmVlblwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDYwcHg7XG4gIGJvcmRlcjogMi41cHggc29saWQgIzE0YTA4NTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmdhbWVfX2RldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcbiAgYm9yZGVyLWJvdHRvbTogMy41cHggc29saWQgI2ExODk3NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZ2FtZV9fZGV0YWlsc19fcm91bmQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE0YTA4NTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmdhbWVfX2RldGFpbHNfX3Jlc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5nYW1lX19kZXRhaWxzX19yZXN0YXJ0X19idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICMxNGEwODU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuLmdhbWVfX2RldGFpbHNfX3Jlc3RhcnRfX2J1dHRvbjphY3RpdmUge1xuICB0b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ2FtZV9fZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ0ZW0pIGFuZCAobWF4LXdpZHRoOiA4OWVtKSB7XG4gIC5nYW1lX19kZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgfVxufVxuXG4uZ2FtZV9fc2NvcmVfX2N1cnJlbnQge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5nYW1lT3ZlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgLyogdG9wOiAzMyU7ICovXG4gIC8qIGJvcmRlcjogMy41cHggc29saWQgI2ExODk3NjsgKi9cbiAgbGVmdDogMSU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMDtcbn1cblxuLnJlc2V0X19ib3JkZXIge1xuICBib3JkZXI6IDMuNXB4IHNvbGlkICNhMTg5NzY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5tYWluVHJhbnNpdGlvbkluIHtcbiAgYW5pbWF0aW9uOiB0cmFuc2l0aW9uSW4gMC43NXM7XG59XG5cbkBrZXlmcmFtZXMgdHJhbnNpdGlvbkluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2dsb2JhbHMvX2JvaWxlcnBsYXRlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbXBvbmVudHMvc3RhcnRCdG4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9oZWFkZXJEZXNpZ24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9nYW1lQnRuLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbXBvbmVudHMvc2NvcmVEZXRhaWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNMRjs7QURRQTtFQUdFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7QUNQRjs7QURVQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUEY7O0FDckRBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBRHdERjs7QUN0REE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUR5REY7QUN2REU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0FEeURKO0FDdERJO0VBQ0UsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0FEd0ROO0FDdERJO0VB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ZUksaUJBQUE7RUhtTEo7QUFDRjs7QUlyU0E7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FKd1NGOztBSXJTQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FKd1NGO0FJdlNFO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtBSnlTSjtBSXZTRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBSnlTSjtBSXJTTTtFQUNFLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtBSnVTUjtBSXJTTTtFQUNFLFNBQUE7RUFDQSx5QkFBQTtBSnVTUjtBSW5TRTtFQWpDRjtJQWtDSSxnQkFBQTtJQUNBLGlCQUFBO0VKc1NGO0FBQ0Y7QUlyU0U7RUFyQ0Y7SUFzQ0ksaUJBQUE7RUp3U0Y7QUFDRjs7QUlyU0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FKd1NGOztBSXJTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FKd1NGOztBSXJTQTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FKd1NGOztBQS9XQTtFQUNFLDZCQUFBO0FBa1hGOztBQS9XQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBa1hGO0VBL1dBO0lBQ0UsVUFBQTtJQUNBLHFCQUFBO0VBaVhGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vLyAqLFxcclxcbi8vICo6OmJlZm9yZSxcXHJcXG4vLyAqOjphZnRlciB7XFxyXFxuLy8gICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbi8vIH1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGNvbG9yOiAjYTk5MjdkO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpayBJc29cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTaWxrc2NyZWVuXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWNtZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFrcm9uaW1cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJLYWxhbVxcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsXFxcIiwgc2VyaWY7XFxyXFxuICBib3JkZXItY29sb3I6ICNhOTkyN2Q7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMzNiO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyYjZhNTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgLy8gZGlzcGxheTogZmxleDtcXHJcXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gIGJvcmRlci10b3A6IDMuNXB4IHNvbGlkICNhMTg5NzY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpayBJc29cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTaWxrc2NyZWVuXFxcIiwgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxNGEwODU7XFxyXFxuICBtYXJnaW4tbGVmdDogN3B4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxyXFxufVxcclxcblwiLFwiQGZvcndhcmQgXFxcImdsb2JhbHNcXFwiO1xcclxcbkBmb3J3YXJkIFxcXCJjb21wb25lbnRzXFxcIjtcXHJcXG5cXHJcXG4ubWFpblRyYW5zaXRpb25JbiB7XFxyXFxuICBhbmltYXRpb246IHRyYW5zaXRpb25JbiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0cmFuc2l0aW9uSW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiJWJ1dHRvblN0eWxlIHtcXHJcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMzMzYjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWsgSXNvXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2lsa3NjcmVlblxcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDYwcHg7XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkICMxNGEwODU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG4uc3RhcnQge1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgJl9fYnV0dG9uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjMTRhMDg1O1xcclxcbiAgICBAZXh0ZW5kICVidXR0b25TdHlsZTtcXHJcXG5cXHJcXG4gICAgJiA+IGEge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiUnViaWsgSXNvXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gICAgICBmb250LWZhbWlseTogXFxcIlNpbGtzY3JlZW5cXFwiLCBjdXJzaXZlO1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzE0YTA4NTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBtaXhpbiBoZWFkZXJTdHlsZSgkaGVpZ2h0LCAkd2lkdGgsICRwYWRkaW5nKSB7XFxyXFxuICBoZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICB3aWR0aDogJHdpZHRoO1xcclxcbiAgcGFkZGluZzogJHBhZGRpbmc7XFxyXFxufVxcclxcblxcclxcbi8vICRicmVha3BvaW50cy11cDogKFxcclxcbi8vICAgXFxcIm1lZGl1bVxcXCI6IDQzLjc1ZW0sXFxyXFxuLy8gICBcXFwibGFyZ2VcXFwiOiA1Ni4yNWVtLFxcclxcbi8vICAgXFxcInhMYXJnZVxcXCI6IDkwZW0sXFxyXFxuLy8gKTtcXHJcXG5cXHJcXG4vLyBAbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSkge1xcclxcbi8vICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLXVwLCRzaXplKSkge1xcclxcbi8vICAgICBAY29udGVudDtcXHJcXG4vLyAgIH1cXHJcXG4vLyB9XFxyXFxuXFxyXFxuJWRlc2lnblN0eWxlIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMnB4O1xcclxcbiAgcGFkZGluZy10b3A6IDJweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG4gIG1hcmdpbi10b3A6IDUuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9faGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcclxcbiAgYm9yZGVyLXRvcDogMy41cHggc29saWQgI2ExODk3NjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrIElzb1xcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNpbGtzY3JlZW5cXFwiLCBjdXJzaXZlO1xcclxcblxcclxcbiAgJiA+IGltZyB7XFxyXFxuICAgIEBpbmNsdWRlIGhlYWRlclN0eWxlKDk1cHgsIDk1cHgsIDIwcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAmID4gaW1nIHtcXHJcXG4gICAgICBAaW5jbHVkZSBoZWFkZXJTdHlsZSg0MHB4LCA0MHB4LCAxMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ0ZW0pIGFuZCAobWF4LXdpZHRoOiA4OWVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICAmID4gaW1nIHtcXHJcXG4gICAgICBAaW5jbHVkZSBoZWFkZXJTdHlsZSg2NXB4LCA2NXB4LCAxMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fZGVzaWduIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE0YTA4NTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXHJcXG4gICYgPiBpbWcge1xcclxcbiAgICBAaW5jbHVkZSBoZWFkZXJTdHlsZSg0NXB4LCA0NXB4LCAwKTtcXHJcXG4gIH1cXHJcXG4gICZfX2xlZnQge1xcclxcbiAgICBAZXh0ZW5kICVkZXNpZ25TdHlsZTtcXHJcXG4gIH1cXHJcXG4gICZfX3JpZ2h0IHtcXHJcXG4gICAgQGV4dGVuZCAlZGVzaWduU3R5bGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgJiA+IGltZyB7XFxyXFxuICAgICAgQGluY2x1ZGUgaGVhZGVyU3R5bGUoMjVweCwgMjVweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ0ZW0pIGFuZCAobWF4LXdpZHRoOiA4OWVtKSB7XFxyXFxuICAgICYgPiBpbWcge1xcclxcbiAgICAgIEBpbmNsdWRlIGhlYWRlclN0eWxlKDQ1cHgsIDQ1cHgsIDEwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIlYnV0dG9uU3R5bGUge1xcclxcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMzNiO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpayBJc29cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTaWxrc2NyZWVuXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMTRhMDg1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJ1dHRvblBvc2l0aW9uKCRmbGV4LCAkanVzdGlmeSkge1xcclxcbiAgZGlzcGxheTogJGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fYXJyb3cge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fYnV0dG9uIHtcXHJcXG4gICZfX291dGVyIHtcXHJcXG4gICAgJl9fcm9jayB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgJl9fYXJyb3cge1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogOTBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogNTVweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA1NXB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDRlbSkgYW5kIChtYXgtd2lkdGg6IDg5ZW0pIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogNzVweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA3NXB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19pbm5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAmX19wYXBlciB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgJl9fYXJyb3cge1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogOTBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA0NXB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDRlbSkgYW5kIChtYXgtd2lkdGg6IDg5ZW0pIHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogNzVweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA3NXB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICZfX3NjaXNzb3JzIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAmX19hcnJvdyB7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiA5MHB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA5MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDQ1cHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NGVtKSBhbmQgKG1heC13aWR0aDogODllbSkge1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA3NXB4O1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDc1cHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX3N0eWxlIHtcXHJcXG4gICAgQGV4dGVuZCAlYnV0dG9uU3R5bGU7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjMTRhMDg1O1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcclxcbiAgICB9XFxyXFxuICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICB0b3A6IDEwcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NGVtKSBhbmQgKG1heC13aWR0aDogODllbSkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiJWJ1dHRvblN0eWxlIHtcXHJcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMzMzYjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWsgSXNvXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2lsa3NjcmVlblxcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDYwcHg7XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkICMxNGEwODU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBib3JkZXItdG9wOiAzLjVweCBzb2xpZCAjYTE4OTc2O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMy41cHggc29saWQgI2ExODk3NjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgJl9fcm91bmQge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE0YTA4NTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgfVxcclxcbiAgJl9fcmVzdGFydCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAmX19idXR0b24ge1xcclxcbiAgICAgIEBleHRlbmQgJWJ1dHRvblN0eWxlO1xcclxcbiAgICAgIC8vIG1hcmdpbjogMjBweDtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICMxNGEwODU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgdG9wOiAxMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ0ZW0pIGFuZCAobWF4LXdpZHRoOiA4OWVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fc2NvcmVfX2N1cnJlbnQge1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVPdmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxyXFxuICAvKiB0b3A6IDMzJTsgKi9cXHJcXG4gIC8qIGJvcmRlcjogMy41cHggc29saWQgI2ExODk3NjsgKi9cXHJcXG4gIGxlZnQ6IDElO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5yZXNldF9fYm9yZGVyIHtcXHJcXG4gIGJvcmRlcjogMy41cHggc29saWQgI2ExODk3NjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJjYXBpdGFsTGV0dGVyIiwic3RyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNvbXB1dGVyR3Vlc3MiLCJyYW5kb21WYWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySW5wdXQiLCJjb21wdXRlcklucHV0IiwicGxheWVyU2NvcmUiLCJjb21wdXRlclNjb3JlIiwicm91bmRQbGF5ZWQiLCJnYW1lUGxheU1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY29yZU1lbnUiLCJzdGFydE1lbnUiLCJnYW1lQ29udGVudCIsImRyYXdCdXR0b24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudEdhbWVTY29yZSIsInJlc2V0R2FtZVNjb3JlIiwicm91bmROdW1iZXIiLCJyb3VuZERyYXciLCJjcmVhdGVFbGVtZW50Iiwicm91bmRSZXN1bHQiLCJyb3VuZFNjb3JlIiwiZW5kR2FtZVRleHQiLCJlbmRHYW1lUmVzdWx0Iiwic3RhcnRHYW1lQnV0dG9uIiwicmVzdGFydEdhbWVCdXR0b24iLCJyZXN0YXJ0R2FtZURpdiIsImhpZGRlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xhc3NMaXN0IiwiYWRkIiwiZWFjaEJ0biIsImRpc2FibGVkIiwidGV4dENvbnRlbnQiLCJ0b0xvd2VyQ2FzZSIsInBsYXlHYW1lIiwiZ2FtZUxvZ2ljIiwicGxheWVyRHJhdyIsImNvbXB1dGVyRHJhdyIsImVhY2hSb3VuZFNjb3JlIiwicmVtb3ZlIiwiZmluYWxTY29yZSIsInJlc3RhcnRHYW1lIiwiYXBwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==