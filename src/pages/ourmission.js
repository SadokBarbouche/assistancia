import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import DownloadCV from "../assets/DownloadYourCv.svg";
import SelectTheme from "../assets/selectTheme.svg";
import FillForm from "../assets/fillTheForm.svg";
import BgBlob from "../assets/blob.svg";
import "../styles/items.css";
import { Fade } from "react-reveal";

const OurMission = () => {
  return (
    <>
      <h1 className="fw-bolder mb-4">
        Save time profitably , Spend time productively!
      </h1>
      <div>
        <Container className="text-center">
          <Fade up>
            <Row
              className="py-4 text-center px-5 gy-3"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignContent: "center",
              }}
            >
              <Col
                id="selectTheme"
                className="text-start my-sm-5 my-md-0 py-2"
                md={3}
                style={{
                  backgroundColor: "#CAF0F8",
                  boxShadow: "0px 0px 3px",
                  borderRadius: "5px 15px 5px 15px",
                }}
              >
                <div className="text-center py-2" id="item1" style={{}}>
                  <Image
                    fluid
                    src={SelectTheme}
                    className="px-2 py-2 mb-3"
                    style={{ width: "55%" }}
                  />
                </div>
                <p className="">
                  <span className="fw-bolder">Need a document ?</span> Select
                  one of our well chosen docs templates . The steps are pretty
                  straightforward and won't take longer than 5 minutes .
                </p>
                {/* <div className="text-center">
                <Button className="bg-transparent text-dark">Explore</Button>
              </div> */}
              </Col>
              <Col
                id="fillForm"
                md={3}
                className="text-start px-3 py-3 my-sm-2 my-md-0 text-light"
                style={{
                  border: "3px #00B4D8 solid",
                  backgroundColor: "#00B4D8",
                  boxShadow: "0px 0px 10px",
                  borderRadius: "5px 15px 5px 15px",
                }}
              >
                <div className="text-center py-2" id="item1" style={{}}>
                  <Image
                    fluid
                    src={FillForm}
                    className="px-2 py-2 mb-3"
                    style={{ width: "75%" }}
                  />
                </div>
                <p>
                  Fill the form with your infos,exhibit your skills and talents
                  and tell recruiters how good you are .
                </p>
              </Col>
              <Col
                id="downloadCv"
                className="text-start my-sm-2 my-md-0 py-4"
                md={3}
                style={{
                  backgroundColor: "#CAF0F8",
                  boxShadow: "0px 0px 3px",
                  borderRadius: "5px 15px 5px 15px",
                }}
              >
                <Image
                  fluid
                  style={{
                    width: "45%",
                    display: "inline",
                    float: "right",
                    zIndex: "-1",
                  }}
                  src={DownloadCV}
                />

                <p>
                  <span className="fw-bolder fs-5">
                    Bingo ! Here you have it !
                  </span>{" "}
                  <br />
                  <span
                    className="fw-bolder"
                    style={{
                      color: "#03045E",
                      borderBottom: "2px #03045E solid",
                    }}
                  >
                    Download
                  </span>{" "}
                  your documents and land your dream job . In case you're
                  unfamiliar with design,our platform makes the process of
                  creating job application documents faster and smoother.{" "}
                </p>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
    </>
  );
};
export default OurMission;
