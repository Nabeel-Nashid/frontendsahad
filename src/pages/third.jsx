import React from "react";
import { Badge, Button, Card, Input, InputGroup } from "reactstrap";
import { RiMoreLine } from "react-icons/ri";
import { college, male3, university } from "../components/images";
function Third() {
  return (
    <div className="mt-4 p-2" style={{ backgroundColor: "#d1c3e242" }}>
      <Card className=" m-4 ">
        <div className="p-3 mt-2">
          <div className="d-flex">
            <img
              style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              alt="Sample"
              src={university}
            />
            <div className="mx-3">
              <h6>University of Greenwich</h6>
              <p>3 days ago</p>
            </div>
          </div>
          <h6>Dear Students!</h6>
          <p className="mt-4">
            Now, Canada is the third country in the word to authorize COVID-19
            vaccine. Approval for COVID-19 vaccine given on December 9, 2020.
            Additionally Canada has given the green light to COVID-19 vaccine.
            Also, as per the Canadian government, *Health Canada authorized the
            Pfizer-BioNTech COVID-19 mRNA vaccine (Tozinameran or BNT162b2) for use for
            the COVID-19 pandemic*.
          </p>
          <div className="mt-4">
            <p className="m-0">
              -Contact Edumpus FREE counselling & make your Overseas Careers
              dream a reality.
            </p>
            <p className="m-0">-Students can also DM us for further details.</p>
          </div>
        </div>
        <>
          <>
            <img
              style={{ width: "100%", maxHeight: "600px" }}
              alt="Sample"
              src={college}
            />
          </>
          <div className="p-3">
            <>
              <Badge color="secondary" pill>
                7 Comments . 2 Replies
              </Badge>
            </>
            <div className="d-flex mt-3 align-items-center">
              <img
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                alt="Sample"
                src={university}
              />
              <div className="comment-box mx-2">
                <InputGroup>
                  <Input placeholder="Add a Comment..." />
                  <Button
                    style={{
                      background: "none",
                      color: "gray",
                      border: "none",
                    }}
                  >
                    Post
                  </Button>
                </InputGroup>
              </div>
            </div>
            <div className="mt-2">
              <>
                <p>View 5 more comments</p>
              </>
              <div className="">
                <div className="d-flex">
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                    }}
                    alt="Sample"
                    src={male3}
                  />
                  <div
                    className="p-2 mx-2"
                    style={{
                      backgroundColor: "#f9f8fd",
                      borderRadius: "6px",
                      width: "85%",
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <>
                        <h6 className="my-0">Roshan Karthik</h6>
                        <p className="my-0 mx-2">1 Week ago</p>
                      </>
                      <>
                        <RiMoreLine />
                      </>
                    </div>
                    <>
                      <p>
                        Please apply for M.Sc Accounting & Finance with
                        placement at Anglia Ruksin university for the September
                        2021 intake!
                      </p>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Card>
    </div>
  );
}

export default Third;
