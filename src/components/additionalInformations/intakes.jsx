import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Button, Col, Row } from "reactstrap";

function Intakes() {
  const [intakes, setIntakes] = useState();
  const HandleChange = (e) => {
    e.preventDefault();
    setIntakes({
      ...intakes,
      [e.target.name]: e.target.value,
    });
  };
  console.log(intakes);
  return (
    <div className="mt-4">
      <h6>Intakes</h6>
      <div className="form">
        <Row>
          <Col md="6">
            <p className="m-0">Intakes</p>
            <div
              className="d-flex justify-content-around py-5"
              style={{ backgroundColor: "#f8f8fa", border: "1px solid black" }}
            >
              <button
                style={{
                  border: "none",
                  backgroundColor: "#ffecf0",
                }}
              >
                <MdDelete color="red" size={30} />
              </button>
              <input
                placeholder="September"
                style={{ width: "80%" }}
                name="intakes"
                onChange={HandleChange}
              ></input>
            </div>
          </Col>

          <Col md="6">
            <p className="m-0">Duration</p>
            <div
              className="d-flex justify-content-around py-5"
              style={{ backgroundColor: "#f8f8fa", border: "1px solid black" }}
            >
              <input
                placeholder="1Year"
                style={{ width: "80%" }}
                name="duration"
                onChange={HandleChange}
              ></input>
              <Button style={{ backgroundColor: "#e5e9fe", border: "none" }}>
                <FaPlus color="#12247b" />
              </Button>
              <button
                style={{
                  border: "none",
                  backgroundColor: "#ffecf0",
                }}
              >
                <MdDelete color="red" size={30} />
              </button>
            </div>
          </Col>
        </Row>

        <Button
          className="mt-3"
          style={{
            backgroundColor: "#e5e9fe",
            border: "none",
            color: "#12247b",
          }}
        >
          <div className="d-flex">
            <FaPlus />
            <h6>Add Row</h6>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Intakes;
