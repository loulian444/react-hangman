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
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const isCorrect = currentWord.includes(guessedLetter);

    console.log(isCorrect ? `correct` : `wrong`);

    const newGuessCollection = [...incorrectGuesses];

    if (isCorrect) {
      const copyOfDisplayArray = [...displayArray];

      for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === guessedLetter) {
          copyOfDisplayArray[i] = guessedLetter;
        }
      }

      setDisplayArray(copyOfDisplayArray);
    } else {
      newGuessCollection.push(guessedLetter);
      setIncorrectGuesses(newGuessCollection);
    }

    event.target.reset();
  };

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await fetch(apiLink);
        const data = await response.json();

        setCurrentWord(data[0]);
        setIncorrectGuesses([]);

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
      <Graveyard incorrectGuesses={incorrectGuesses} />
    </>
  );
};

export default Game;
