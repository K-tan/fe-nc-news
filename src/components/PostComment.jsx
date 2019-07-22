import React, { Component } from "react";
import * as api from "../utils/api";
import "../css/PostComment.css";

class PostComment extends Component {
  state = {
    author: "jessjelly",
    body: ""
  };
  //the below will be created to render a form which will sit on the articles page
  render() {
    const { body } = this.state;
    return (
      <form className="postForm" onSubmit={this.handleSubmit}>
        {/* <label className="commentInputBodyLabel" htmlFor="body">
          comment
        </label> */}
        <textarea
          className="commentInputTextArea"
          type="text"
          id="body"
          value={body}
          onChange={this.handleChange}
        />
        <br />
        <button text="submit">add new comment</button>
      </form>
    );
  }

  //handle change this will update as you type in form
  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  //handle the submit this will submit the form and redirect to the message posted
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
