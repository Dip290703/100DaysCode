import React, { useState } from 'react';
import circle_icon from "../src/assests/circle.png";
import cross_icon from "../src/assests/cross.png";

const App = () => {
  const [data, setData] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null); // NEW

  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6],            // diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        board[a] !== "" &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a]; // return 'X' or 'O'
      }
    }
    return null;
  };

  const toggle = (index) => {
    if (lock || data[index] !== "") return;

    const newData = [...data];
    newData[index] = count % 2 === 0 ? "X" : "O";

    const nextCount = count + 1;
    setData(newData);
    setCount(nextCount);

    const result = checkWinner(newData);
    if (result) {
      setWinner(result);
      setLock(true);
    } else if (nextCount === 9) {
      setWinner("Draw");
      setLock(true);
    }
  };

  const resetGame = () => {
    setData(Array(9).fill(""));
    setCount(0);
    setLock(false);
    setWinner(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">🎯 Tic Tac Toe</h1>

      <div className="grid grid-cols-3 gap-2">
        {data.map((val, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="w-24 h-24 bg-white rounded-xl shadow-md text-3xl font-bold flex items-center justify-center text-gray-400 cursor-pointer hover:bg-blue-100 transition-all duration-200"
          >
            {val === "X" && (
              <img src={cross_icon} alt="cross" className="w-16 h-16" />
            )}
            {val === "O" && (
              <img src={circle_icon} alt="circle" className="w-16 h-16" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-xl font-semibold text-gray-700">
        {winner
          ? winner === "Draw"
            ? "🤝 It's a Draw!"
            : `🏆 Winner: ${winner}`
          : `🕹 Turn: ${count % 2 === 0 ? "X" : "O"}`}
      </div>

      <button
        onClick={resetGame}
        className="mt-5 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md transition duration-300"
      >
        🔁 Reset Game
      </button>
    </div>
  );
};

export default App;
