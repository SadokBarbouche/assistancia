import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Button,
  Image,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "../styles/items.css";
const NavBar = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      window.scrollY > 0
        ? document.getElementById("navbar").classList.add("shadow-lg")
        : document.getElementById("navbar").classList.remove("shadow-lg");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      id="navbar"
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#00B4D8" }}
      variant="transparent"
      sticky="top"
    >
      <Container className="text-light">
        <Navbar.Brand
          className="fs-3 fw-bolder text-dark"
          style={{ fontFamily: "Changa, sans-serif" }}
          href="#home"
        >
          <Image className="mb-2" style={{ height: "35px" }} fluid src={Logo} />
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
              <NavDropdown.Item href="#action/3.3">
                Offers
                <span style={{float:"right"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-gift"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                  </svg>
                </span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Demo
                <span style={{ float: "right", transform: "scaleX(-1)" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-camera-reels"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                    <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                    <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="me-md-2" style={{ textDecoration: "none" }}>
              {" "}
              <NavLink
                to="/Login"
                activeStyle
                style={{ textDecoration: "none" }}
              >
                <span
                  className=""
                  style={{ color: "rgb(3, 4, 94)", textDecoration: "none" }}
                >
                  {" "}
                  Login{" "}
                </span>
              </NavLink>
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
