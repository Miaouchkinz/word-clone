import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (guess.length !== 5) {
          window.alert('Please enter exactly 5 characters. <3');
          return;
        }

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
        minLength={5}
        maxLength={5}
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
