import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import connectFooter from "../assets/connectFooter.svg";
const Footer = () => {
  const screenHeight =
    window.screen.availHeight * (window.screen.availHeight < 600 ? 0.1 : 0.2) +
    "px";
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ marginTop: "-1px" }}
      >
        <path
          fill="#03045E"
          fill-opacity="1"
          d="M0,288L34.3,250.7C68.6,213,137,139,206,106.7C274.3,75,343,85,411,106.7C480,128,549,160,617,192C685.7,224,754,256,823,234.7C891.4,213,960,139,1029,101.3C1097.1,64,1166,64,1234,64C1302.9,64,1371,64,1406,64L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div style={{ backgroundColor: "#03045E" }}>
        <Container className="py-4">
          <Row>
            <Col md={5} sm={7} className="text-md-center text-lg-start ">
              <p
                className="text-light text-md-end fs-2 text-sm-center fw-bolder me-md-3"
                style={{}}
              >
                Subscribe to our Newsletter
              </p>
            </Col>
            <Col
              md={5}
              sm={7}
              className="ms-md-5"
              style={{ display: "inline-flex", height: "25%" }}
            >
              <Form.Control
                placeholder="Email address"
                className="me-2"
                style={{ borderRadius: "10px" }}
              />
              <Button
                variant="primary"
                style={{ borderRadius: "10px" }}
                className="fw-bolder bg-transparent"
              >
                Connect
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <hr className="fs-1" style={{ color: "white" }} />
            <Col md={8} className="text-start">
              <ul
                className="text-light"
                type="none"
                style={{ lineHeight: "1.9", marginTop: "50px" }}
              >
                <li className="">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-envelope"
                      viewBox="0 0 16 16"
                      style={{ marginRight: "5px" }}
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </span>
                  sadokchameseddine.barbouche@insat.ucar.tn
                  <br />
                </li>
                <li className="">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-envelope"
                      viewBox="0 0 16 16"
                      style={{ marginRight: "5px" }}
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </span>
                  moataz.bentrad@etudiant-fst.utm.tn
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-telephone"
                      style={{ marginRight: "5px" }}
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                  </span>
                  +216 55 730 501 / 53 209 372
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-geo-alt"
                      style={{ marginRight: "5px" }}
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    You can reach us at <span className="fw-bolder">INSAT</span>{" "}
                    or <span className="fw-bolder">FST</span>
                  </span>
                </li>
              </ul>
            </Col>
            <Col className="d-none d-md-block">
              <Image fluid src={connectFooter} style={{ height: "85%" }} />
            </Col>
          </Row>
          <div className="text-light fw-bolder">
            <p className="pt-5 text-decoration-underline">Copyright : Assistancia 2022</p>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Footer;
