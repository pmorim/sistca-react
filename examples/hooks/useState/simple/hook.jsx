import React, { useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setClicks(clicks + 1)}>
        {clicks}
      </button>
    </div>
  );
}

export default App;
