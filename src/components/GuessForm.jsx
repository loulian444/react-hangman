const GuessForm = ({ setGuessedLetter }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    setGuessedLetter(event.target.children[0].value);
    console.log(event.target.children);
    event.target.reset();
  };

  return (
    <>
      <h2>Guess Form</h2>
      
      <form onSubmit={submitHandler}>
        <input
          type="text"
          size={3}
          pattern="[a-z]"
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
