// dynamic text based on whether or not the game was won
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
      {tenzies ? (
        <div>
          <p>🥳 Congratulations! 🥳</p>
          <p>
            It took you {gameTimeInSeconds} seconds and {numOfRolls} rolls to
            win
          </p>
        </div>
      ) : (
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      )}
    </>
  );
}

export default GameText;
