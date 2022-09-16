import Die from './Die';

// assign each object from the dice array (each die) to a Die component
function DiceContainer({ dice, holdDice }) {
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

export default DiceContainer;
