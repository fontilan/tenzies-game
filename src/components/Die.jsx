import PropTypes from 'prop-types';

function Die({ isHeld, value, holdDice }) {
  // each die is specified as a separate svg that has a fill property based on the isHeld prop, so that it turns green (or yellow, or red etc), when it is held by the player
  // each die has a unique hex code in the isHeld check - each dice has a unique color when held

  const one = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="#2b283a" fillOpacity="1" />
      <g className="" transform="translate(0,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z"
          fill={isHeld ? '#f2cdcd' : '#FFFFFF'}
          fillOpacity="1"
        />
      </g>
    </svg>
  );

  const two = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="#2b283a" fillOpacity="1" />
      <g className="" transform="translate(0,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill={isHeld ? '#ddb6f2' : '#FFFFFF'}
          fillOpacity="1"
        />
      </g>
    </svg>
  );

  const three = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="#2b283a" fillOpacity="1" />
      <g className="" transform="translate(0,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill={isHeld ? '#f28fad' : '#FFFFFF'}
          fillOpacity="1"
        />
      </g>
    </svg>
  );

  const four = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="#2b283a" fillOpacity="1" />
      <g className="" transform="translate(0,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill={isHeld ? '#fae3b0' : '#FFFFFF'}
          fillOpacity="1"
        />
      </g>
    </svg>
  );

  const five = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="#2b283a" fillOpacity="1" />
      <g className="" transform="translate(0,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill={isHeld ? '#abe9b3' : '#FFFFFF'}
          fillOpacity="1"
        />
      </g>
    </svg>
  );

  const six = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="#2b283a" fillOpacity="1" />
      <g className="" transform="translate(0,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM122 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zm268 0a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill={isHeld ? '#96cdfb' : '#FFFFFF'}
          fillOpacity="1"
        />
      </g>
    </svg>
  );

  // assign the proper svg based on the value
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

  // reduce the box shadow of the held dice
  const styles = {
    boxShadow: isHeld
      ? '0px 2px 3px rgba(0, 0, 0, 0.2)'
      : '0px 4px 4px rgba(0, 0, 0, 0.3)',
  };

  return (
    <button type="button" style={styles} className="dice" onClick={holdDice}>
      {diceImage}
    </button>
  );
}

Die.propTypes = {
  isHeld: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  holdDice: PropTypes.func.isRequired,
};

export default Die;
