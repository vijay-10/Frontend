import { useState } from "react";

function Square({value, onSquareClick}) {

  return (
    <div>
      <button onClick={onSquareClick} className="square border-black border p-2 w-16 h-16 text-4xl hover:bg-slate-400">{value}</button>
    </div>
  );
}

function Game() {
  return (
    <div className="game flex ">
      <Board />
      <div className="game-info">
        Hello
      </div>
    </div>
  );
}

function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX , setIsX] = useState(true);

  console.log(squares);
  
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    
    let newSqures = [...squares];
    if (isX) {
      newSqures[i] = 'X';
    }
    else {
      newSqures[i] = 'O';
    }
    setSquares(newSqures);
    setIsX(!isX);
  }

  let status;
  const winner = calculateWinner(squares)
  if (winner) {
    status = `Winner: ${winner}`;
  }
  else {
    status = `Player Turn: ${isX ? 'X' : 'O'}`;
  }

  return (
    <div className="App w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <div className="game-status text-[2rem]">
          {status}
      </div>
      <div className="square-row flex">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="square-row flex">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="square-row flex">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c] ) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
