import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import "../css/Articles.css";

class Articles extends Component {
  state = {
    articles: [],
    sort_by: ""
  };

  render() {
    const { articles } = this.state;
    const { topic } = this.props;
    return (
      <div className="main">
        <h2 className="articleH2">
          {topic ? `Articles on ${topic}` : `All Articles`}
        </h2>
        <form>
          <select
            className="select-css"
            onChange={this.handleChange}
            value={this.state.value}
          >
            <option>SortBy</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
        </form>
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
    const newSortby = this.state.sort_by !== prevState.sort_by;
    if (newTopic || newSortby) this.fetchArticles();
  }

  fetchArticles = () => {
    const { topic } = this.props;
    const { sort_by } = this.state;
    api.getArticles(topic, sort_by).then(articles => {
      this.setState({ articles });
    });
  };

  handleChange = event => {
    event.preventDefault();
    const sort_by = event.target.value;
    this.setState({ sort_by });
    //bringing in from the app.js
  };
}

export default Articles;
