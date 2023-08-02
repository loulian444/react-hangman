import { useState } from "react";

const GuessForm = ({ guessCollection, setGuessedLetter }) => {

  const submitHandler = (event) => {
    event.preventDefault();
    setGuessedLetter(event.target.children[0].value);
    event.target.reset()
  };

  return (
    <>
      <h2>Guess Form</h2>
      <p>Your Guesses: {guessCollection.map((guess) => {
        return `${guess} `
      })}</p>
      <form onSubmit={submitHandler}>
        <input type="text" size={3} pattern="[a-z]" maxLength={1} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default GuessForm;
