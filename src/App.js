import React, { Component } from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import ArticlePage from "./components/ArticlePage";
import { Router } from "@reach/router";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Nav />
        <Router>
          <Articles path="/" />
          <ArticlePage path="articles/:id" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
