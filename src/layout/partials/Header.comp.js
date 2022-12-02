import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="dark" expand="light" variant="dark">
      <Container>
        <Navbar.Brand href="#home">CRM-Master</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
