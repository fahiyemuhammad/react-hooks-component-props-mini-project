import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";
import Header from "./Header";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Article />
      <ArticleList />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
