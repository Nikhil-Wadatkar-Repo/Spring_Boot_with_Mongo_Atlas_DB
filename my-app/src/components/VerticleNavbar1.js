import React from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

function VerticleNavbar1() {
  const navigate = useNavigate();
  // const checkClickedOrNot=(id)=>{
  //   // debugger
  //   // $(id).click(function(){
  //     console.log ("Clicked on this button",id);
  //     $(id).click(function(){
  //     $(id).css('backgroundColor', '#21c67a')
  //     $("#btId").hide();
  //  });
  // }

  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <strong>Student</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                "white-space": "pre-wrap",
                "overflow-wrap": "break-word",
              }}
            >
              <a style={{ color: "pink" }} href="/createStudent">
                Create New Student
              </a>
              <hr></hr>
              <a style={{ color: "red" }} href="/addExistedStudentToClass">
                Add Existing Student To Class
              </a>
              <hr></hr>
              <a style={{ color: "green" }} href="/addNewStudentToClass">
                Add New Student To Class
              </a>
              <hr></hr>
              <a style={{ color: "blue" }} href="/studentList">
                View Student List
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Teacher
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <a style={{ color: "green" }} href="/createTeacher">
                Create New Teacher
              </a>
              <hr></hr>
              <a style={{ color: "blue" }} href="/teacherList">
                View Teacher List
              </a>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Class
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapsed"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <a
                className="list-group-item list-group-item-action"
                style={{ color: "green" }}
                href="/createClass"
              >
                Create New Class
              </a>
              <hr></hr>
              <a
                className="list-group-item list-group-item-action"
                style={{ color: "blue" }}
                href="/classList"
              >
                Classes Section
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default VerticleNavbar1;
