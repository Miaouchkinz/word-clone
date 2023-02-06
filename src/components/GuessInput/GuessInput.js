import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ guess });
        setGuess('');
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[a-zA-Z]{5}"
        title="Enter a 5 letter word"
        value={guess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();

          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
