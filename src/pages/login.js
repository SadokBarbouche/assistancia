import React from "react";
import { Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import LoginImage from "../assets/login.svg";
import Footer from "../components/Footer.js";
import Blob from "../assets/blob.svg";
import { NavLink } from "react-router-dom";
// import "../styles/login.css";
import { Fade } from "react-reveal";
const Login = () => {
  return (
      <div
        style={{
          minHeight:"100vh",
          padding:"50px",
          backgroundColor: "rgb(144, 224, 239)",
        }}
      >
        <Container
          className="text-start"
          style={{ backgroundColor: "#90E0EF" }}
        >
          <Row
            className="py-5"
            // style={{ marginTop: window.screen.availHeight * 0.1 + "px" }}
          >
            <Col style={{ backgroundColor: "#90E0EF" }}>
              <Fade left>
                <p
                  className="display-5 fw-bold mb-4"
                  style={{ color: "#03045E" }}
                >
                  Opportunities don't happen until{" "}
                  <span
                    style={{
                      color: "#00B4D8",
                      borderBottom: "5px #00B4D8 solid",
                      paddingBottom: "5px",
                    }}
                  >
                    you
                  </span>{" "}
                  create them.
                </p>
                <Form style={{ backgroundColor: "#90E0EF" }}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fs-4 fw-bold">
                      Email address
                  </Form.Label>
                    <Form.Control
                      type="email"
                      className=""
                      placeholder="Enter email"
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fs-4 fw-bolder">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Stay Logged" />
                  </Form.Group>
                  <Button
                    className="me-2"
                    style={{
                      display: "inline",
                      borderRadius: "15px",
                      backgroundColor: "#03045E",
                    }}
                    type="submit"
                  >
                    Log In
                  </Button>
                  <NavLink to="/SignUp" activeStyle>
                    <p
                      className=" text-decoration-underline fw-bold"
                      style={{
                        display: "inline",
                        color: "#00B4D8",
                      }}
                    >
                      Don't have an account ? Sign up !
                    </p>
                  </NavLink>
                </Form>
              </Fade>
            </Col>
            <Col
              style={{ backgroundColor: "#90E0EF", zIndex: "" }}
              className="d-none d-xl-block pt-5 mt-5"
            >
              <Fade right>
                <Image src={LoginImage} style={{ }} fluid />
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
  );
};
export default Login;
