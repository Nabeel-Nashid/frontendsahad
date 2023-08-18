import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Button, Col, Input, InputGroup, Row } from "reactstrap";

function AdditionalInformation() {
  const [state, setState] = useState();
  const HandleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  console.log(state);
  return (
    <div>
      <h4>Additional Information</h4>
      <div className="form">
        <Row>
          <Col md="6" className="mt-3">
            <h6>addminssion</h6>
            <input
              required
              className="w-100"
              placeholder="Select admission"
              name="addminssion"
              onChange={HandleChange}
            ></input>
          </Col>
          <Col md="6" className="mt-3">
            <h6>Service</h6>
            <input
              required
              className="w-100"
              placeholder="Select Service"
              name="Service"
              onChange={HandleChange}
            ></input>
          </Col>
        </Row>
        <Row>
          <Col md="6" className="mt-3">
            <h6>Course Affiliation</h6>
            <InputGroup>
              <Input
                placeholder="Select course affiliation"
                name="affiliation"
                onChange={HandleChange}
              />
              <Button style={{ backgroundColor: "#e5e9fe", border: "none" }}>
                <FaPlus color="#12247b" />
              </Button>
            </InputGroup>
          </Col>
          <Col md="6" className="mt-3">
            <h6>Entrance Required</h6>
            <InputGroup>
              <Input
                placeholder="Select entrance"
                name="entrance"
                onChange={HandleChange}
              />
              <Button style={{ backgroundColor: "#e5e9fe", border: "none" }}>
                <FaPlus color="#12247b" />
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6" className="mt-3">
            <h6>Documents Required</h6>
            <InputGroup>
              <Input
                required
                placeholder="Select Documents"
                name="Documents"
                onChange={HandleChange}
              />
              <Button style={{ backgroundColor: "#e5e9fe", border: "none" }}>
                <FaPlus color="#12247b" />
              </Button>
            </InputGroup>
          </Col>
          <Col md="6" className="mt-3">
            <h6>Specialization</h6>
            <InputGroup>
              <Input
                required
                placeholder="Select Specialization"
                name="Specialization"
                onChange={HandleChange}
              />
              <Button style={{ backgroundColor: "#e5e9fe", border: "none" }}>
                <FaPlus color="#12247b" />
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AdditionalInformation;
