import React, { Component } from "react";
import * as api from "../utils/api";
import "../css/DeleteComment.css";

class DeleteComment extends Component {
  state = {
    author: "jessjelly"
  };

  render() {
    return (
      <div>
        <button text="submit" onClick={this.handleDelete}>
          delete
        </button>
      </div>
    );
  }

  handleDelete = event => {
    event.preventDefault();
    const { comment_id } = this.props;
    api.deleteComment(comment_id).then(this.props.removeComment(comment_id));
  };
}

export default DeleteComment;
