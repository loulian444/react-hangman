const GuessForm = ({ guessedLetter, setGuessedLetter, formSubmitHandler }) => {
  return (
    <>
      <h2>Guess Form</h2>

      <form onSubmit={formSubmitHandler}>
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
