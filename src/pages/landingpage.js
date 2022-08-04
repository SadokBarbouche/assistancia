import React from "react";
import "../styles/landing.css";
import { Button, Container, Image } from "react-bootstrap";
import CVs from "../assets/CVs.png";
import { Fade } from "react-reveal";
const LandingPage = () => {
  const screenHeight = window.screen.availHeight + "px";
  const screenWidth = window.screen.availWidth + "px";

  return (
    <div id="landing" className="py-3" style={{ height: screenHeight }}>
      <Fade right>
        <Image
          fluid
          src={CVs}
          className="me-3 img-fluid d-none d-lg-block "
          style={{
            position: "absolute",
            zIndex: "-1",
            top: "0",
            marginTop: "40px",
            right: "0",
            marginRight: "-1000px",
          }}
        />
      </Fade>
      <Container className="pt-5">
        <Fade left>
          <div className="text-start">
            <p
              style={{ font: "Gill Sans" }}
              className="display-1 fw-bolder text-lg-start text-sm-center mt-5"
            >
              Assistancia
            </p>
            <p className="fs-2 text-lg-start text-sm-center">
              Job applications have <span className="text-danger">never</span>{" "}
              been easier !
            </p>
            <p className="fs-6 text-lg-start text-sm-center">
              A simple click is what it takes to create whatever document you
              may need to land your dream job.
            </p>
            <div className="text-lg-start text-sm-center">
              <Button
                className="mt-4"
                variant="primary"
                size="lg"
                style={{ backgroundColor: "#4cbb17" }}
              >
                Explore
              </Button>
            </div>
          </div>
        </Fade>
      </Container>
    </div>
  );
};
export default LandingPage;
