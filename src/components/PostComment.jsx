import React, { Component } from "react";
import * as api from "../utils/api";
import "../css/PostComment.css";

class PostComment extends Component {
  state = {
    author: "jessjelly",
    body: ""
  };

  render() {
    const { body } = this.state;
    return (
      <form className="postForm" onSubmit={this.handleSubmit}>
        <textarea
          placeholder="Add comment here..."
          className="commentInputTextArea"
          type="text"
          id="body"
          value={body}
          onChange={this.handleChange}
        />
        <br />
        <button className="postCommentBtn" text="submit">
          Post Comment
        </button>
      </form>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { article_id } = this.props;
    const { author, body } = this.state;
    api.postComment(article_id, author, body).then(comment => {
      this.props.updateComments(comment);
    });
    this.setState({
      body: ""
    });
  };
}

export default PostComment;
