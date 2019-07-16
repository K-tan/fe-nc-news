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
        <ul className="articles">
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchArticles();
  };

  componentDidUpdate(prevProps, prevState) {
    const newTopic = this.props.topic !== prevProps.topic;
    if (newTopic) this.fetchArticles();
  }

  fetchArticles = () => {
    const { topic } = this.props;
    api.getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  };
}

export default Articles;
