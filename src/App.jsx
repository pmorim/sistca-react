import React from "react";

function MyPost({ data }) {
  return (
    <section className="post">
      <h2 className="title">{data.title}</h2>
      <p className="body">{data.body}</p>
    </section>
  );
}

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
        <MyPost key={i} data={post} />
      ))}
    </div>
  );
}

export default App;
