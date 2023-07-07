export default function restartGame() {
  restartGameDiv.classList.add("game__details__restart");
  // restartGameDiv.append(restartGameButton);

  scoreMenu.classList.add("mainTransitionIn");
  scoreMenu.classList.add("gameOver");

  gamePlayMenu.hidden = true;
  currentGameScore.hidden = true;
  resetGameScore.hidden = false;

  restartGameButton.classList.add("game__details__restart__button");
  restartGameButton.textContent = `Restart`;
  restartGameDiv.append(restartGameButton);

  restartGameButton.addEventListener("click", (e) => {
    resetGameScore.hidden = true;
    currentGameScore.hidden = false;
    gamePlayMenu.hidden = false;

    scoreMenu.classList.remove("gameOver");
    scoreMenu.classList.remove("mainTransitionIn");
    gameContent.classList.add("mainTransitionIn");

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
