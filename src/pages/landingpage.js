import React from "react";
import { Container, Image } from "react-bootstrap";
import CVs from "../assets/CVs.png";
import Fade from "react-reveal/Fade";
const LandingPage = () => {
  return (
    <div>
      <Fade right>
        <Image
          fluid
          src={CVs}
          className="me-3 img-fluid d-none d-lg-block "
          style={{
            position: "fixed",
            zIndex: "-1",
            top: "0",
            right: 0,
            opacity: "0.8",
            transform: "rotate(25deg)",
          }}
        />
      </Fade>
      <Container className="pt-5">
        <div className="text-start">
          <Fade left>
            <p className="display-1 fw-bolder text-start mt-5">Assistancia</p>
            <p className="fs-1 text-start">
              Job applications have never been easier
            </p>
          </Fade>
          
        </div>
      </Container>
    </div>
  );
};
export default LandingPage;
