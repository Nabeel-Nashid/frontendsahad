import React from "react";
import { Badge, Button, Card, Input, InputGroup } from "reactstrap";
import { RiMoreLine } from "react-icons/ri";
import { college, male3, university } from "../components/images";
import { HiOutlineReply } from "react-icons/hi";
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
            Pfizer-BioNTech COVID-19 mRNA vaccine (Tozinameran or BNT162b2) for
            use for the COVID-19 pandemic*.
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
              <div className="comment-box mx-2" style={{ width: "95%" }}>
                <InputGroup>
                  <Input
                    placeholder="Add a Comment..."
                    style={{ minHeight: "80px" }}
                  />
                  <Button
                    style={{
                      background: "none",
                      color: "gray",
                      borderLeft: "none",
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
                    className="mx-2"
                    style={{
                      maxWidth: "80%",
                    }}
                  >
                    <div
                      className="p-2"
                      style={{
                        backgroundColor: "#f9f8fd",
                        borderRadius: "12px",
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-between  m-2">
                        <div className="d-flex align-items-baseline">
                          <h6 className="my-0">Roshan Karthik</h6>
                          <p className="my-0 mx-2">1 Week ago</p>
                        </div>
                        <div className="m-2">
                          <RiMoreLine />
                        </div>
                      </div>
                      <div className="m-2">
                        <p>
                          Please apply for M.Sc Accounting & Finance with
                          placement at Anglia Ruksin university for the
                          September 2021 intake!
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline mt-2">
                      <HiOutlineReply style={{ transform: "rotate(180deg)" }} />
                      <p className="mx-1">3</p>
                      <p className="mx-1">Replies</p>
                      <p>Reply</p>
                    </div>
                    <div>
                      <div className="d-flex mb-2">
                        <img
                          style={{
                            borderRadius: "50%",
                            width: "50px",
                            height: "50px",
                          }}
                          alt="Sample"
                          src={university}
                        />
                        <div
                          className="p-2 mx-2"
                          style={{
                            backgroundColor: "#f9f8fd",
                            borderRadius: "12px",
                          }}
                        >
                          <div className="d-flex align-items-center justify-content-between  m-2">
                            <div className="d-flex align-items-baseline">
                              <h6 className="my-0">Greenwich University</h6>
                              <p className="my-0 mx-2">34 min ago</p>
                            </div>
                            <div className="m-2">
                              <RiMoreLine />
                            </div>
                          </div>
                          <div className="m-2">
                            <p>Exactly, Amina Small steps are so important.</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-2">
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
                            borderRadius: "12px",
                          }}
                        >
                          <div className="d-flex align-items-center justify-content-between  m-2">
                            <div className="d-flex align-items-baseline">
                              <h6 className="my-0">Roshan Karthika</h6>
                              <p className="my-0 mx-2">3 hrs ago</p>
                            </div>
                            <div className="m-2">
                              <RiMoreLine />
                            </div>
                          </div>
                          <div className="m-2">
                            <p>
                              Definitely aller Due. One day at the Time! I love
                              it.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <img
                          style={{
                            borderRadius: "50%",
                            width: "50px",
                            height: "50px",
                          }}
                          alt="Sample"
                          src={university}
                        />
                        <div
                          className="p-2 mx-2"
                          style={{
                            backgroundColor: "#f9f8fd",
                            borderRadius: "12px",
                          }}
                        >
                          <div className="d-flex align-items-center justify-content-between  m-2">
                            <div className="d-flex align-items-baseline ">
                              <h6 className="my-0">Greenwich University</h6>
                              <p className=" mx-2">4 days ago</p>
                            </div>
                            <div className="m-2">
                              <RiMoreLine />
                            </div>
                          </div>
                          <div className="m-2">
                            <p>Well said, So glad it resonated. </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <img
                          style={{
                            borderRadius: "50%",
                            width: "50px",
                            height: "50px",
                          }}
                          alt="Sample"
                          src={university}
                        />

                        <InputGroup className="mx-2">
                          <Input placeholder="Add a reply..." />
                          <Button
                            style={{
                              borderLeft: "none",
                              background: "none",
                              color: "gray",
                            }}
                          >
                            Reply
                          </Button>
                        </InputGroup>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-3">
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
                    className="mx-2"
                    style={{
                      maxWidth: "80%",
                    }}
                  >
                    <div
                      className="p-2"
                      style={{
                        backgroundColor: "#f9f8fd",
                        borderRadius: "12px",
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-between  m-2">
                        <div className="d-flex align-items-baseline">
                          <h6 className="my-0">Roshan Karthik</h6>
                          <p className="my-0 mx-2">1 Week ago</p>
                        </div>
                        <div className="m-2">
                          <RiMoreLine />
                        </div>
                      </div>
                      <div className="m-2">
                        <p>
                          Everything that needs to be accomplished requires time
                          and effort
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline mt-2">
                      <HiOutlineReply style={{ transform: "rotate(180deg)" }} />
                      <p className="mx-1">2</p>
                      <p className="mx-1">Replies</p>
                      <p>Reply</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                style={{ border: "none", background: "none", color: "gray" }}
              >
                <h6>Add a comment</h6>
              </button>
            </div>
          </div>
        </>
      </Card>
    </div>
  );
}

export default Third;
