import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <header className="headerComponent">
      <div style={{ display: "flex" }}>
        <div className="logo"><h4 style={{color:"white",marginLeft:10}}>Example App</h4></div>
        <div className="links" style={{marginTop:5}}>
          <ul>
            <li>
              <Link className="StyledLink" style={{textDecoration:"none",color:"white"}} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="StyledLink" style={{textDecoration:"none",color:"white"}} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="StyledLink" style={{textDecoration:"none",color:"white"}} to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="StyledLink" style={{textDecoration:"none",color:"white"}} to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="StyledLink" style={{textDecoration:"none",color:"white"}}to="/signup">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
