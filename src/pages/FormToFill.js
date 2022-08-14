import React, { useState } from "react";
import { ReactDOM } from "react";
import "../styles/btns.css";
import {
  Accordion,
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Image,
  Row,
} from "react-bootstrap";

import {
  addAchievements,
  addAchievementsContent,
  addCertificateElement,
  addHobbyElement,
  addLanguageElement,
  addQualitiesElement,
  deleteAchievement,
  deleteCertificate,
  deleteHobby,
  deleteLanguage,
  deleteQuality,
} from "../scripts/scripts.js";
import {
  addEducationElement,
  deleteEducation,
  skillLevel,
  addSkillElement,
  deleteSkill,
} from "../scripts/scripts.js";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { addEmploymentElement, deleteEmployment } from "../scripts/scripts.js";
import FormPic from "../assets/FormPic.svg";
import { Fade } from "react-reveal";

const AccordionElement = (props) => {
  return (
    <Accordion className="mt-3">
      <Accordion.Item eventKey="1">
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
  const EmploymentElement = (props) => {
    return (
      <Accordion
        defaultActiveKey="0"
        className="mt-3"
        style={{ borderRadius: "5px" }}
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header className="">
            <h4 className="fs-5 fw-bold ">{props.Headline}</h4>
          </Accordion.Header>
          <Accordion.Body className="text-start">
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
                    <Form.Control rows={3} type="text" />
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
                onClick={() => addEducationElement()}
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
                onClick={() => deleteEducation()}
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

  const EmploymentAccordionElement = (props) => {
    return (
      <Accordion
        defaultActiveKey="0"
        className="mt-3"
        style={{ borderRadius: "5px" }}
      >
        <Accordion.Item eventKey="1">
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
                    <p className="">
                      Position
                      <span style={{ display: "inline", float: "right" }}>
                        {" "}
                        <Form.Check
                          style={{ display: "flex" }}
                          type="switch"
                          id="custom-switch"
                          label="&nbsp;Internship"
                        />
                      </span>
                    </p>

                    <Form.Control rows={3} type="email" />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <p>Employer</p>
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
            <div id="employmenttoadd"></div>
            <div style={{}}>
              <Button
                id="addEmployment"
                onClick={() => addEmploymentElement()}
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
                onClick={() => deleteEmployment()}
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

  const SkillsAccordionElement = (props) => {
    return (
      <Accordion
        defaultActiveKey="0"
        className="mt-3"
        style={{ borderRadius: "5px" }}
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header className="">
            <h4 className="fs-5 fw-bold ">{props.Headline}</h4>
          </Accordion.Header>
          <Accordion.Body className="text-start" id="educationBody">
            <Form.Group
              className="mb-3 w-100"
              controlId="formBasicEmail"
              style={{ display: "flex" }}
            />

            <Container
              className="py-3 px-3"
              style={{ border: "1px black solid", borderRadius: "5px" }}
            >
              <Row>
                <Col className="mb-2">
                  <p className="">Skill</p>
                  <Form.Control rows={3} type="text" />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <p>Level</p>
                  <Form.Range
                    onClick={() => skillLevel()}
                    step={25}
                    className=""
                    style={{ width: "90%" }}
                    id="skillLevelRange"
                  />
                  <p
                    id="levelSk"
                    style={{ display: "inline", float: "right" }}
                  ></p>
                </Col>
              </Row>
            </Container>
            <div id="skillsToAdd"></div>
            <div style={{ marginTop: "15px" }}>
              <Button
                id="addEducation"
                onClick={() => addSkillElement()}
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
                onClick={() => deleteSkill()}
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

  const LanguagesAccordionElement = (props) => {
    return (
      <Accordion
        defaultActiveKey="0"
        className="my-3"
        style={{ borderRadius: "5px" }}
      >
        <Accordion.Item eventKey="1" className="">
          <Accordion.Header className="">
            <h4 className="fs-5 fw-bold ">{props.Headline}</h4>
          </Accordion.Header>
          <Accordion.Body className="text-start" id="educationBody">
            <Form.Group
              className="mb-3 w-100"
              controlId="formBasicEmail"
              style={{ display: "flex" }}
            />

            <Container
              className="py-3 px-3"
              style={{ border: "1px black solid", borderRadius: "5px" }}
            >
              <Row>
                <Col className="mb-2">
                  <p className="">Language</p>
                  <Form.Control rows={3} type="text" />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <p>Level</p>
                  <Form.Group
                    step={25}
                    className=""
                    style={{ width: "80%", display: "inline" }}
                    id="skillLevelRange"
                  >
                    <Form.Control
                      type="number"
                      max="5"
                      step="0.1"
                      placeholder="Your Level on a scale of 1 to 5"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
            <div id="languagesToAdd"></div>
            <div style={{ marginTop: "15px" }}>
              <Button
                id="addLanguage"
                onClick={() => addLanguageElement()}
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
                onClick={() => deleteLanguage()}
                id="deleteLanguage"
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

  const CertificateAccordionElement = (props) => {
    return (
      <Accordion
        defaultActiveKey="0"
        className="mt-3"
        style={{ borderRadius: "5px" }}
      >
        <Accordion.Item eventKey="1">
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
                    <p className="">Certificate</p>

                    <Form.Control rows={3} type="email" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="mt-3">Date of obtention:</p>
                    <Form.Control
                      aria-label="Month"
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
                      placeholder="Make it smooth."
                      rows={3}
                      maxLength="100"
                      style={{ marginTop: "-10px" }}
                    ></Form.Control>
                  </Col>
                </Row>
              </Container>
            </Form.Group>
            <div id="certifToadd"></div>
            <div className="" style={{}}>
              <Button
                id="addCertificate"
                onClick={() => addCertificateElement()}
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
                onClick={() => deleteCertificate()}
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
  const AchievementsExtraActivitiesAccordionElment = (props) => {
    return (
      <Accordion
        defaultActiveKey="0"
        className="mt-3"
        style={{ borderRadius: "5px" }}
      >
        <Accordion.Item eventKey="1">
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
                    <p className="">Position</p>
                    <Form.Control
                      rows={3}
                      type="text"
                      placeholder="ie: President | Member | HR ..."
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col md={6} sm={7}>
                    <p>Club or Association</p>
                    <Form.Control rows={3} type="text" />
                  </Col>
                  <Col md={6} sm={7}>
                    <p>City</p>
                    <Form.Control rows={3} type="text" />
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
            <div id="achievementstoadd"></div>
            <div style={{}}>
              <Button
                id="addAchievement"
                onClick={() => addAchievementsContent()}
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
                onClick={() => deleteAchievement()}
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
  const EducationAccordionElement = (props) => {
    return (
      <Accordion
        defaultActiveKey="0"
        className="mt-3"
        style={{ borderRadius: "5px" }}
      >
        <Accordion.Item eventKey="1">
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
                onClick={() => addEducationElement()}
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
                onClick={() => deleteEducation()}
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
  const HobbiesAccordionElement = (props) => {
    return (
      <Accordion
        defaultActiveKey="0"
        className="mt-3"
        style={{ borderRadius: "5px" }}
      >
        <Accordion.Item eventKey="1">
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
                    <p className="">Hobby</p>
                    <Form.Control rows={3} type="text" />
                  </Col>
                </Row>
              </Container>
            </Form.Group>
            <div id="hobbiestoadd"></div>
            <div style={{}}>
              <Button
                id="addHobby"
                onClick={() => addHobbyElement()}
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
                onClick={() => deleteHobby()}
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

  const QualitiesAccordionElement = (props) => {
    return (
      <Accordion
        defaultActiveKey="0"
        className="mt-3"
        style={{ borderRadius: "5px" }}
      >
        <Accordion.Item eventKey="1">
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
                    <p className="">Quality</p>
                    <Form.Control rows={3} type="text" />
                  </Col>
                </Row>
              </Container>
            </Form.Group>
            <div id="qualitiestoadd"></div>
            <div style={{}}>
              <Button
                id="addQuality"
                onClick={() => addQualitiesElement()}
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
                onClick={() => deleteQuality()}
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
      <div style={{ width: "100%", position: "absolute", top: "0" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            width={100}
            fill="#00B4D8"
            fill-opacity="1"
            d="M0,96L48,133.3C96,171,192,245,288,256C384,267,480,213,576,170.7C672,128,768,96,864,101.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <Container
        className="py-3"
        style={{
          minHeight: "100vh",
        }}
      >
        <Row style={{}}>
          <Col className="d-none d-lg-block" style={{ height: "100%" }}>
            <Fade left>
              <Image
                src={FormPic}
                className="mt-5 pt-5"
                fluid
                style={{ transform: "scaleX(1)", marginLeft: "-75px" }}
              />
            </Fade>
          </Col>
          <Col className="text-start">
            <Fade>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bolder fs-3">
                  Professional Picture
                </Form.Label>
                <Form.Control type="file" />
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
                    <Form.Control
                      className="fn"
                      type="text"
                      placeholder="Firstname"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 ms-2" controlId="formBasicEmail">
                    <Form.Label className="fw-bolder">Lastname</Form.Label>
                    <Form.Control
                      type="email"
                      className="ln"
                      placeholder="Lastname"
                    />
                  </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    className="infos"
                    placeholder="Email address"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">
                    LinkedIn Profile
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className="infos"
                    placeholder="Paste your LinkedIn's URL"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">Website</Form.Label>
                  <Form.Control
                    type="text"
                    className="infos"
                    placeholder="Paste your Website"
                  />
                </Form.Group>

                <div
                  className=""
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bolder">
                      Seeked Job(Headline)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="infos"
                      placeholder="Headline"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bolder">Phone number</Form.Label>

                    <Form.Control
                      type="email"
                      className="infos"
                      placeholder="ie : +216 99 999 999"
                    />
                  </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">
                    Brief description
                  </Form.Label>
                  <Form.Control
                    rows={3}
                    as="textarea"
                    className="infos"
                    type="email"
                    placeholder="A brief description about you"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Address"
                    className="infos"
                  />
                </Form.Group>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bolder">City</Form.Label>
                    <Form.Control
                      type="text"
                      className="infos"
                      placeholder="City"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bolder">Post code</Form.Label>
                    <Form.Control
                      type="number"
                      className="infos"
                      placeholder="Post code (ie : 7100)"
                    />
                  </Form.Group>
                </div>
              </Form>
            </Fade>
          </Col>
        </Row>
        <Fade left>
          <div>
            <EducationAccordionElement Headline="Education " />
            <EmploymentAccordionElement Headline="Employment" />
            <div>
              <Row>
                <Col md={6} sm={7}>
                  <CertificateAccordionElement Headline="Certificates" />
                </Col>
                <Col md={6} sm={7}>
                  <SkillsAccordionElement Headline="Skills" />
                </Col>
              </Row>
            </div>
          </div>
          <AchievementsExtraActivitiesAccordionElment Headline="Extracurricular activities" />
          <div>
            <Row>
              <Col>
                <LanguagesAccordionElement Headline="Languages" />
              </Col>
              <Col>
                <QualitiesAccordionElement Headline="Qualities" />
              </Col>
              <Col>
                <HobbiesAccordionElement Headline="Hobbies" />
              </Col>
            </Row>
          </div>
        </Fade>
      </Container>
      <Container className="mb-3">
        <Dropdown>
          <Dropdown.Toggle id="cvModelSelect" className="fs-5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-file-earmark-person"
                viewBox="0 0 16 16"
              >
                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
              </svg>
            </span>
            &nbsp;Select your CV Model
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              style={{ height: "75px" }}
              className="fw-bold"
              href=""
            >
              <span>
                <Image src={FormPic} height={75} width={75} fluid />
              </span>
              Professional
            </Dropdown.Item>
            <Dropdown.Item
              style={{ height: "75px" }}
              className="fw-bold"
              href=""
            >
              <span>
                <Image src={FormPic} height={75} width={75} fluid />
              </span>
              Simple
            </Dropdown.Item>
            <Dropdown.Item
              style={{ height: "75px" }}
              className="fw-bold"
              href=""
            >
              <span>
                <Image src={FormPic} height={75} width={75} fluid />
              </span>
              Classic
            </Dropdown.Item>
            <Dropdown.Item
              style={{ height: "75px" }}
              className="fw-bold"
              href=""
            >
              <span>
                <Image src={FormPic} height={75} width={75} fluid />
              </span>
              Creative
            </Dropdown.Item>
            <Dropdown.Item
              style={{ height: "75px" }}
              className="fw-bold"
              href=""
            >
              <span>
                <Image src={FormPic} height={75} width={75} fluid />
              </span>
              Canadian
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "-250px",
        }}
      >
        <Button id="downloadBtn" className="mb-3 me-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              style={{ marginRight: "3px" }}
              height="16"
              fill="currentColor"
              class="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
          </span>
          Download
        </Button>
        <Button id="previewBtn" className="mb-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-easel"
              viewBox="0 0 16 16"
              style={{ marginRight: "3px" }}
            >
              <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z" />
            </svg>
          </span>
          Preview
        </Button>
      </div>
    </div>
  );
};

export default FormToFill;
