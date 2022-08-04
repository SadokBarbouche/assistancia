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
            width:"50%",
            top: "0",
            marginTop: "40px",
            right: "0",

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
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-eye"
                    className="ms-1 py-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </Fade>
      </Container>
    </div>
  );
};
export default LandingPage
