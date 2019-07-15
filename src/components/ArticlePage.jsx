import React, { Component } from "react";

class ArticlePage extends Component {
  state = {
    article: {
      article_id: 0,
      title: "",
      body: "test",
      votes: 0,
      topic: "test",
      author: "test",
      created_at: "2018-05-30T15:59:13.341Z",
      comment_count: "0"
    }
  };

  render() {
    return (
      <div>
        <h1>article page</h1>
      </div>
    );
  }
}

export default ArticlePage;
