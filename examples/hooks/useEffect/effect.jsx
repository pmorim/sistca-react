import React, { useEffect, useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);

  // Only on Mount
  useEffect(() => {
    console.info("First render!");
  }, []);

  // Dependency array
  useEffect(() => {
    console.info(`Number of clicks: ${clicks}`);
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
      <button onClick={() => setClicks(clicks + 1)}>
        {clicks}
      </button>
    </div>
  );
}

export default App;
