import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
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
      <h2>useState Hook</h2>
      <p>
        The button bellow has been clicked
        <strong> {counter} times</strong>.
      </p>

      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
