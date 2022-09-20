import PropTypes from 'prop-types';
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

DiceContainer.propTypes = {
  dice: PropTypes.objectOf.isRequired,
  holdDice: PropTypes.func.isRequired,
};

export default DiceContainer;
