import React from "react";
import { Link } from "@reach/router";
import "../css/ArticleCard.css";
import Vote from "./Vote";

const ArticleCard = ({ article }) => {
  return (
    <div className="article_box">
      <li className="article_card">
        {/* <p>votes:{article.votes}</p> */}
        <p>Posted by: {article.author}</p>
        <h3>{article.title}</h3>
        <p>Topic: {article.topic}</p>
        <p>Posted: {new Date(article.created_at).toUTCString()}</p>
        <p>{article.comment_count} comments</p>
        <Vote
          votes={article.votes}
          id={article.article_id}
          section="articles"
        />
        <Link to={`/articles/${article.article_id}`} className="readMore">
          Read More
        </Link>
      </li>
    </div>
  );
};

export default ArticleCard;

//added votes to the articleCard
