import React from "react";
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
import FormPic from "../assets/Form.svg";

const FormToFill = () => {
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
        <Accordion className="my-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h2>Impress recruiters with your Skills</h2>
            </Accordion.Header>
            <Accordion.Body className="text-start" id="">
              <Form.Group
                className="mb-3 w-100"
                controlId="formBasicEmail"
                style={{ display: "flex" }}
              >
                <Form.Control
                  type="email"
                  placeholder="Football ,Development ,Programming ,Art ,Cooking ...Make sure that your skills are comma-separated (ie:Writing,Singing,Programming)"
                />
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h2>
                Tell them about your certificates,qualifications and diplomas
              </h2>
            </Accordion.Header>
            <Accordion.Body className="text-start" id="">
              <Form.Group
                className="mb-3 w-100"
                controlId="formBasicEmail"
                style={{ display: "flex" }}
              >
                <Table
                  bordered
                  style={{ borderColor: "#03045E", borderRadius: "" }}
                >
                  <thead>
                    <tr>
                      <th>Diploma | Certificate </th>
                      <th>Year of obtention</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <InputGroup className="">
                          <Form.Control
                            placeholder="Diploma or certificate"
                            aria-label="Diploma"
                          />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="">
                          <Form.Control
                            type="date"
                            placeholder="Diploma or certificate"
                            aria-label="Diploma"
                          />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="">
                          <Form.Control
                            placeholder="Tell us about it (Optional)"
                            aria-label="DiplomaDesc"
                            as="textarea"
                          />
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <InputGroup className="">
                          <Form.Control aria-label="Diploma" />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="">
                          <Form.Control type="date" aria-label="Diploma" />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="">
                          <Form.Control
                            aria-label="DiplomaDesc"
                            as="textarea"
                          />
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <InputGroup className="">
                          <Form.Control aria-label="Diploma" />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="">
                          <Form.Control type="date" aria-label="Diploma" />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="">
                          <Form.Control
                            aria-label="DiplomaDesc"
                            as="textarea"
                          />
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <InputGroup className="">
                          <Form.Control aria-label="Diploma" />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="">
                          <Form.Control type="date" aria-label="Diploma" />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="">
                          <Form.Control
                            aria-label="DiplomaDesc"
                            as="textarea"
                          />
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <InputGroup className="">
                          <Form.Control aria-label="Diploma" />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="">
                          <Form.Control type="date" aria-label="Diploma" />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="">
                          <Form.Control
                            aria-label="DiplomaDesc"
                            as="textarea"
                          />
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <InputGroup className="">
                          <Form.Control aria-label="Diploma" />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="">
                          <Form.Control type="date" aria-label="Diploma" />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="">
                          <Form.Control
                            aria-label="DiplomaDesc"
                            as="textarea"
                          />
                        </InputGroup>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div>
          <Row>
            <Col>
              <Accordion className="mt-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>
                      Mention your internships and previous work experiences.
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body className="text-start" id="">
                    <Form.Group
                      className="mb-3 w-100"
                      controlId="formBasicEmail"
                      style={{ display: "flex" }}
                    >
                      <Form.Control
                        type="email"
                        placeholder="Exhibit your most significant certificates. As always,please make them comma separated ."
                      />
                    </Form.Group>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <Accordion className="mt-3 ">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Make sure to highlight your personal projects!</h5>
                  </Accordion.Header>
                  <Accordion.Body className="text-start" id="">
                    <Form.Group
                      className="mb-3 w-100"
                      controlId="formBasicEmail"
                      style={{ display: "flex" }}
                    >
                      <Form.Control
                        type="email"
                        placeholder="Exhibit your most significant certificates. As always,please make them comma separated ."
                      />
                    </Form.Group>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FormToFill;
