import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  // Only on Mount
  useEffect(() => {
    console.info("First render!");
  }, []);

  // Dependency array
  useEffect(() => {
    console.info(`Counter updated to: ${counter}`);
  }, [counter]);

  // Component life-cycle
  useEffect(() => {
    // When the component gets rendered
    console.info("Component rendered...");

    // When the component gets unmounted
    return () => console.info("Component unmounted...");
  });

  return (
    <div className="App">
      <h2>Counter</h2>
      <p>
        The button bellow has been clicked
        <strong> {counter} times</strong>.
      </p>

      <button onClick={decrement}> - </button>
      <button onClick={reset}> 0 </button>
      <button onClick={increment}> + </button>
    </div>
  );
}

export default App;
