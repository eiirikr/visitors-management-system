import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-primary shadow-sm">
      <Container>
        <Nav className="d-flex flex-row align-items-center">
          <Navbar.Brand>
            <img
              className="logo"
              src="../../images/DICT-Logo.png"
              height="50"
            />
          </Navbar.Brand>
          <Navbar.Brand
            href="#"
            className="fs-6 d-none d-lg-block text-wrap  d-block text-center"
            style={{
              maxWidth: "203px",
              wordBreak: "break-word",
            }}
          >
            DEPARTMENT OF INFORMATION AND COMMUNICATIONS TECHNOLOGY
          </Navbar.Brand>

          <Navbar.Brand href="#" className="fw-bold fs-4 d-lg-none">
            DICT
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="navbarNav" className="border-0" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="text-white mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-white mx-2">
              About
            </Nav.Link>
            <Nav.Link href="#" className="text-white mx-2">
              Contact
            </Nav.Link>
            <Nav.Link href="#" className="text-white mx-2">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
