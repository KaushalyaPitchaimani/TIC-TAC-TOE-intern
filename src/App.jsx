
import './styles.scss'
import StatusMessage from './components/StatusMessage'
import { useState } from 'react'
import Board from './components/Board'

import { calculateWinner } from './winner'



function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const winner = calculateWinner(squares)


  const handleSquareClick = (clickedPosition) => {
    if (squares[clickedPosition] || winner) {
      return //here checking if the clicked position is truthy that is not null than come out of the square and disable that square//
    }
    setSquares((currentSquares) => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isNext ? 'X' : "O";
        }
        return squareValue;

      });
    })
    //true than X false than ), here we ae changing from true to false??//
    setIsNext(currentIsNext => !currentIsNext)
  };



  return (
    <div className='app'>
      <StatusMessage winner={winner} isNext={isNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  )
}

export default App
