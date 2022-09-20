/* eslint-disable react/prop-types */
// dynamic text based on whether or not the game was won
function Header({ tenzies }) {
  return <h1>{tenzies ? '🎉 You win! 🎉' : 'Tenzies'}</h1>;
}

export default Header;
