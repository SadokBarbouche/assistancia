import React, { useState } from "react";
import { Navbar, Container, NavDropdown, Nav, Button } from "react-bootstrap";
const NavBar = () => {
  const [shadow, setShadow] = useState("");
  const handleShadow = () => {
    setShadow("shadow-lg");
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#00B4D8" }}
      variant="transparent"
      sticky="top"
      className={shadow}
      onScroll={handleShadow}
    >
      <Container className="text-light">
        <Navbar.Brand className="fs-3  " href="#home">
          Assistancya
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">How to ?</Nav.Link>
            <Nav.Link href="#pricing">Why us ?</Nav.Link>
            <NavDropdown title="Other" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Offers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Demo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="me-md-2" href="">
              Login
            </Nav.Link>
            <Nav.Link eventKey={2} className="" href="">
              <Button
                className="px-3"
                style={{ backgroundColor: "rgb(3, 4, 94)", marginTop: "-5px" }}
              >
                Free Trial
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
