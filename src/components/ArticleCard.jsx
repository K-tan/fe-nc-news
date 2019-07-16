import React from "react";
import { Link } from "@reach/router";
import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <li className="article_card">
      <h5>title: {article.title}</h5>
      <p>topic: {article.topic}</p>
      <p>votes:{article.votes}</p>
      <p>posted by:{article.author}</p>
      <p>created:{article.created_at}</p>
      <p>{article.comment_count} comments</p>
      <Link to={`/articles/${article.article_id}`}>Read More</Link>
    </li>
  );
};

export default ArticleCard;
