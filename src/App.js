import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { nanoid } from 'nanoid';

import Die from './Die';

function App() {
  /*
    ---------- STATES & VARIABLES ----------
  */
  const [bestTime, setBestTime] = useState();
  const [dice, setDice] = useState(allNewDice());
  const [gameTime, setGameTime] = useState();
  const [numOfRolls, setNumOfRolls] = useState(1);
  const [startTimer, setStartTimer] = useState();
  const [tenzies, setTenzies] = useState(false);

  // values converted into seconds and rounded off to a given precision - currently 2 digits after the decimal point
  const bestTimeInSeconds = (bestTime / 1000).toFixed(2);
  const gameTimeInSeconds = (gameTime / 1000).toFixed(2);

  /*
    ---------- SCORE KEEPING ----------
  */
  // start the timer after the page loads and then when tenzies change - on the start of new game
  useEffect(() => {
    const startingTime = new Date();
    setStartTimer(startingTime);
  }, [tenzies]);

  // calculate the time difference between the start of the game (right after the page loads/after starting new game) and the end of the game (when tenzies === true)
  function endTimer() {
    let endTimer = new Date();
    let timeDifference = endTimer.getTime() - startTimer.getTime();
    setGameTime(timeDifference);
  }

  // every time the gameTime value is changed (which happens when the game ends) check if the current gameTime value is smaller than the bestTime, and if yes then set the bestTime to be equal to that.
  // the first check makes sure that an initial value is assigned to bestTime (that initial value is the time of the first game)
  useEffect(() => {
    if (bestTime === undefined || bestTime > gameTime) {
      setBestTime(gameTime);
    }
  }, [gameTime]);

  /*
    ---------- BASIC FUNCTIONALITY ----------
  */
  // end game (tenzies) check. The game ends when all dice are held and all of them are the same value. This check happens every time the dice object changes
  useEffect(() => {
    const allDiceHeld = dice.every((die) => die.isHeld);
    const firstDieValue = dice[0].value;
    const allDiceSameValue = dice.every((die) => die.value === firstDieValue);
    if (allDiceHeld && allDiceSameValue) {
      setTenzies(true);
      endTimer();
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
      setTenzies(false);
      setDice(allNewDice());
      setNumOfRolls(1);
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
  const diceElements = dice.map((die) => (
    <Die
      holdDice={() => holdDice(die.id)}
      isHeld={die.isHeld}
      key={die.id}
      value={die.value}
    />
  ));

  /*
    ---------- MAIN RETURN ----------
  */
  // a few checks happen here. The confetti is thrown when the user wins the game, the title and description changes, and the button changes its text - all based on whether or not the game is finished (tenzies is true)
  return (
    <main className="main">
      {tenzies && <Confetti />}
      <div>
        <h1>{tenzies ? '🎉 You win! 🎉' : 'Tenzies'}</h1>
        {/* remove line below after best time functionality is implemented properly */}
        <p>bestTime value is {bestTimeInSeconds}</p>
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
      </div>
      <div className="dice-container">{diceElements}</div>
      <div>
        <button onClick={rollDice} className="roll-button">
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </div>
    </main>
  );
}

export default App;
