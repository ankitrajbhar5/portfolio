import { Nav, Navbar, Container } from "react-bootstrap";

import "./Navbar.scss";

import React from "react";

function NavBar() {
  return (
    <div className="navBar">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#Home">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="fonts">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Skills">Skills</Nav.Link>
              <Nav.Link href="#Projects">Projects</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
