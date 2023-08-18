import React from "react";
import AdditionalInformation from "../components/additionalInformations/additionalInformation";
import { Badge, Button, Container } from "reactstrap";
import { AiFillSave } from "react-icons/ai";

function Second() {
  return (
    <div className="mt-3">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex my-4 p-2">
            <h4>Course Creation</h4>
            <Badge className="text-dark mx-4 d-flex align-items-center" color="light" pill>
              Step 2 of 4
            </Badge>
          </div>
          <div className="d-flex">
            <Button style={{backgroundColor:"#0a2896", maxHeight:"40px"}}>
              <AiFillSave color="white" className="mx-2"/>
              Save As Draft</Button>
          </div>
        </div>
        <AdditionalInformation />
        
      </Container>
    </div>
  );
}

export default Second;
