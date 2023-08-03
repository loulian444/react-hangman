const Graveyard = ({ guessCollection }) => {
  return (
    <>
      <h2>Graveyard</h2>
      <p>
        Your Wrong Guesses:{" "}
        {guessCollection.map((guess) => {
          return `${guess} `;
        })}
      </p>
    </>
  );
};

export default Graveyard;
