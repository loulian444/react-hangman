import Graveyard from "./Graveyard.jsx";
import GuessForm from "./GuessForm.jsx";
import WordDisplay from "./WordDisplay.jsx";

const Game = () => {
  return (
    <>
      <h3>Guesses Remaining:</h3>
      <GuessForm />
      <WordDisplay />
      <Graveyard />
    </>
  );
};

export default Game;