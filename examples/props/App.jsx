import React from "react";
import MyPost from "./MyPost";

function App() {
  const post = {
    title: "Hello World!",
    body: "I love to create React Apps.",
  };

  return (
    <div className="App">
      <MyPost data={post} />
    </div>
  );
}

export default App;
