import React from "react";
import AdditionalInformation from "../components/additionalInformations/additionalInformation";
import { Badge, Button, Container } from "reactstrap";
import { AiFillSave } from "react-icons/ai";
import BasicInformation from "../components/basic/basicInformation";
import FeeScholarship from "../components/fee&Scholarship/feeScholarship";
import EligibilitySyllabus from "../components/eligibility&Syllabus/eligibilitySyllabus";

function Second() {
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const steps = [
    "Basic information",
    "AdditionalInformation",
    "Eligibility & Syllabus",
    "Fee & Scholarship",
  ];
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BasicInformation />;
      case 1:
        return <AdditionalInformation />;
      case 2:
        return <EligibilitySyllabus />;
      case 3:
        return <FeeScholarship />;
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <div className="mt-3">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex my-4 p-2">
            <h4>Course Creation</h4>
            <Badge
              className="text-dark mx-4 d-flex align-items-center"
              color="light"
              pill
            >
              Step {activeStep+1} of 4
            </Badge>
          </div>
          <div className="d-flex">
            <Button style={{ backgroundColor: "#0a2896", maxHeight: "40px" }}>
              <AiFillSave color="white" className="mx-2" />
              Save As Draft
            </Button>
          </div>
        </div>
        {getStepContent(activeStep)}
        <div className="d-flex justify-content-around mt-4">
          {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}

          {activeStep === steps.length - 1 ? (
            ""
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Second;
