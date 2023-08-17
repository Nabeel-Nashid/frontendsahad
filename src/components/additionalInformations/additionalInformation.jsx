import React from "react";
import { Col, Row } from "reactstrap";

function AdditionalInformation() {
  return (
    <div>
      <h4>Additional Information</h4>
      <div className="form">
        <Row>
          <Col md="6">
            <h6>addminssion</h6>
            <input className="w-100" placeholder="Select admission"></input>
          </Col>
          <Col md="6">
            <h6>Service</h6>
            <input className="w-100" placeholder="Select Service"></input>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h6>Course Affiliation</h6>
            <input
              className="w-100"
              placeholder="Select course affiliation"
            ></input>
          </Col>
          <Col md="6">
            <h6>Entrance Required</h6>
            <input className="w-100" placeholder="Select entrance"></input>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h6>Documents Required</h6>
            <input className="w-100" placeholder="Select Documents"></input>
          </Col>
          <Col md="6">
            <h6>Specialization</h6>
            <input
              className="w-100"
              placeholder="Select Specialization"
            ></input>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AdditionalInformation;
