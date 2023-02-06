import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import React from 'react';
import { WORDS } from '../../data';
import { sample } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleNewGuess = (newGuess) => {
    setGuesses([...guesses, newGuess]);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addNewGuess={handleNewGuess} />
    </>
  );
}

export default Game;
