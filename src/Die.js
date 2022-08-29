import one from './images/1.svg';
import two from './images/2.svg';
import three from './images/3.svg';
import four from './images/4.svg';
import five from './images/5.svg';
import six from './images/6.svg';

function Die({ isHeld, value, holdDice }) {
  const styles = {
    fill: isHeld ? '#59E391' : '#FFFFFF',
    boxShadow: isHeld
      ? '0px 2px 4px rgba(0, 0, 0, 0.3)'
      : '0px 4px 4px rgba(0, 0, 0, 0.3)',
  };

  let diceImage = '';

  switch (value) {
    case 1:
      diceImage = one;
      break;
    case 2:
      diceImage = two;
      break;
    case 3:
      diceImage = three;
      break;
    case 4:
      diceImage = four;
      break;
    case 5:
      diceImage = five;
      break;
    default:
      diceImage = six;
  }

  return (
    <button style={styles} className="dice" onClick={holdDice}>
      <img src={diceImage} alt={value} />
    </button>
  );
}

export default Die;
