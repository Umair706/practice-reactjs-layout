import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Navbar, Nav, NavItem,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const text = {color:"white",textDecoration:"none"}
  return (
  <div>
<Navbar bg="dark" expand="lg">
  <Navbar.Brand style={{color:"white"}}>React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to ="/" style={text}>Home</Link></Nav.Link>
      <Nav.Link><Link to ="/about" style={text}>About</Link></Nav.Link>
      <Nav.Link><Link to ="/contact" style={text}>Contact</Link></Nav.Link>
      <Nav.Link><Link to ="/login" style={text}>Login</Link></Nav.Link>
      <Nav.Link><Link to ="/signup" style={text}>Signup</Link></Nav.Link>

      {/* <NavDropdown style={{color:"red",backgroundColor:"white"}} title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to ="/contact" style={{textDecoration:"none",color:"gray"}}>Contact</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to ="/login" style={{textDecoration:"none",color:"gray"}}>Login</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to ="/signup" style={{textDecoration:"none",color:"gray"}}>Sign Up</Link></NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
  </div>
  );
  }

  export default Header;

