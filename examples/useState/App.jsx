import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  function reset() {
    setCounter(0);
  }

  return (
    <div className="App">
      <h2>useState Hook</h2>
      <p>
        The button bellow has been clicked <strong>{counter} times</strong>.
      </p>

      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
