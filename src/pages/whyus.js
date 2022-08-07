import React from "react";
import interview from "../assets/interview.svg";
import { Col, Container, Image, Row } from "react-bootstrap";
import ForFree from "../assets/forFree.svg";
import organized from "../assets/organized.svg";
import speed from "../assets/speed.svg";
import { Fade } from "react-reveal";

const WhyUs = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#90E0EF"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="py-3" style={{ backgroundColor: "#90E0EF" }}>
        <Container>
          <p
            className="fw-bolder fs-1 ms-md-1 ms-sm-0  text-start mb-5"
            style={{ color: "#03045E" }}
          >
            A solution designed for every job applicant
          </p>
          <Row>
            <Col>
              <Fade left>
                <div
                  className="text-start px-1 py-2"
                  style={{
                    display: "flex-inline",
                    backgroundColor: "#CAF0F8",
                    borderRadius: "15px",
                  }}
                >
                  <Image src={ForFree} style={{ display: "inline" }} />
                  <p className="ms-2 " style={{ display: "inline" }}>
                    We offer{" "}
                    <span
                      className="fw-bolder text-decoration-underline"
                      style={{ color: "#03045E" }}
                    >
                      free
                    </span>{" "}
                    services for job applicants in order to save them{" "}
                    <span className="fw-bolder">time and energy.</span>
                  </p>
                </div>
                <br />
                <div
                  className="text-start px-2 py-2"
                  style={{
                    display: "flex-inline",
                    backgroundColor: "#CAF0F8",
                    borderRadius: "15px",
                  }}
                >
                  <Image
                    src={speed}
                    style={{ display: "inline", width: "8.5%" }}
                  />
                  <p className="ms-2" style={{ display: "inline" }}>
                    All you have to do is to fill a form and you are free to go.
                    The whole process won't take longer than 10 minutes.
                  </p>
                </div>
                <br />
                <div
                  className="text-start px-2 py-2"
                  style={{
                    display: "flex-inline",
                    backgroundColor: "#CAF0F8",
                    borderRadius: "15px",
                  }}
                >
                  <Image
                    fluid
                    src={organized}
                    style={{ display: "inline", width: "8.5%" }}
                  />
                  <p
                    className="ms-2"
                    style={{ display: "inline", color: "#03045E" }}
                  >
                    Don't bother yourself adjusting design. Our platform will do
                    it <strong>the best way for you.</strong>
                  </p>
                </div>
              </Fade>
            </Col>
            <Col className="d-none d-md-block">
              <Fade right>
                <Image fluid src={interview} />
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(144, 224, 239)"
          fill-opacity="1"
          d="M0,0L24,26.7C48,53,96,107,144,149.3C192,192,240,224,288,218.7C336,213,384,171,432,160C480,149,528,171,576,154.7C624,139,672,85,720,64C768,43,816,53,864,80C912,107,960,149,1008,176C1056,203,1104,213,1152,208C1200,203,1248,181,1296,154.7C1344,128,1392,96,1416,80L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};
export default WhyUs;
