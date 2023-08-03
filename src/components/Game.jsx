import { useState, useEffect } from "react";
import Graveyard from "./Graveyard.jsx";
import GuessForm from "./GuessForm.jsx";
import WordDisplay from "./WordDisplay.jsx";

const Game = () => {
  const [randomNumber, setRandomNumber] = useState(Math.random() * 3);
  const wordLength = Math.floor(randomNumber) + 4;
  const apiLink = `https://random-word-api.vercel.app/api?length=${wordLength}`;

  const [currentWord, setCurrentWord] = useState(null);
  const [displayArray, setDisplayArray] = useState([]);
  const [guessedLetter, setGuessedLetter] = useState(``);
  const [guessCollection, setGuessCollection] = useState([]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(currentWord.includes(guessedLetter) ? `correct` : `wrong`);

    const newGuessCollection = [...guessCollection];

    if (!currentWord.includes(guessedLetter)) {
      newGuessCollection.push(guessedLetter);
      setGuessCollection(newGuessCollection);
    }

    event.target.reset();
  };

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await fetch(apiLink);
        const data = await response.json();

        setCurrentWord(data[0]);
        setGuessCollection([]);

        const wordArr = [...data[0]];

        setDisplayArray(wordArr.map((char) => "_"));

        console.log(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWord();
  }, [randomNumber]);

  return (
    <>
      <h3>Guesses Remaining:</h3>
      <WordDisplay displayArray={displayArray} />
      <button onClick={() => setRandomNumber(Math.random() * 3)}>
        Request New Word
      </button>
      <GuessForm
        guessedLetter={guessedLetter}
        setGuessedLetter={setGuessedLetter}
        formSubmitHandler={formSubmitHandler}
      />
      <Graveyard guessCollection={guessCollection} />
    </>
  );
};

export default Game;
