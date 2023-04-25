import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar expand="lg" className="bg-warning px-4">
      <Navbar.Brand className="nav-brand" href="/">
      <img className="nav-logo" src="/images/logo.png" alt='...'/>
        COOKBOOK
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="nav" />
      <Navbar.Collapse id="nav">
        <Nav className="ms-auto ms-auto mb-2 mb-lg-0">
          <Nav.Link href="/lists">HOME</Nav.Link>
          <Nav.Link href="/about">ABOUT US</Nav.Link>
          <Nav.Link href="/contact">CONTACT US</Nav.Link>
          <Nav.Link className="item-login btn btn-outline-dark" href="/login">LOGIN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;