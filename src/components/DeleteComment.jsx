import React, { Component } from "react";
import * as api from "../utils/api";
import "../css/DeleteComment.css";

class DeleteComment extends Component {
  state = {
    author: "jessjelly"
  };

  render() {
    return (
      <button
        text="submit"
        className="deleteButton"
        onClick={this.handleDelete}
      >
        delete
      </button>
    );
  }

  handleDelete = event => {
    event.preventDefault();
    const { comment_id } = this.props;
    api.deleteComment(comment_id).then(this.props.removeComment(comment_id));
  };
}

export default DeleteComment;
