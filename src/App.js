import Die from "./Die";
import React from "react";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6 + 1));
    }
    return newDice;
  }

  const diceElements = dice.map(die => <Die value={die} />);

  function rollDice() {
    setDice(allNewDice());
  }

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
