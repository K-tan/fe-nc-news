import React, { Component } from "react";
import * as api from "../utils/api";

class DeleteComment extends Component {
  state = {
    comment_id: 0
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
    api.deleteComment(comment_id);
  };
}

export default DeleteComment;
