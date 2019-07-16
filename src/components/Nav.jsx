import React from "react";
import { Link } from "@reach/router";
import "./Nav.css";

const Nav = ({ topics }) => {
  return (
    <nav className="nav">
      <Link to="/" className="navbtn">
        Home
      </Link>
      {topics.map(({ slug }) => (
        <Link to={`/topics/${slug}`} className="navbtn" key={slug}>
          {slug}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
