import React from "react";
import MyPost from "./MyPost";

/**
 * Try to save this array in a JSON file and import it here.
 * This will be usefull if the blog posts start gettings long.
 * There is no need to clutter the main App file with all that text.
 */
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
         * value, such as a number or string.
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
