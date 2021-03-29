import React from "react";
import MyPost from "./MyPost";

function App() {
  const post1 = {
    title: "Hello World!",
    body: "I love to create React Apps.",
  };
  const post2 = {
    title: "This is the second post",
    body: "This is the body of the second post.",
  };

  return (
    <div className="App">
      <MyPost data={post1} />
      <MyPost data={post2} />
    </div>
  );
}

export default App;
