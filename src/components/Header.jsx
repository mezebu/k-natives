import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <Navbar bg="transparent" expand="lg" variant="light">
          <Navbar.Brand style={{ color: "#39CCCC" }}>
            Kharkiv Natives
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <Link to="/" style={{ color: "#39CCCC" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="about" style={{ color: "#39CCCC" }}>
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="course" style={{ color: "#39CCCC" }}>
                  Coaching
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="contact" style={{ color: "#39CCCC" }}>
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
