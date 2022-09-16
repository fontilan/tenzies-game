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
      <p>bestTime value is {bestTimeInSeconds}</p>
      <p>bestRoll value is {bestRoll}</p>
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
