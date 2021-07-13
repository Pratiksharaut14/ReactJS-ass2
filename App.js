import React, { useState } from "react";
import "./styles.css";

function App() {
  let [score, setScore] = useState(0);

  return (
    <div>
      <h1> Counter App</h1>
      <h2> You can increase, decrease or reset the counter</h2>
      <h2> Score : {score}</h2>
      <div className="but">
        <button onClick={() => (score < 25 ? setScore(score + 1) : "")}>
          Increment
        </button>
        <button onClick={() => (score > 0 ? setScore(score - 1) : "")}>
          Decrement
        </button>
        <button
          onClick={() => {
            setScore(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
