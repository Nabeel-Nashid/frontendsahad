import React from "react";
import {
  Badge,
  Button,
  Card,
  Container,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { RiMoreLine } from "react-icons/ri";
function Third() {
  return (
    <div className="mt-4 p-2" style={{ backgroundColor: "#d1c3e242" }}>
      <Container>
        <Card className=" m-4 ">
          <div className="p-3 mt-2">
            <div className="d-flex">
              <img
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                alt="Sample"
                src="https://picsum.photos/300/300"
              />
              <div className="mx-3">
                <h6>University of Greenwich</h6>
                <p>3 days ago</p>
              </div>
            </div>
            <h6>Dear Students!</h6>
            <p className="mt-4">
              Now Canada gv h kg hj kj gh b jh vjvghcjhgd uf h fh gh f hg fhj
              ghj fh ghfgf gj hfj j j fjhf hjgg hjNow Canada gv h kg hj kj gh b
              jh vjvghcjhgd uf h fh gh f hg fhj ghj fh ghfgf gj hfj j j fjhf
              hjgg hjNow Canada gv h kg hj kj gh b jh vjvghcjhgd uf h fh gh f hg
              fhj ghj fh ghfgf gj hfj j j fjhf hjgg hj
            </p>
            <div className="mt-4">
              <p className="m-0">
                -Contact Edumpus FREE counselling & make your Overseas Careers
                dream a reality.
              </p>
              <p className="m-0">
                -Students can also DM us for further details.
              </p>
            </div>
          </div>
          <>
            <>
              <img
                style={{ width: "100%", height: "400px" }}
                alt="Sample"
                src="https://picsum.photos/300/300"
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
                  src="https://picsum.photos/300/300"
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
                      src="https://picsum.photos/300/300"
                    />
                    <div
                      className="p-2 mx-2"
                      style={{
                        backgroundColor: "#d1c3e242",
                        borderRadius: "6px",
                        width:"85%"
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <>
                          <h6 className="my-0">Roshan Karthik</h6>
                          <p className="my-0 mx-2">1 Week ago</p>
                        </>
                        <>
                        <RiMoreLine/></>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Card>
      </Container>
    </div>
  );
}

export default Third;
