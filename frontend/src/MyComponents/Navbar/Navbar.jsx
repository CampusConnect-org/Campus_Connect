import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import { useStateValue } from "../../MyContexts/StateProvider";
export const Navbar=()=> {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span>Campus-Connect</span>
        <span>Connect.Collaborate.Create</span>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users"><img src={require("./chat.png")} alt="" /></Link>
          </li>
          <li>
            <Link to="/settings"><img src={require("./settings.png")} alt="" /></Link>
          </li>
          <li>
            <Link to="/profile"><img src={require("./profile.png")} alt="" /></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

