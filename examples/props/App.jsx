import React from "react";
import MyPost from "./MyPost";

function App() {
  const posts = [
    {
      title: "Hello World!",
      body: "I love to create React Apps.",
    },
    {
      title: "This is the second post",
      body: "This is the body of the second post.",
    }
  ];

  return (
    <div className="App">
      <MyPost data={posts[0]} />
      <MyPost data={posts[1]} />
    </div>
  );
}

export default App;
