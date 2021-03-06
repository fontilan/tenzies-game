function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : '#FFFFFF',
    boxShadow: props.isHeld
      ? '0px 2px 4px rgba(0, 0, 0, 0.3)'
      : '0px 4px 4px rgba(0, 0, 0, 0.3)',
  };

  return (
    <button style={styles} className="dice" onClick={props.holdDice}>
      {props.value}
    </button>
  );
}

export default Die;
