import React, { Component } from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import { Router } from "@reach/router";
import "./App.css";

import * as api from "./utils/api";
import ArticlePage from "./components/ArticlePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Nav />
        <Router>
          <Articles path="/" />
          <ArticlePage path="/articles/:id" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
