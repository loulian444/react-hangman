import { useState, useEffect } from "react";
import Graveyard from "./Graveyard.jsx";
import GuessForm from "./GuessForm.jsx";
import WordDisplay from "./WordDisplay.jsx";

const Game = () => {
  const [randomNumber, setRandomNumber] = useState(Math.random() * 3);
  const wordLength = Math.floor(randomNumber) + 4;
  const apiLink = `https://random-word-api.vercel.app/api?length=${wordLength}`;

  const [currentWord, setCurrentWord] = useState(null);

  const [guessedLetter, setGuessedLetter] = useState(``);

  const [guessCollection, setGuessCollection] = useState([]);

  useEffect(() => {
    const newGuessCollection = [...guessCollection];
    newGuessCollection.push(guessedLetter);
    setGuessCollection(newGuessCollection)
  }, [guessedLetter]);

  console.log(guessCollection)

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await fetch(apiLink);
        const data = await response.json();

        setCurrentWord(data[0]);
        setGuessCollection([])
      } catch (error) {
        console.log(error);
      }
    };

    fetchWord();
  }, [randomNumber]);

  return (
    <>
      <h3>Guesses Remaining:</h3>
      <GuessForm guessCollection={guessCollection} setGuessedLetter = {setGuessedLetter} />
      <WordDisplay currentWord={currentWord} />
      <button onClick={() => setRandomNumber(Math.random() * 3)}>
        Request New Word
      </button>
      <Graveyard />
    </>
  );
};

export default Game;
