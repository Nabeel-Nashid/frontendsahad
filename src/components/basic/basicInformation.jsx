import React from "react";
import { university } from "../images";
import { Container } from "reactstrap";

function BasicInformation() {
  return (
    <div>
      <Container>
        <div className="d-flex align-items-center justify-content-center">
        <h4 className="m-2">Basic Information</h4>
        <img
          alt="Sample"
          src={university}
        />
        </div>
      </Container>
    </div>
  );
}

export default BasicInformation;
