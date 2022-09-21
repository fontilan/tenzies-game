import PropTypes from 'prop-types';
import Die from './Die';

function DiceContainer({ dice, setDice }) {
  // hold the dice - map through the current dice array (oldDice), find the one to hold by the id that is passed when triggering this funcion, set its isHeld prop accordingly, from true to false and vice versa
  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  // assign each object from the dice array (each die) to a Die component
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

DiceContainer.propTypes = {
  dice: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  setDice: PropTypes.func.isRequired,
};

export default DiceContainer;
