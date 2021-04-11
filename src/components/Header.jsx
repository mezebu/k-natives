import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
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
          <Navbar.Brand
            style={{ color: "#fff", cursor: "pointer" }}
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            Kharkiv Natives
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <Link
                  to="home"
                  activeClass="active"
                  smooth={true}
                  duration={500}
                  style={{ color: "#fff" }}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link
                  to="about"
                  activeClass="active"
                  smooth={true}
                  duration={500}
                  style={{ color: "#fff" }}
                >
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link
                  to="course"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ color: "#fff" }}
                >
                  Courses
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link
                  to="stories"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ color: "#fff" }}
                >
                  Stories
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ color: "#fff" }}
                >
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
