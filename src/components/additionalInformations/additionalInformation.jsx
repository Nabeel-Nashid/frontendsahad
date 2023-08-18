import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Button, Col, Input, InputGroup, Row } from "reactstrap";
import Intakes from "./intakes";
import CourseTag from "./courseTag";

function AdditionalInformation() {
  const [state, setState] = useState();
  const [affiliation, setAffiliation] = useState([
    {
      affiliation: "",
    },
  ]);
  const [entrance, setEntrance] = useState([
    {
      entrance: "",
    },
  ]);
  const [document, setDocument] = useState([
    {
      document: "",
    },
  ]);
  const [specialization, setSpecialization] = useState([
    {
      specialization: "",
    },
  ]);
  const HandleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  console.log(state);
  const handleAddAffiliation = () => {
    const values = [...affiliation];
    values.push({ affiliation: "" });
    setAffiliation(values);
  };
  const handleAddEntrance = () => {
    const values = [...entrance];
    values.push({ entrance: "" });
    setEntrance(values);
  };
  const handleAddDocument = () => {
    const values = [...entrance];
    values.push({ document: "" });
    setDocument(values);
  };
  const handleAddSpecialization = () => {
    const values = [...specialization];
    values.push({ specialization: "" });
    setSpecialization(values);
  };
  return (
    <div>
      <h4>Additional Information</h4>
      <div className="form">
        <Row>
          <Col md="6" className="mt-3">
            <h6>addminssion</h6>
            <select
              required
              className="w-100"
              placeholder="Select admission"
              name="addminssion"
              onChange={HandleChange}
            >
              <option>Select admission</option>
              <option>admission 1</option>
              <option>admission 2</option>
              <option>admission 3</option>
              <option>admission 4</option>
            </select>
          </Col>
          <Col md="6" className="mt-3">
            <h6>Service</h6>
            <select
              required
              className="w-100"
              placeholder="Select Service"
              name="service"
              onChange={HandleChange}
            >
              <option>Select Service</option>
              <option>service 1</option>
              <option>service 2</option>
              <option>service 3</option>
              <option>service 4</option>
            </select>
          </Col>
        </Row>
        <Row>
          {affiliation.map((index,key) => (
            <Col key={key} md="6" className="mt-3">
              <h6>Course Affiliation</h6>
              <InputGroup>
                <Input
                  placeholder="Select course affiliation"
                  name="affiliation"
                  onChange={HandleChange}
                />
                <Button
                  style={{ backgroundColor: "#e5e9fe", border: "none" }}
                  onClick={handleAddAffiliation}
                >
                  <FaPlus color="#12247b" />
                </Button>
              </InputGroup>
            </Col>
          ))}
          {entrance.map((index,key) => (
            <Col key={key} md="6" className="mt-3">
              <h6>Entrance Required</h6>
              <InputGroup>
                <Input
                  placeholder="Select entrance"
                  name="entrance"
                  value={index.entrance}
                  onChange={HandleChange}
                />
                <Button
                  style={{ backgroundColor: "#e5e9fe", border: "none" }}
                  onClick={handleAddEntrance}
                >
                  <FaPlus color="#12247b" />
                </Button>
              </InputGroup>
            </Col>
          ))}
        </Row>
        <Row>
          {document.map((index,key) => (
            <Col key={key} md="6" className="mt-3">
              <h6>Documents Required</h6>
              <InputGroup>
                <Input
                  required
                  placeholder="Select Documents"
                  name="document"
                  value={index.document}
                  onChange={HandleChange}
                />
                <Button
                  style={{ backgroundColor: "#e5e9fe", border: "none" }}
                  onClick={handleAddDocument}
                >
                  <FaPlus color="#12247b" />
                </Button>
              </InputGroup>
            </Col>
          ))}
          {specialization.map((index,key) => (
            <Col key={key} md="6" className="mt-3">
              <h6>Specialization</h6>
              <InputGroup>
                <Input
                  required
                  placeholder="Select Specialization"
                  name="specialization"
                  value={index.specialization}
                  onChange={HandleChange}
                />
                <Button
                  style={{ backgroundColor: "#e5e9fe", border: "none" }}
                  onClick={handleAddSpecialization}
                >
                  <FaPlus color="#12247b" />
                </Button>
              </InputGroup>
            </Col>
          ))}
        </Row>
      </div>
      <Intakes />
      <CourseTag/>
    </div>
  );
}

export default AdditionalInformation;
