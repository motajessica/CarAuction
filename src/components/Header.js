import React from 'react';
import { Navbar, Nav, Container,Form, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


function Header() {   
  return (
 
    <Navbar fixed="top" expand="lg" className="bg-light px-4 py-3">
      <Navbar.Brand className="fw-bolder" href="/">
      <img className="nav-logo" src="/images/logo.png" alt='...'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="nav" />
      <Navbar.Collapse id="nav">
        <Nav className="ms-auto ms-auto mb-2 mb-lg-0">
        <Form className="ms-5 me-2 d-flex">
            <Form.Control
              type="search"
              placeholder="Find a Car"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark btn-sm">Search</Button>
        </Form>
            {/* <Nav.Link href="/contact">CONTACT US</Nav.Link> */}
            <NavDropdown title="How to buy" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">How to buy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sell your car" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Finance & Insurance" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Turners subscription" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          
          <Nav.Link className="fw-bold btn btn-outline-primary btn-sm " href="/login">Login</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>

  ) 
}
 

export default Header;