import React from "react";
import MyPost from "./MyPost";

const posts = [
  {
    title: "Hello World!",
    body: "I love to create React Apps.",
  },
  {
    title: "Hello again",
    body: "This is my second post",
  },
  {
    title: "Third times the charm",
    body: "This is the power of 'props'",
  },
];

function App() {
  return (
    <div className="App">
      {posts.map((post, i) => (
        /**
         * The keys can be any kind of basic type that can be treated as a hash
         * value, for example: a number or string.
         *
         * We are using the index of the post in the array as the key.
         * Remember that each key must be unique.
         */
        <MyPost key={i} data={post} />
      ))}
    </div>
  );
}

export default App;
