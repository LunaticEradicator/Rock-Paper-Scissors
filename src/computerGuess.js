// import { camelCase } from "lodash";
// import icon from "./assets/ArrowDown.png";

export default function computerGuess() {
  const randomValue = ["rock", "paper", "scissors"];
  let computerGuess =
    randomValue[Math.floor(Math.random() * randomValue.length)];
  console.log(computerGuess);
  return computerGuess;
}
