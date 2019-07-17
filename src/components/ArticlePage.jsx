import React, { Component } from "react";
import * as api from "../utils/api";
import PostComment from "./PostComment";

class ArticlePage extends Component {
  state = {
    article: {},
    comments: []
  };

  render() {
    const { article, comments } = this.state;

    return (
      <div className="main">
        <PostComment
          updateComments={this.updateComments}
          article_id={article.article_id}
        />
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>votes:{article.votes}</p>
        <p>{article.author}</p>
        <p>{article.created_at}</p>
        <p>comments:{article.comment_count}</p>
        <div>
          <h1>Comments</h1>
          <ul className="commentsList">
            {comments.map(comment => {
              return (
                <li key={comment.comment_id}>
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

  updateComments = comment => {
    this.setState(state => {
      state.article.comment_count++;
      return { comments: [comment, ...state.comments] };
    });
  };

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
