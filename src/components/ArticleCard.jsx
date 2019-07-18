import React from "react";
import { Link } from "@reach/router";
import "./ArticleCard.css";
import Vote from "./Vote";

const ArticleCard = ({ article, votes }) => {
  return (
    <div>
      <li className="article_card">
        <Vote
          votes={article.votes}
          id={article.article_id}
          section="articles"
        />
        <h5>title: {article.title}</h5>
        <p>topic: {article.topic}</p>
        {/* <p>votes:{article.votes}</p> */}
        <p>posted by:{article.author}</p>
        <p>created:{new Date(article.created_at).toUTCString()}</p>
        <p>{article.comment_count} comments</p>
        <Link to={`/articles/${article.article_id}`}>Read More</Link>
      </li>
    </div>
  );
};

export default ArticleCard;

//added votes to the articleCard
