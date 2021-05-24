import React from "react";

function App() {
  const clicks = 0;

  return (
    <div className="App">
      <button onClick={() => { ++clicks }}>
        {clicks}
      </button>
    </div>
  );
}

export default App;
