import React, { useEffect, useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);

  /**
   * Only on Mount
   * 
   * The callback function is only executed when the component gets mounted,
   * i.e., the first render. Notice the empty dependency array.
   */
  useEffect(() => {
    console.info("First render!");
  }, []);

  /**
   * Dependency array
   * 
   * If instead you place one or multiple variables in the dependency array,
   * then the callback function will only be executed when those variables
   * change.
   */
  useEffect(() => {
    console.info(`Number of clicks: ${clicks}`);
  }, [clicks]);

  /**
   * Component life-cycle
   * 
   * If you don't add a dependency array at all, then the callback function
   * will be executed every time the components gets re-rendered.
   */
  useEffect(() => {
    console.info("Re-render...");
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
