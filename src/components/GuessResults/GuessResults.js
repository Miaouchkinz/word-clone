import React from 'react';

function GuessResults({ guesses }) {
  return (
    <ol className="guess-results">
      {guesses.length > 0 &&
        guesses.map((guess, idx) => (
          <li key={idx} className="guess">
            {guess}
          </li>
        ))}
    </ol>
  );
}

export default GuessResults;
