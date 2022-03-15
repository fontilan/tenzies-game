import Button from "./Button";
import Dice from "./Dice";

function App() {
  return (
    <main className="main">
      <div>
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <Dice />
      <Button />
    </main>
  );
}

export default App;
