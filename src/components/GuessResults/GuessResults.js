import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import React from 'react';
import { range } from '../../utils';

function GuessResults({ guesses }) {
  return (
    <ol className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guessIndex) => (
        <Guess key={guessIndex} value={guesses[guessIndex]} />
      ))}
    </ol>
  );
}

export default GuessResults;
