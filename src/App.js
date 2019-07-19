import React, { Component } from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import ArticlePage from "./components/ArticlePage";
import PostComment from "./components/PostComment";
import Error from "./components/Error";
import { Router } from "@reach/router";
import "./css/App.css";
import * as api from "./utils/api";

class App extends Component {
  state = {
    topics: []
  };

  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Heading />
        <Nav topics={topics} />
        <Router>
          <Articles path="/" />
          <Articles path="/topics/:topic" />
          <ArticlePage path="/articles/:article_id" />
          <PostComment path="/newcomment:/" />
          <Error path="/error" />
        </Router>
        <Footer />
      </div>
    );
  }

  componentDidMount = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };
}

export default App;
