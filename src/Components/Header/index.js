import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function Header
 **/
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
const Header = (props) => {
  return (
    // <header className="headerComponent">
    //   <div style={{ display: "flex" }}>
    //     <div className="logo"><h4 style={{color:"white",marginLeft:10}}>Example App</h4></div>
    //     <div className="links" style={{marginTop:5}}>
    //       <ul>
    //         <li>
    //           <Link className="StyledLink" style={{textDecoration:"none",color:"white"}} to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link className="StyledLink" style={{textDecoration:"none",color:"white"}} to="/about">
    //             About
    //           </Link>
    //         </li>
    //         <li>
    //           <Link className="StyledLink" style={{textDecoration:"none",color:"white"}} to="/contact">
    //             Contact
    //           </Link>
    //         </li>
    //         <li>
    //           <Link className="StyledLink" style={{textDecoration:"none",color:"white"}} to="/login">
    //             Login
    //           </Link>
    //         </li>
    //         <li>
    //           <Link className="StyledLink" style={{textDecoration:"none",color:"white"}}to="/signup">
    //             Signup
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </header>
    <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">
          Our Awesome Store
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem
          eventKey={1}
          href="/">
          Home
        </NavItem>
        <NavItem
          eventKey={2}
          href="/contact">
          Contact
        </NavItem>
        <NavItem
          eventKey={3}
          href="/about">
          <Glyphicon glyph="shopping-cart" />
          {' About'}
        </NavItem>
        <NavItem
          eventKey={3}
          href="/login">
          <Glyphicon glyph="shopping-cart" />
          {'Login'}
        </NavItem>
        <NavItem
          eventKey={3}
          href="/signup">
          <Glyphicon glyph="shopping-cart" />
          {'Sign Up'}
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Header;
