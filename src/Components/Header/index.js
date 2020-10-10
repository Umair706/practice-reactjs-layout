import React from "react";

import "./style.css";
import {
  Navbar,
  Nav,
} from "react-bootstrap";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const text = { color: "white", textDecoration: "none" };
  return (
    <div>
      <Navbar style={{backgroundColor:"blue",opacity:0.6}} expand="lg">
        <Navbar.Brand style={{ color: "white",display:"flex",flexDirection:"row" }}>
        <img
               
                style={{ height: 40,width:50 }}
                src={require("../../asset/logo.png")}
                alt="Logo"
              />  
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{marginTop:-10}} >
            <Nav.Link style={{color:"white",marginRight:15}} onClick={()=>{props.scrollToIntro()}}>
              Introduction
            </Nav.Link>
            <Nav.Link  style={{color:"white",marginRight:15}} className="link" onClick={()=>{props.scrollToSkills()}}>
                Skills
              </Nav.Link>
            <Nav.Link  style={{color:"white",marginRight:15}}className="link" onClick={()=>{props.scrollToHobbies()}}>
                Hobbies
            </Nav.Link>
            <Nav.Link  style={{color:"white",marginRight:15}} className="link" onClick={()=>{props.scrollToProjects()}}>
                Projects
            </Nav.Link>            
            <Nav.Link style={{color:"white"}}>
                Contact
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
