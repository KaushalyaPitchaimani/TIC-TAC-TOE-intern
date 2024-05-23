import React from 'react'

const StatusMessage = ({ winner, isNext, squares }) => {
    const noMovesLeft = squares.every(squareValue => squareValue !== null);

    const nextPlayer = isNext ? 'X' : 'O';


    const renderStatusMessage = () => {
        if (winner) {
            return
            <div>Winner is <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner}</span>
            </div>
        }
        if (!winner && noMovesLeft) {
            return <div> <span className='text-orange'>O</span> and <span className='text-green'>X</span> tied</div>
        }
        if (!winner && !noMovesLeft) {
            return <div>Next player is <span className={isNext ? 'text-green' : 'text-orange'}> {nextPlayer}</span>
            </div>
        }
    }

    return (
        <div className='status-message'>
            {renderStatusMessage()}
        </div>
    )
}

export default StatusMessage
