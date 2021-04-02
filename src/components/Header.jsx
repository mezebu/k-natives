import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="dark"
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand style={{ color: "#fff" }}>Kharkiv Natives</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <Link to="/" style={{ color: "#fff" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="about" style={{ color: "#fff" }}>
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="course" style={{ color: "#fff" }}>
                  Coaching
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="contact" style={{ color: "#fff" }}>
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
