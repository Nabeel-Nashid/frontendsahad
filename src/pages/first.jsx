import React from "react";
import { Card, Container, Badge, Row, Col } from "reactstrap";
import { BsFillPencilFill, BsFillTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { avatar, edumpus, female3 } from "../components/images";
function First() {
  return (
    <div>
      <Container
        className="p-3 mt-4"
        style={{ backgroundColor: "#f9f8fd", display: "flex" }}
      >
        <Row>
          <Col md="4">
            <Card className="p-2 m-2">
              <div
                className="p-2"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #00000040",
                }}
              >
                <img
                  style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                  alt="Sample"
                  src={female3}
                />
                <div className="ml-1">
                  <h6>Charlotte Rosalie</h6>
                  <p>EDU-IND-66444081</p>
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#e3e9ff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <BsFillPencilFill color="darkblue" />
                </div>
              </div>
              <div style={{ lineHeight: "3rem" }}>
                <div>
                  <BsFillTelephoneFill />
                  +91 75108 27929
                </div>
                <div>
                  <HiMailOpen />
                  myemail@rihannasinger.com
                </div>
                <div>
                  <FaGraduationCap />
                  MSc Business with internationall Management
                </div>
                <div className=" m-2 d-flex justify-content-between">
                <Badge className="text-primary" color="light" pill>
                  <h6 className="m-1">Add Your Rest Documents</h6>
                </Badge>
                <img
                  style={{ borderRadius: "50%", width: "30px", height: "30px" }}
                  alt="Sample"
                  src={edumpus}
                />
                </div>
              </div>
            </Card>
          </Col>
          <Col md="4">
            <Card className="p-2 m-2">
              <div
                className="p-2"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #00000040",
                }}
              >
                <img
                  style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                  alt="Sample"
                  src={avatar}
                />
                <div>
                  <h6>Rosalie Due</h6>
                  <p>EDU-IND-66444083</p>
                </div>
                <Badge className="text-success" color="light" pill>
                  New
                </Badge>
              </div>
              <div style={{ lineHeight: "2.5rem" }}>
                <div>
                  <BsFillTelephoneFill />
                  +91 75108 27929
                </div>
                <div>
                  <HiMailOpen />
                  haris.karat@googlemail.com
                </div>
                <div>
                  <FaGraduationCap />
                  Master of Business Administration in Global Business
                </div>
                <Badge className="text-primary" color="light" pill>
                  <h6 className="m-1">Applied</h6>
                </Badge>
              </div>
            </Card>
          </Col>
          <Col md="4">
            <Card className="p-2 m-2">
              <div
                className="p-2"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #00000040",
                }}
              >
                <img
                  style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                  alt="Sample"
                  src={avatar}
                />
                <div>
                  <h6>Thomas Paul</h6>
                  <p>EDU-IND-66444081</p>
                </div>
                <Badge className="text-success" color="light" pill>
                  New
                </Badge>
              </div>
              <div style={{ lineHeight: "3rem" }}>
                <div>
                  <BsFillTelephoneFill />
                  +91 75108 27929
                </div>
                <div>
                  <HiMailOpen />
                  myemail@miamatrina.com
                </div>
                <div>
                  <FaGraduationCap />
                  Master of Business Administration MBA
                </div>
                <div className="m-2 d-flex justify-content-between">
                <Badge className="text-primary" color="light" pill>
                  <h6 className="m-1">Verified</h6>
                </Badge>
                <img
                  style={{ borderRadius: "50%", width: "30px", height: "30px" }}
                  alt="Sample"
                  src={edumpus}
                />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default First;
