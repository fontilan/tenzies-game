import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { nanoid } from 'nanoid';

import Die from './Die';

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allDiceHeld = dice.every((die) => die.isHeld);
    const firstDieValue = dice[0].value;
    const allDiceSameValue = dice.every((die) => die.value === firstDieValue);
    if (allDiceHeld && allDiceSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  function generateDice() {
    return {
      value: Math.floor(Math.random() * 6 + 1),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateDice());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateDice();
        }),
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      }),
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      holdDice={() => holdDice(die.id)}
      isHeld={die.isHeld}
      key={die.id}
      value={die.value}
    />
  ));

  return (
    <main className="main">
      {tenzies && <Confetti />}
      <div>
        <h1>{tenzies ? '🎉 You win! 🎉' : 'Tenzies'}</h1>
        <p>
          {tenzies
            ? '🥳 Congratulations! 🥳'
            : 'Roll until all dice are the same. Click each die to freeze it at its current value between rolls.'}
        </p>
      </div>
      <div className="dice--container">{diceElements}</div>
      <div>
        <button onClick={rollDice} className="roll--button">
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </div>
    </main>
  );
}

export default App;
