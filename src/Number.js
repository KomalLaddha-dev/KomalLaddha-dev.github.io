import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Number.css'

function Number() {
  const navigate = useNavigate();
  const [rounds, setRounds] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');
  const [playAgain, setPlayAgain] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [secretNumber, setSecretNumber] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  function startGame() {
    setGameStarted(true);
    setSecretNumber(generateRandomNumber());
    setMessage('Try to guess the number between 1 and 100!');
    setAttempts(0);
  }

  function playRound() {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    
    if (newAttempts <= 4){
    if (parseInt(userInput) === secretNumber) {
      setMessage(`Congratulations! You guessed the number ${secretNumber} correctly in ${newAttempts} attempts!`);
      setTotalScore(totalScore + 1);
      setPlayAgain(true);
    } else if (Math.abs(parseInt(userInput) - secretNumber) < 5) {
      setMessage(parseInt(userInput) < secretNumber ? 'You are close, but low' : 'You are close, but high');
    } else if (parseInt(userInput) < secretNumber) {
      setMessage('Too low! Try again.');
    } else {
      setMessage('Too high! Try again.');
    }
}
    
    else{
      setMessage(`Sorry, you've run out of attempts. The correct number was ${secretNumber}.`);
      setPlayAgain(true);
    }
  }
  
  function handleInputChange(event) {
    setUserInput(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      playRound();
    }
  }
  
  function handlePlayAgain() {
    setRounds(rounds + 1);
    setSecretNumber(generateRandomNumber());
    setMessage('');
    setPlayAgain(false);
    setAttempts(0);

    if (!playAgain) {
      navigate('/Home');
    }
  }
  
  function handleGameOver() {
    setGameOver(true);
  }
  
  return (
    <div>
      {!gameStarted ? (
        <div>
          <h2>Number Guessing Game</h2>
          <p>Welcome to the Number Guessing Game! Try to guess the number between 1 and 100 within 5 attempts.</p>
          <button onClick={startGame}>Start Game</button>
        </div>
      ) : (
        <div>
          {gameOver ? (
            <div>
              <h2>Game Over</h2>
              <p>You played {rounds} rounds and your total score is {totalScore}.</p>
              <p>Total games played: {rounds}</p>
              {playAgain ? (
                <button onClick={handlePlayAgain}>Play Again</button>
              ) : (
                <button onClick={() => { handlePlayAgain(); handleGameOver(); }}>Close Game</button>
              )}
            </div>
          ) : (
            <div>
              <h2>New Round</h2>
              <div>
                {message && <p className="feedback-message">{message}</p>}
              </div>
              {!playAgain ? (
                <div>
                  <input type="number" value={userInput} onChange={handleInputChange} onKeyDown={handleKeyDown} />
  <button onClick={playRound}>Guess</button>
                </div>
              ) : (
                <div>
                  <p>Do you want to play again?</p>
                  <button onClick={handlePlayAgain}>Yes</button>
                  <button onClick={() => { handlePlayAgain(); handleGameOver(); }}>No</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Number;