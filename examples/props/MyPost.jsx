import React from "react";

function MyPost({ data }) {
  return (
    <section className="post">
      <h2 className="title">{data.title}</h2>
      <p className="body">{data.body}</p>
    </section>
  );
}

/*
* Instead of deconstructing the object, you can acces the props through it:
* 
* function MyPost(props) {
*   return (
*     <section className="post">
*       <h2 className="title">{props.data.title}</h2>
*       <p className="body">{props.data.body}</p>
*     </section>
*   );
* }
*/

export default MyPost;
