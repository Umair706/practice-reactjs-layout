import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const text = { color: "white", textDecoration: "none" };
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand style={{ color: "white" }}>React js Example</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" style={text}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" style={text}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" style={text}>
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login" style={text}>
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup" style={text}>
                Signup
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
