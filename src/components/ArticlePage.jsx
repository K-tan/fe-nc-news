import React, { Component } from "react";
import * as api from "../utils/api";

class ArticlePage extends Component {
  state = {
    article: {},
    comments: []
  };

  render() {
    const { article, comments } = this.state;
    console.log(comments);
    return (
      <div className="main">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>votes:{article.votes}</p>
        <p>{article.author}</p>
        <p>{article.created_at}</p>
        <p>comments:{article.comment_count}</p>
        <div>
          <ul className="commentsList">
            {comments.map(comment => {
              return (
                <li>
                  <p>{comment.author}</p>
                  <p>{comment.created_at}</p>
                  <p>votes:{comment.votes}</p>
                  <p>{comment.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(article => {
      this.setState({ article });
    });
    api.getComments(article_id).then(comments => {
      this.setState(comments);
    });
  };
}

export default ArticlePage;
