import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import React from 'react';
import { range } from '../../utils';

function GuessResults({ guesses, answer }) {
  return (
    <ol className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} answer={answer} />
      ))}
    </ol>
  );
}

export default GuessResults;
