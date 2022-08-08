import React from "react";
import { Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import SignUpPic from "../assets/signUp.svg";
import { Fade } from "react-reveal";

const SignUp = () => {
  return (
    <Fade>
      <div style={{
        backgroundColor:"#90E0EF",minHeight:"100vh",
}}>
        <div style={{}}>
          <Container style={{}}>
            <Row>
              <p
                style={{ color: "rgb(3, 4, 94)" }}
                className="display-2 text-start fw-bolder"
              >
                If opportunity doesn't knock,{" "}
                <span
                  style={{
                    color: "#00B4D8",
                    borderBottom: "5px #00B4D8 solid ",
                  }}
                >
                  build
                </span>{" "}
                a door.
              </p>
              <Col className="text-start fw-bolder">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="fs-5">Email address:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="fs-5">Password:</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Type your password"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="fs-5">
                      Confirm your password:
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Retype your password"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="fs-5">Birthday:</Form.Label>
                    <Form.Control type="date" placeholder="" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="fs-5">
                      Upload your profile picture:
                    </Form.Label>
                    <Form.Control type="file" placeholder="" />
                  </Form.Group>
                  <div
                    className="mt-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      type="submit"
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "rgb(3, 4, 94)",
                      }}
                      className=""
                    >
                      Create new account
                    </Button>
                  </div>
                </Form>
              </Col>
              <Col className="d-none d-lg-block">
                <Image
                  fluid
                  style={{
                    transform: "scaleX(-1)",
                    zIndex: "-1",
                    marginLeft: "-500px",
                    position: "absolute",
                    marginTop: "-40px",
                    height: "75%",
                  }}
                  src={SignUpPic}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Fade>
  );
};
export default SignUp;
