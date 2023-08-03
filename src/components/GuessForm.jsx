const GuessForm = ({ guessedLetter, setGuessedLetter, formSubmitHandler }) => {
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <h4>Guess a letter:</h4>
        <input
          type="text"
          size={3}
          pattern="[a-z]"
          onChange={(event) => setGuessedLetter(event.target.value)}
          maxLength={1}
          title="Input must be a letter"
          required
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default GuessForm;
