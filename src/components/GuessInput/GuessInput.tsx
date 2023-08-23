import React from 'react';

function GuessInput({ addNewGuess, isDisabled }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addNewGuess(tentativeGuess);
        setTentativeGuess('');
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={isDisabled}
        pattern="[a-zA-Z]{5}"
        title="Enter a 5 letter word"
        value={tentativeGuess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();

          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
