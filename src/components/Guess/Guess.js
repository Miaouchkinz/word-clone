import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <li className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result && result[num].letter}
          status={result && result[num].status}
        />
      ))}
    </li>
  );
}

export default Guess;
