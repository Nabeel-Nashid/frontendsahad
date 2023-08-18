import React from "react";
import { Container } from "reactstrap";
import { university } from "../images";

function EligibilitySyllabus() {
  return (
    <div>
      <Container>
        <div className="d-flex align-items-center justify-content-center">
          <h4 className="m-2">Eligibility & Syllabus</h4>
          <img alt="Sample" src={university} />
        </div>
      </Container>
    </div>
  );
}

export default EligibilitySyllabus;
