import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
function CourseTag() {
  // const [courseTag, setCourseTag] = useState();
  const [courseTag, setCourseTag] = useState([
    {
      tag: "",
      description: "",
    },
  ]);
  const HandleChange = (e) => {
    e.preventDefault();
    setCourseTag({
      ...courseTag,
      [e.target.name]: e.target.value,
    });
  };
  console.log(courseTag);

  const handleAddCourseTag = () => {
    const values = [...courseTag];
    values.push({ tag: "", description: "" });
    setCourseTag(values);
  };
  return (
    <div className="mt-4">
      <h6>Course Tag</h6> 
      <div className="form">
        {courseTag.map((index, key) => (
          <Row key={key}>
            <Col md="6">
              <p className="m-0">Tag</p>
              <input
                className="w-100"
                placeholder="Select tag"
                name="tag"
                value={index.tag}
                onChange={HandleChange}
              ></input>
            </Col>
            <Col md="6">
              <p className="m-0">Description</p>
              <div className="d-flex justify-content-between">
                <input
                  placeholder="Enter description"
                  style={{ width: "90%" }}
                  name="description"
                  value={index.description}
                  onChange={HandleChange}
                ></input>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "#ffecf0",
                  }}
                >
                  <MdDelete color="red" size={30} />
                </button>
              </div>
            </Col>
          </Row>
        ))}

        <Button
          className="mt-3"
          style={{
            backgroundColor: "#e5e9fe",
            border: "none",
            color: "#12247b",
          }}
          onClick={handleAddCourseTag}
        >
          <div className="d-flex">
            <FaPlus />
            <h6>Add Row</h6>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default CourseTag;
