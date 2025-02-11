import { useEffect } from "react"
import { useState } from "react"


function Square({value, handleClick}) {
    return (<button onClick={handleClick} className="square">{value}</button>)
}


export default function TicTacToe() {

    const [squares, setSquares] = useState(Array(9).fill(''))
    const [isXTurn, setIsXTurn] = useState(true)
    const [status, setStatus] = useState('')

    function handleClick(currentSquare) {
        let copySquares = [...squares]
        if(getWinner(copySquares) || copySquares[currentSquare]) return
        copySquares[currentSquare] = isXTurn ? 'X' : 'O'
        setIsXTurn(!isXTurn)
        setSquares(copySquares)
    }

    function getWinner(squares) {
        const winningPatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i = 0; i < winningPatterns.length; i++) {
            const [x,y,z] = winningPatterns[i]
            if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x]
            }
        }

        return null
    }

    function handleRestart() {
        setIsXTurn(true)
        setSquares(Array(9).fill(''))
    }

    useEffect(() => {
        if(!getWinner(squares) && squares.every(item => item !== '')) {
            setStatus(`This is a draw! Play again!`)
        } else if(getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}`)
        } else {
            setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`)
        }
    }, [squares, isXTurn])

    return (
        <div className="tic-tac-toe-container">
            <div className="row">
                <Square value={squares[0]} handleClick={() => handleClick(0)}/>
                <Square value={squares[1]} handleClick={() => handleClick(1)}/>
                <Square value={squares[2]} handleClick={() => handleClick(2)}/>
            </div>

            <div className="row">
                <Square value={squares[3]} handleClick={() => handleClick(3)}/>
                <Square value={squares[4]} handleClick={() => handleClick(4)}/>
                <Square value={squares[5]} handleClick={() => handleClick(5)}/>
            </div>

            <div className="row">
                <Square value={squares[6]} handleClick={() => handleClick(6)}/>
                <Square value={squares[7]} handleClick={() => handleClick(7)}/>
                <Square value={squares[8]} handleClick={() => handleClick(8)}/>
            </div>

            <h1>{status}</h1>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}