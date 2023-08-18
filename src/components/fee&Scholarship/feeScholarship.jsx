import React from "react";
import { university } from "../images";
import { Container } from "reactstrap";

function FeeScholarship() {
  return (
    <div>
      <Container>
        <div className="d-flex align-items-center justify-content-center">
          <h4 className="m-2">Fee & Scholarship</h4>
          <img alt="Sample" src={university} />
        </div>
      </Container>
    </div>
  );
}

export default FeeScholarship;
