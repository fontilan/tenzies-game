// dynamic game text, consisting of two main parts
// display the best scores section only when bestRolls and bestTimeInSeconds have proper values, i.e after playing at least one game
// if the game is not yet finished - display instructions. If it is finished - display congratulations and scores
function GameText({
  bestRoll,
  bestTimeInSeconds,
  gameTimeInSeconds,
  numOfRolls,
  tenzies,
}) {
  return (
    <>
      {bestRoll !== null && bestTimeInSeconds !== null ? (
        <div className="best-scores">
          <p className="best-scores__score">Best time: {bestTimeInSeconds}s</p>
          <p className="best-scores__score">Lowest # of rolls: {bestRoll}</p>
        </div>
      ) : (
        <></>
      )}
      {!tenzies ? (
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      ) : (
        <div>
          <p>🥳 Congratulations! 🥳</p>
          <p>
            It took you {gameTimeInSeconds} seconds and {numOfRolls} rolls to
            win
          </p>
        </div>
      )}
    </>
  );
}

export default GameText;
