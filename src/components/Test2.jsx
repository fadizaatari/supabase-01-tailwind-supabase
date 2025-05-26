import React, { useState, useEffect } from "react";

// Square component represents a single square on the Tic Tac Toe board.
function Square({ value, onClick }) {
  return (
    <button
      className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-100 border border-gray-300 flex items-center justify-center text-5xl font-bold rounded-lg shadow-md hover:bg-gray-200 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
    >
      {value}
      <p className="text-xs">hi</p>
    </button>
  );
}

// Board component renders the 4x4 grid of squares.
function Board({ squares, onClick }) {
  // Helper function to render a single square.
  const renderSquare = (i) => {
    return <Square key={i} value={squares[i]} onClick={() => onClick(i)} />;
  };

  // Create the 4x4 grid by iterating through rows and columns.
  const boardSize = 4;
  const board = [];
  for (let row = 0; row < boardSize; row++) {
    const rowSquares = [];
    for (let col = 0; col < boardSize; col++) {
      rowSquares.push(renderSquare(row * boardSize + col));
    }
    board.push(
      <div key={row} className="flex justify-center">
        {rowSquares}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-4 bg-white rounded-xl shadow-lg">
      {board}
    </div>
  );
}

// calculateWinner function determines if there's a winner on the 4x4 board.
function calculateWinner(squares) {
  const lines = [
    // Rows
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    // Columns
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    // Diagonals
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d]
    ) {
      return squares[a]; // Return the winner ('X' or 'O')
    }
  }

  return null; // No winner yet
}

// App component is the main game component.
export default function Test2() {
  // State for the board, initialized with 16 nulls (for a 4x4 grid).
  const [board, setBoard] = useState(Array(16).fill(null));
  // State to track whose turn it is.
  const [xIsNext, setXIsNext] = useState(true);
  // State for the game status message.
  const [status, setStatus] = useState("");

  // useEffect to update the status message whenever board or xIsNext changes.
  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else if (board.every((square) => square !== null)) {
      setStatus("Draw!");
    } else {
      setStatus(`Next player: ${xIsNext ? "X" : "O"}`);
    }
  }, [board, xIsNext]);

  // handleClick function handles a square being clicked.
  const handleClick = (i) => {
    // If the square is already filled or there's a winner, do nothing.
    if (board[i] || calculateWinner(board)) {
      return;
    }

    // Create a copy of the board to modify.
    const newBoard = [...board];
    // Set the value of the clicked square based on whose turn it is.
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard); // Update the board state.
    setXIsNext(!xIsNext); // Toggle the turn.
  };

  // resetGame function resets all game states to their initial values.
  const resetGame = () => {
    setBoard(Array(16).fill(null));
    setXIsNext(true);
    setStatus(""); // Status will be updated by useEffect.
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4 font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 drop-shadow-lg">
        Tic Tac Toe (4x4)
      </h1>
      <div className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        {status}
      </div>
      <Board squares={board} onClick={handleClick} />

      <div className="mt-8 text-center text-gray-600 text-sm">
        <p>This is a 4x4 Tic Tac Toe game.</p>
        <p>Player X goes first.</p>
      </div>
    </div>
  );
}
