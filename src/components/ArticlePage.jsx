import React, { Component } from "react";
import * as api from "../utils/api";
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";
import Vote from "./Vote";
import "../css/ArticlePage.css";

class ArticlePage extends Component {
  state = {
    article: {},
    comments: []
  };

  render() {
    const { article, comments } = this.state;

    return (
      <div className="main">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>votes:{article.votes}</p>
        <p>{article.author}</p>
        <p>{new Date(article.created_at).toUTCString()}</p>
        <p>comments:{article.comment_count}</p>
        <PostComment
          updateComments={this.updateComments}
          article_id={article.article_id}
        />
        <div>
          <h1>Comments</h1>
          <ul className="commentsList">
            {comments.map(comment => {
              return (
                <li key={comment.comment_id}>
                  <Vote
                    votes={comment.votes}
                    id={comment.comment_id}
                    section="comments"
                  />
                  <p>{comment.author}</p>
                  <p>{new Date(comment.created_at).toUTCString()}</p>
                  {/* <p>votes:{comment.votes}</p> */}
                  <p>{comment.body}</p>
                  <DeleteComment
                    article_id={this.article_id}
                    comment_id={comment.comment_id}
                    removeComment={this.removeComment}
                  />
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

  removeComment = comment_id => {
    console.log(comment_id);
    this.setState(state => {
      state.article.comment_count--;
      return {
        comments: [
          ...this.state.comments.filter(comment => {
            if (comment.comment_id !== comment_id) return comment;
          })
        ]
      };
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
