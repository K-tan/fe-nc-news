import React, { Component } from "react";
import axios from "axios";
// import * as api from "../utils/api";

class ArticlePage extends Component {
  state = {
    article: {}
  };

  render() {
    const { article } = this.state;
    return (
      <div className="main">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>{article.votes}</p>
        <p>{article.author}</p>
        <p>{article.created_at}</p>
        <p>{article.comment_count}</p>
      </div>
    );
  }

  // componentDidMount = () => {
  //   api.getArticleById().then(article => {
  //     this.setState({ article });
  //   });
  // };

  componentDidMount = () => {
    this.fetchArticleById().then(article => {
      this.setState({ article });
    });
  };

  fetchArticleById = async () => {
    const { id } = this.props;
    const { data } = await axios.get(
      `https://kp-nc-news.herokuapp.com/api/articles/${id}`
    );
    return data.article;
  };
}

export default ArticlePage;
