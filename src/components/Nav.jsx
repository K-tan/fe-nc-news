import React from "react";
import { Link } from "@reach/router";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" className="navbtn">
        Home
      </Link>
      <Link to="/topics/coding" className="navbtn">
        Coding
      </Link>
      <Link to="/topics/football" className="navbtn">
        Football
      </Link>
      <Link to="topics/cooking" className="navbtn">
        Cooking
      </Link>
    </nav>
  );
};

export default Nav;
