import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <div className="App">
      <h2>Counter</h2>
      <p>
        The button bellow has been clicked
        <strong> {counter} times</strong>.
      </p>

      <button onClick={increment}> + </button>
      <button onClick={reset}> 0 </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}

export default App;
