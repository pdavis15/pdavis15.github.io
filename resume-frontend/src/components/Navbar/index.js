import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PPPDImage from '../../images/PPPD.png'
import './index.css';
  
const NavigationBar = () => {
  return (
    // <header>
    //   <nav>
    //     <Link to="/">PPPD</Link>
    //     <ul id="navigation">
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/resume">Resume</Link>
    //       </li>
    //       <li>
    //         <Link to="/isolation">Isolation Project</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
    
    
    <Navbar bg="black" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={PPPDImage}
            width="170"
            height="70"
            className="d-inline-block align-top"
            alt="PPPD logo"
           />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">Education</Nav.Link>
            <Nav.Link as={Link} to="/resume">Work Experience</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/isolation">Isolation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another Project</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Another Project</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Divider display</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Hire Me!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};
  
export default NavigationBar;