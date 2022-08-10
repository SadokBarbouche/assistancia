import React, { useState } from "react";
import { ReactDOM } from "react";
import {
  Accordion,
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import {addEducationElement} from "../scripts/scripts.js";
import { Fade } from "react-reveal";
import FormPic from "../assets/Form.svg";
import { Helmet } from "react-helmet";

const AccordionElement = (props) => {
  return (
    <Accordion className="mt-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="">
          <h4 className="fs-5 fw-bold ">{props.Headline}</h4>
        </Accordion.Header>
        <Accordion.Body className="text-start" id="">
          <Form.Group
            className="mb-3 w-100"
            controlId="formBasicEmail"
            style={{ display: "flex" }}
          >
            <Form.Control type="email" placeholder={props.description} />
          </Form.Group>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

const FormToFill = () => {
  const EducationAccordionElement = (props) => {
    return (
      <Accordion
        className="mt-3"
        style={{ border: "1px black solid", borderRadius: "5px" }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header className="">
            <h4 className="fs-5 fw-bold ">{props.Headline}</h4>
          </Accordion.Header>
          <Accordion.Body className="text-start" id="educationBody">
            <Form.Group
              className="mb-3 w-100"
              controlId="formBasicEmail"
              style={{ display: "flex" }}
            >
              {/* <Form.Control type="email" placeholder={props.description} /> */}
              <Container
                className="py-3 px-3"
                style={{ border: "1px black solid", borderRadius: "5px" }}
              >
                <Row>
                  <Col className="mb-2">
                    <p className="">Education</p>
                    <Form.Control rows={3} type="email" />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <p>School</p>
                    <Form.Control rows={3} type="email" />
                  </Col>
                  <Col>
                    <p>City</p>
                    <Form.Control rows={3} type="email" />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} sm={7}>
                    <p className="mt-3">Start date</p>
                    <Form.Control
                      aria-label="Month"
                      className=""
                      type="month"
                      style={{ marginTop: "-10px" }}
                    ></Form.Control>
                  </Col>
                  <Col>
                    <p className="mt-3">End date</p>
                    <Form.Control
                      aria-label="description"
                      className=""
                      type="month"
                      style={{ marginTop: "-10px" }}
                    ></Form.Control>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="mt-3">Description</p>
                    <Form.Control
                      aria-label="description"
                      className=""
                      as="textarea"
                      rows={5}
                      maxLength="1500"
                      style={{ marginTop: "-10px" }}
                    ></Form.Control>
                  </Col>
                </Row>
              </Container>
            </Form.Group>
            <div id="toadd"></div>
            <div style={{}}>
              <Button
                id="addEducation"
                onClick={()=>{
                  addEducationElement()
                }}
                className="px-3 fs-6 "
                style={{}}
              >
                Add
                <span>
                  <svg
                    style={{ marginLeft: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </span>
              </Button>

              <Button style={{ float: "right" }}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-check"
                    style={{ marginLeft: "-10px" }}
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                </span>
                Finished
              </Button>
              <Button
                id="deleteEducation"
                variant="transparent"
                className="bg-transparent me-3"
                style={{ float: "right", display: "flex" }}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="black"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </span>
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#90E0EF",
      }}
    >
      <Container
        className="py-5"
        style={{
          minHeight: "100vh",
        }}
      >
        <Row style={{}}>
          <Col className="d-none d-lg-block">
            <Image src={FormPic} fluid style={{ height: "100%" }} />
          </Col>

          <Col className="text-start">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bolder fs-3">
                Professional Picture
              </Form.Label>
              <Form.Control type="file" placeholder="Firstname" />
            </Form.Group>

            <Form className="text-start">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">Firstname</Form.Label>
                  <Form.Control type="email" placeholder="Firstname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">Lastname</Form.Label>
                  <Form.Control type="email" placeholder="Lastname" />
                </Form.Group>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bolder">Email address</Form.Label>
                <Form.Control type="email" placeholder="Email address" />
              </Form.Group>
              <div
                className=""
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">
                    Seeked Job(Headline)
                  </Form.Label>
                  <Form.Control type="email" placeholder="Headline" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">Phone number</Form.Label>

                  <Form.Control
                    type="email"
                    placeholder="ie : +216 99 999 999"
                  />
                </Form.Group>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bolder">Brief description</Form.Label>
                <Form.Control
                  rows={3}
                  as="textarea"
                  type="email"
                  placeholder="A brief description about you"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bolder">Address</Form.Label>
                <Form.Control type="email" placeholder="Address" />
              </Form.Group>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">City</Form.Label>
                  <Form.Control type="email" placeholder="City" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">Post code</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Post code (ie : 7100)"
                  />
                </Form.Group>
              </div>
            </Form>
          </Col>
        </Row>
        <Container>
          <EducationAccordionElement Headline="Education " />
          <AccordionElement Headline="lorem" />
          <AccordionElement Headline="lorem" />
        </Container>
      </Container>
      <Helmet>
        <script src="../scripts/scripts.js"></script>
      </Helmet>
    </div>
  );
};

export default FormToFill;
