import React from "react";
import "../styles/landing.css";
import { Button, Col, Collapse, Container, Image, Row } from "react-bootstrap";
import CVs from "../assets/CVs.png";
import CV from "../assets/cvs.svg";
import { Fade } from "react-reveal";
const LandingPage = () => {
  const screenHeight = window.screen.availHeight + "px";
  const screenWidth = window.screen.availWidth + "px";
  const midHeight = window.screen.availHeight * 0.2 + "px";

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "#00B4D8",
          height: screenHeight,
        }}
      >
        <Container className="px-5" style={{ paddingTop: midHeight }}>
          <Row>
            <Col>
              <Fade left>
                <p
                  className="text-start fs-1 fw-bolder"
                  style={{ color: "#CAF0F8" }}
                >
                  Job applications have{" "}
                  <span className="" style={{ color: "#03045E" }}>
                    never
                  </span>{" "}
                  been easier !
                </p>
                <p
                  className="text-start fs-6 w-md-75"
                  style={{ color: "#CAF0F8" }}
                >
                  A simple click is what it takes to create whatever document
                  you may need to land your dream job.
                </p>
                <div
                  className="text-start my-3"
                  style={{
                    display: "flex-inline",
                    justifyContent: "start",
                    alignContent: "start",
                  }}
                >
                  <Button
                    style={{ float: "left", backgroundColor: "#03045E" }}
                    className="rounded-pill px-4"
                  >
                    Explore
                  </Button>

                  <Button
                    style={{ float: "left" }}
                    className="ms-md-2 bg-transparent rounded-pill"
                    variant="primary"
                  >
                    {" "}
                    Discover our solutions
                  </Button>
                </div>
              </Fade>
            </Col>
            <Col className="d-none d-sm-block">
              <Fade up>
                <Image
                  fluid
                  id="#CVs"
                  src={CV}
                  style={{ marginTop: "-100px" }}
                />
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00B4D8"
          fill-opacity="1"
          d="M0,128L21.8,128C43.6,128,87,128,131,144C174.5,160,218,192,262,208C305.5,224,349,224,393,202.7C436.4,181,480,139,524,133.3C567.3,128,611,160,655,170.7C698.2,181,742,171,785,170.7C829.1,171,873,181,916,170.7C960,160,1004,128,1047,106.7C1090.9,85,1135,75,1178,96C1221.8,117,1265,171,1309,192C1352.7,213,1396,203,1418,197.3L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};
export default LandingPage;
