import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar expand="sm" className="bg-warning py-2 mb-5">
      <Navbar.Brand href="/">Recipes App</Navbar.Brand>
      <Navbar.Toggle aria-controls="nav" />
      <Navbar.Collapse id="nav">
        <Nav className="ms-auto ms-auto mb-2 mb-lg-0">
          <Nav.Link href="/lists">HOME</Nav.Link>
          <Nav.Link href="/about">ABOUT US</Nav.Link>
          <Nav.Link href="/contact">CONTACT US</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;