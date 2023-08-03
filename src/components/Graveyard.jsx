const Graveyard = ({ incorrectGuesses }) => {
  return (
    <>
      <p>
        Graveyard: <br />
        {incorrectGuesses.map((guess) => {
          return `${guess} `;
        })}
      </p>
    </>
  );
};

export default Graveyard;
