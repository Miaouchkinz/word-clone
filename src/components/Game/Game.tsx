import { GAME_STATUS, NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import LostBanner from '../LostBanner/LostBanner';
import React from 'react';
import { WORDS } from '../../data';
import WonBanner from '../WonBanner/WonBanner';
import { sample } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(
    GAME_STATUS.RUNNING
  );

  const handleNewGuess = (newGuess) => {
    const newGuesses = [...guesses, newGuess];

    if (newGuess === answer) {
      setGameStatus(GAME_STATUS.WON);
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(GAME_STATUS.LOST);
    }

    setGuesses(newGuesses);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        addNewGuess={handleNewGuess}
        isDisabled={gameStatus !== GAME_STATUS.RUNNING}
      />
      {gameStatus === GAME_STATUS.WON && (
        <WonBanner numOfGuesses={guesses.length} />
      )}
      {gameStatus === GAME_STATUS.LOST && (
        <LostBanner answer={answer} />
      )}
    </>
  );
}

export default Game;
