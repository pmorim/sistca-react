import React from "react";

function MyPost({ data }) {
  return (
    <section className="post">
      <h2 className="title">{data.title}</h2>
      <p className="body">{data.body}</p>
    </section>
  );
}

export default MyPost;
