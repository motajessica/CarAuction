import React from 'react';
import { Navbar, Nav, Container,Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


function Header() {   
  return (
 
    <Navbar fixed="top" expand="lg" className="bg-light px-4">
      <Navbar.Brand className="fw-bolder" href="/">
      <img className="nav-logo" src="/images/logo.png" alt='...'/>
        TURNER
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="nav" />
      <Navbar.Collapse id="nav">

      

        <Nav className="ms-auto ms-auto mb-2 mb-lg-0">
        <Form className="ms-5 me-3 d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark btn-sm">Search</Button>
        </Form>
          <Nav.Link href="/lists">HOME</Nav.Link>
          <Nav.Link href="/about">ABOUT US</Nav.Link>
          <Nav.Link href="/contact">CONTACT US</Nav.Link>
          <Nav.Link href="/contact">CONTACT US</Nav.Link>
          <Nav.Link className="fw-bold btn btn-outlined-light " href="/login">LOGIN</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>

  ) 
}
 

export default Header;