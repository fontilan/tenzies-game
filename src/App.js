import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { nanoid } from 'nanoid';

import Die from './Die';

function App() {
  const [bestRoll, setBestRoll] = useState();
  const [bestTime, setBestTime] = useState();
  const [dice, setDice] = useState(allNewDice());
  const [gameTime, setGameTime] = useState();
  const [numOfRolls, setNumOfRolls] = useState(1);
  const [startTimer, setStartTimer] = useState(new Date());
  const [tenzies, setTenzies] = useState(false);

  // values converted into seconds and rounded off to a given precision - currently 2 digits after the decimal point
  const bestTimeInSeconds = (bestTime / 1000).toFixed(2);
  const gameTimeInSeconds = (gameTime / 1000).toFixed(2);

  // end game (tenzies) check. The game ends when all dice are held and all of them are the same value. This check happens every time the dice object changes
  useEffect(() => {
    const allDiceHeld = dice.every((die) => die.isHeld);
    const firstDieValue = dice[0].value;
    const allDiceSameValue = dice.every((die) => die.value === firstDieValue);
    if (allDiceHeld && allDiceSameValue) {
      endGame();
    }
  }, [dice]);

  // generate the die
  function generateDice() {
    return {
      id: nanoid(),
      isHeld: false,
      // update the line below to Math.random() * 6 + 1 after implementing whatever needs to be implemented
      value: Math.floor(Math.random() * 3 + 1),
    };
  }

  // generate 10 new dice
  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateDice());
    }
    return newDice;
  }

  // on starting new game set tenzies to false, roll new dice, reset the roll counter to 1 and start the timer
  function startNewGame() {
    setTenzies(false);
    setDice(allNewDice());
    setNumOfRolls(1);
    setStartTimer(new Date());
  }

  // on ending the game set tenzies to false, end the timer and get the time difference, set that as the game time.
  // then compare the current game time with the previous best time and if it is lower, set it as the new best time.
  // on first game - when there is no previous best time yet - set the best time to be equal to the very first game time
  // do the same with the number of rolls
  function endGame() {
    setTenzies(true);
    let endTimer = new Date();
    let timeDifference = endTimer.getTime() - startTimer.getTime();
    setGameTime(timeDifference);
    if (bestTime === undefined || bestTime > timeDifference) {
      setBestTime(timeDifference);
    }
    if (bestRoll === undefined || bestRoll > numOfRolls) {
      setBestRoll(numOfRolls);
    }
  }

  // roll the dice - if the game is not yet finished (tenzies is false) then generate new dice, except the ones that are held + increase the number of rolls.
  // if tenzies is true start a new game by generating 10 new random dice
  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateDice();
        }),
      );
      setNumOfRolls((prevNum) => prevNum + 1);
    } else {
      startNewGame();
    }
  }

  // hold the dice - map through the current dice array (oldDice), find the one to hold by the id that is passed when triggering this funcion, set its isHeld prop accordingly, from true to false and vice versa
  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      }),
    );
  }

  // assign each object from the dice array (each die) to a Die component
  function DiceContainer() {
    return (
      <div className="dice-container">
        {dice.map((die) => (
          <Die
            holdDice={() => holdDice(die.id)}
            isHeld={die.isHeld}
            key={die.id}
            value={die.value}
          />
        ))}
      </div>
    );
  }
  // dynamic text based on whether or not the game was won
  function Header() {
    return <h1>{tenzies ? '🎉 You win! 🎉' : 'Tenzies'}</h1>;
  }

  // text also dynamic based on whether or not the game was won
  function GameText() {
    return (
      <>
        {/* remove line below after best time functionality is implemented properly */}
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

  // the confetti is thrown when the user wins the game
  // the button changes its text based on whether or not the game is finished (tenzies is true)
  return (
    <main className="main">
      {tenzies && <Confetti />}
      <Header />
      <GameText />
      <DiceContainer />
      <div>
        <button onClick={rollDice} className="roll-button">
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </div>
    </main>
  );
}

export default App;
