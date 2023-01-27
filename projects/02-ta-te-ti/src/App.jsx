import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'

function App () {
  const [board, setBoard] = useState(() => {
    // hacemos esto porque NUNCA se debe poner un estado dentro de un condicional
    // ademas buscar en el local storage es lento y sincrono. Por ende si buscamos cada vez que renderiza le quitaria rendimiento a la aplicacion
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  }) // fill() cambia los valores del array
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    // "??" devuelve lo del lado derecho cuando lo del lado izquierdo es NULL o UNDEFINED
    return turnFromStorage ?? TURNS.X
  })

  // null que no hay ganador y false empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.clear()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return // si ya tiene algo no acrualizamos la posicion

    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <main className='board'>
      <h1>Ta te ti</h1>
      <button onClick={resetGame}> Reset Game </button>
      <section className='game'>
        {
		board.map((square, index) => {
		 	return (
  <Square
    key={index}
    index={index}
    updateBoard={updateBoard}
  >
    {square}
  </Square>
					  )
		})
				}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal
        resetGame={resetGame}
        winner={winner}
      />
    </main>
  )
}

export default App
