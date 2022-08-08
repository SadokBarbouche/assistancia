import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import FormPic from "../assets/Form.svg";   
const FormToFill = () => {
  return (
    <div style={{
    }}>
      <Container className="py-5" style={{
          minHeight:"100vh",
          
        }}>
        <Row style={{}}>
          <Col>
            <Form className="text-start">
              <div style={{
                  display:"flex",
                  justifyContent:"space-between"
              }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">Firstname</Form.Label>
                  <Form.Control type="email" placeholder="Firstname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">Lastname</Form.Label>
                  <Form.Control type="email" placeholder="Malename" />
                </Form.Group>
                
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">Email address:</Form.Label>
                  <Form.Control type="email" placeholder="Email address" />
                </Form.Group>
              <div className="" style={{display:"flex",justifyContent:"space-between"}}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">Seeked Job</Form.Label>
                  <Form.Control type="email" placeholder="Malename" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bolder">Lastname</Form.Label>
                  <Form.Control type="email" placeholder="Malename" />
                </Form.Group>

              </div>
              
              <Button variant="primary" type="submit">
                Submit
              
              </Button>
            </Form>
          </Col>
          <Col className="d-none d-lg-block"         >
          <Image src={FormPic} fluid style={{transform:"scaleX(-1)",}}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormToFill;
