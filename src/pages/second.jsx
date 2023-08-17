import React from "react";
import AdditionalInformation from "../components/additionalInformations/additionalInformation";
import { Badge, Button, Container } from "reactstrap";

function Second() {
  return (
    <div className="mt-3">
      <Container>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h4>Course Creation</h4>
            <Badge color="secondary" pill>
              Step 2 of 4
            </Badge>
          </div>
          <div className="d-flex">
            <Button>Save As Draft</Button>
          </div>
        </div>
        <AdditionalInformation />
      </Container>
    </div>
  );
}

export default Second;
