import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import DownloadCV from "../assets/DownloadYourCv.svg";
import SelectTheme from "../assets/selectTheme.svg";
import FillForm from "../assets/fillTheForm.svg";
import BgBlob from "../assets/blob.svg";

const OurMission = () => {
  return (
    <>
      <h1 className="fw-bolder mb-4">
        Save time profitably , Spend time productively!
      </h1>
      <div>
        <Container>
          <Row className="py-4">
            <Col className="text-start my-sm-2 my-md-0 " md={3}>
              <div className="text-center py-2" id="item1" style={{}}>
                <Image
                  fluid
                  src={SelectTheme}
                  className="px-2 py-2 mb-3"
                  style={{ width: "35%" }}
                />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of.
              </p>
              <div className="text-center">
                <Button className="bg-transparent text-dark">Explore</Button>
              </div>
            </Col>
            <Col md={3}
              className="text-start px-3 py-3 my-sm-2 my-md-0 "
              style={{
                border: "3px #00B4D8 solid",
                borderRadius: "5px 15px 5px 15px",
                backgroundColor: "#00B4D8",
              }}
              md={4}
            >
              <div className="text-center py-2" id="item1" style={{}}>
                <Image
                  fluid
                  src={FillForm}
                  className="px-2 py-2 mb-3"
                  style={{ width: "40%" }}
                />
              </div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of.
            </Col>
            <Col className="text-start my-sm-2 my-md-0 " md={4}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of.
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default OurMission;
