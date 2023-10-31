import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const letters = ["J", "a", "n", "e", "l", "l", "e"];
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % letters.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="birthday-container">
        <div className="happyBirthday">Happy Birthday</div>
        <div className="janelle">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={index === currentLetterIndex ? "flicker" : ""}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
