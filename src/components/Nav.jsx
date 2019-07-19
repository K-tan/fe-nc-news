import React from "react";
import { Link } from "@reach/router";
import "../css/Nav.css";
import "../css/App.css";
import home from "../img/home.svg";
import coding from "../img/coding.svg";
import football from "../img/football.svg";
import cooking from "../img/cooking.svg";

const Nav = ({ topics }) => {
  return (
    <div className="nav">
      <nav className="nav-icons">
        <Link to="/" className="navbtn">
          <img className="icon" alt="home-icon" src={home} />
        </Link>
        <Link to={`/topics/coding`} className="navbtn">
          <img className="icon" alt="coding-icon" src={coding} />
        </Link>
        <Link to={`/topics/football`} className="navbtn">
          <img className="icon" alt="football-icon" src={football} />
        </Link>
        <Link to={`/topics/cooking`} className="navbtn">
          <img className="icon" alt="cooking-icon" src={cooking} />
        </Link>
      </nav>
    </div>
  );
};

// const Nav = ({ topics }) => {
//   return (
//     <nav className="nav">
//       <Link to="/" className="navbtn">
//         <img className="icon" alt="home-icon" src={home} />
//       </Link>
//       {topics.map(({ slug }) => (
//         <Link to={`/topics/${slug}`} className="navbtn" key={slug}>
//           {slug}
//         </Link>
//       ))}

//       <img className="icon" alt="coding-icon" src={coding} />
//       <img className="icon" alt="football-icon" src={football} />
//       <img className="icon" alt="cooking-icon" src={cooking} />
//     </nav>
//   );
// };

export default Nav;
