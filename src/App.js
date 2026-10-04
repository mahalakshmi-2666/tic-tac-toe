
import React, { useState } from "react";
import "./App.css";

function App() {
  // Player names
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  // Game started or not
  const [gameStarted, setGameStarted] = useState(false);

  // Board
  const [board, setBoard] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]);

  // X starts first
  const [currentPlayer, setCurrentPlayer] = useState("X");

  // Winner
  const [winner, setWinner] = useState("");

  // Winning cells
  const [winningCells, setWinningCells] = useState([]);

  // Winning combinations
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
  ];

  // Start game
  const startGame = () => {
    if (player1.trim() === "" || player2.trim() === "") {
      alert("Please enter both player names!");
      return;
    }

    setGameStarted(true);
  };

  // Check winner
  const checkWinner = (newBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        newBoard[a] !== "" &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return {
          player: newBoard[a],
          cells: pattern
        };
      }
    }

    return null;
  };

  // Handle cell click
  const handleCellClick = (index) => {
    // Don't allow clicking after game ends
    if (board[index] !== "" || winner !== "") {
      return;
    }

    // Copy board
    const newBoard = [...board];

    // Add X or O
    newBoard[index] = currentPlayer;

    // Update board
    setBoard(newBoard);

    // Check winner
    const result = checkWinner(newBoard);

    if (result) {
      setWinner(result.player);
      setWinningCells(result.cells);
      return;
    }

    // Check draw
    if (!newBoard.includes("")) {
      setWinner("DRAW");
      return;
    }

    // Change player
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  // Restart current game
  const restartGame = () => {
    setBoard([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]);

    setCurrentPlayer("X");
    setWinner("");
    setWinningCells([]);
  };

  // Start a completely new game
  const newGame = () => {
    setPlayer1("");
    setPlayer2("");
    setBoard([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]);
    setCurrentPlayer("X");
    setWinner("");
    setWinningCells([]);
    setGameStarted(false);
  };

  // Get current player's name
  const getPlayerName = () => {
    if (currentPlayer === "X") {
      return player1;
    }

    return player2;
  };

  // Get winner's name
  const getWinnerName = () => {
    if (winner === "X") {
      return player1;
    }

    if (winner === "O") {
      return player2;
    }

    return "";
  };

  // Player name screen
  if (!gameStarted) {
    return (
      <div className="app">
        <div className="name-container">
          <h1 className="title">Tic Tac Toe</h1>

          <p className="subtitle">
            Enter player names to start the game
          </p>

          <div className="player-input">
            <label>Player 1</label>

            <div className="input-wrapper">
              <span className="symbol x-symbol">X</span>

              <input
                type="text"
                placeholder="Enter Player 1 name"
                value={player1}
                onChange={(e) => setPlayer1(e.target.value)}
              />
            </div>
          </div>

          <div className="player-input">
            <label>Player 2</label>

            <div className="input-wrapper">
              <span className="symbol o-symbol">O</span>

              <input
                type="text"
                placeholder="Enter Player 2 name"
                value={player2}
                onChange={(e) => setPlayer2(e.target.value)}
              />
            </div>
          </div>

          <button className="start-button" onClick={startGame}>
            Start Game
          </button>
        </div>
      </div>
    );
  }

  // Game screen
  return (
    <div className="app">

      <div className="game-container">

        <h1 className="title">Tic Tac Toe</h1>

        {/* Players */}
        <div className="players">

          <div
            className={`player-card ${
              currentPlayer === "X" && winner === ""
                ? "active-player"
                : ""
            }`}
          >
            <span className="player-symbol x-symbol">X</span>

            <div>
              <p>Player 1</p>
              <h3>{player1}</h3>
            </div>
          </div>

          <div className="vs">VS</div>

          <div
            className={`player-card ${
              currentPlayer === "O" && winner === ""
                ? "active-player"
                : ""
            }`}
          >
            <span className="player-symbol o-symbol">O</span>

            <div>
              <p>Player 2</p>
              <h3>{player2}</h3>
            </div>
          </div>

        </div>

        {/* Game status */}
        {winner === "" ? (
          <div className="turn-message">
            <span
              className={
                currentPlayer === "X"
                  ? "turn-x"
                  : "turn-o"
              }
            >
              {getPlayerName()}
            </span>

            <span>'s turn</span>

            <span
              className={
                currentPlayer === "X"
                  ? "turn-x"
                  : "turn-o"
              }
            >
              ({currentPlayer})
            </span>
          </div>
        ) : winner === "DRAW" ? (
          <div className="result-message draw-message">
            🤝 It's a Draw!
          </div>
        ) : (
          <div className="result-message winner-message">
            🎉 {getWinnerName()} Wins!
          </div>
        )}

        {/* Board */}
        <div className="board">

          {board.map((cell, index) => (
            <button
              key={index}
              className={`cell ${
                cell === "X"
                  ? "cell-x"
                  : cell === "O"
                  ? "cell-o"
                  : ""
              } ${
                winningCells.includes(index)
                  ? "winning-cell"
                  : ""
              }`}
              onClick={() => handleCellClick(index)}
            >
              {cell}
            </button>
          ))}

        </div>

        {/* Buttons */}
        <div className="button-container">

          <button
            className="restart-button"
            onClick={restartGame}
          >
            🔄 Restart Game
          </button>

          <button
            className="new-game-button"
            onClick={newGame}
          >
            🏠 New Game
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;


