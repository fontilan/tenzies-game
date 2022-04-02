import Die from './Die';
import React from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        // we generate a unique id using nanoid, so that we no longer have this pesky warning of "each child in a list should have a unique 'key' prop". Now they do and everybody is happy
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main className="main">
      <div>
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="dice--container">{diceElements}</div>
      <div>
        <button onClick={rollDice} className="roll--button">
          Roll
        </button>
      </div>
    </main>
  );
}

export default App;
