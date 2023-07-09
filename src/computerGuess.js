// import { camelCase } from "lodash";
// import icon from "./assets/ArrowDown.png";

const randomValue = ["rock", "paper", "scissors"];
export default function computerGuess() {
  let computerGuess =
    randomValue[Math.floor(Math.random() * randomValue.length)];
  console.log(computerGuess);
  return computerGuess;
}
