import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import React from 'react';
import { WORDS } from '../../data';
import { sample } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [guessLimitReached, setGuessLimitReached] =
    React.useState(false);

  const handleNewGuess = (newGuess) => {
    const newGuesses = [...guesses, newGuess];
    if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGuessLimitReached(true);
    }
    setGuesses([...guesses, newGuess]);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        addNewGuess={handleNewGuess}
        isDisabled={guessLimitReached}
      />
    </>
  );
}

export default Game;
