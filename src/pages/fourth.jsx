import React from "react";
import { Card, Container } from "reactstrap";
import { user } from "../components/arrays";
import { userPro } from "../components/arrays";
function Fourth() {
  return (
    <div>
      <Container
        className="p-4 mt-4"
        style={{ backgroundColor: "#f9f8fd", display: "flex" }}
      >
        <Card className="w-100">
          <div className="w-100" style={{ backgroundColor: "#e4eaff" }}>
            {userPro.map((index, key) => (
              <div className="d-flex p-3" key={key}>
                <img
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  alt="Sample"
                  src={index.image}
                />
                <div className="mx-3">
                  <div className="d-flex align-items-baseline">
                    <h6>{index.name}</h6>
                    <p className="mx-2 mb-1">{index.status}</p>
                  </div>
                  <p>{index.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            {user.map((index, key) => (
              <div className="d-flex p-3"key={key} >
                <img
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  alt="Sample"
                  src={index.image}
                />
                <div className="mx-3">
                  <div className="d-flex align-items-baseline">
                    <h6>{index.name}</h6>
                    <p className="mx-2 mb-1">{index.status}</p>
                  </div>
                  <p>{index.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default Fourth;
