import React from "react";

function MyPost() {
  return (
    <section className="post">
      <h2 className="title">What is React?</h2>
      <p className="body">
        "React (also known as React.js or ReactJS) is an open-source, front end,
        JavaScript library for building user interfaces or UI components. It is
        maintained by Facebook and a community of individual developers and
        companies. React can be used as a base in the development of single-page
        or mobile applications. However, React is only concerned with state
        management and rendering that state to the DOM, so creating React
        applications usually requires the use of additional libraries for
        routing. React Router is an example of such a library. And also large
        and complicated applications are required to make AJAX calls to fetch or
        mutate data. You can use any library you like with React such as Axios,
        JQuery AJAX or the browser built-in window.fetch." - Wikipedia
      </p>
    </section>
  );
}

export default MyPost;
