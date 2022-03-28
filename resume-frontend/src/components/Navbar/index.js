import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css';
  
const NavigationBar = () => {
  return (
    <header>
      <nav>
        <Link to="/">PPPD</Link>
        <ul id="navigation">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/isolation">Isolation Project</Link>
          </li>
        </ul>
      </nav>
    </header>
    
    /*
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Patrick Davis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/isolation">Isolation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another Project</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Another Project</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Divider display</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    */
  );
};
  
export default NavigationBar;