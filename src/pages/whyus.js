import React from "react";
import interview from "../assets/interview.svg";
import { Col, Container, Image, Row } from "react-bootstrap";
import ForFree from "../assets/forFree.svg";
import organized from "../assets/organized.svg";
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
        <div style={{ backgroundColor: "#90E0EF" }}>
          <Container>
            <Row>
              <Col>
                <p className="fw-bolder fs-1 ms-md-1 ms-sm-0 text-dark text-start">
                  We are the best
                </p>
                <div
                  className="text-start px-2 py-2"
                  style={{
                    display: "flex-inline",
                    backgroundColor: "#CAF0F8",
                    borderRadius: "15px",
                  }}
                >
                  <Image fluid src={ForFree} style={{ display: "inline" }} />
                  <p className="ms-2" style={{ display: "inline" }}>
                    Lorem Ipsum
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
                  <p className="ms-2" style={{ display: "inline" }}>
                    Lorem Ipsum
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
                  <p className="ms-2" style={{ display: "inline" }}>
                    Lorem Ipsum
                  </p>
                </div>
              </Col>
              <Col>
                <Image fluid src={interview} />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
}
export default WhyUs;