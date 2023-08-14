import React from "react";
import {
  Card,
  Container,
  Badge,
} from "reactstrap";
import { BsFillPencilFill, BsFillTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
function First() {
  return (
    <div>
      <Container className="p-3" style={{ backgroundColor: "#d1c3e242" , display:"flex" }}>
        <Card className="p-2 m-2" style={{ width: "400px" }}>
          <div
            className="p-2"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #00000040",
            }}
          >
            <img
              style={{ borderRadius: "50%", width: "50px" }}
              alt="Sample"
              src="https://picsum.photos/300/300"
            />
            <div>
              <h6>Charlotte Rosalie</h6>
              <p>EDU-IND_66444081</p>
            </div>
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#a494d78c",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <BsFillPencilFill color="darkblue" />
            </div>
          </div>
          <div style={{ lineHeight: "3rem" }}>
            <div>
              <BsFillTelephoneFill />
              +91 75108 27929
            </div>
            <div>
              <HiMailOpen />
              myemail@rihannasinger.com
            </div>
            <div>
              <FaGraduationCap />
              MSc Business with internationall Management
            </div>
            <Badge color="primary" pill>
              Add Your Rest Documents
            </Badge>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default First;
