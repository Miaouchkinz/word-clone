import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  return (
    <li className="guess">
      {range(5).map((letterIndex) => (
        <span key={letterIndex} className="cell">
          {value && value[letterIndex]}
        </span>
      ))}
    </li>
  );
}

export default Guess;
