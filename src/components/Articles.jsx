import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;

    return (
      <div className="main">
        <h1>All Articles</h1>
        <ul className="articles">
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    api.getArticles().then(articles => {
      this.setState({ articles });
    });
  };
}

export default Articles;
