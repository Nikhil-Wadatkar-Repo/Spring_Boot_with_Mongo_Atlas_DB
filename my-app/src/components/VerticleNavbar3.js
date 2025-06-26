import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import { schoolName } from "../Constants";

function VerticleNavbar3() {
  const [prevId, setPrevId] = useState("");
  const [prevListId, setPrevListId] = useState("");
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
  const doBold = (id, list_id) => {
    $("#" + id).attr("style", "font-weight:bold;");
    $("#" + list_id).css("backgroundColor", "#21c67a");

    $(prevListId).css("backgroundColor", "white");
    $(prevId).attr("style", "font-weight:normal;");

    setPrevId("#" + id);
    setPrevListId("#" + list_id);
  };

  return (
    <div className="container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Student Section
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Link to={"/createUpdateStudent"}>Create Student</Link>
              <hr></hr>
              <Link to={"/studentList"}> Student List</Link>
              <br></br>
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
              Class Section
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Link to={"/createClass"}>Create Class</Link>
              <hr></hr>
              <Link to={"/classList"}> Class List</Link>
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
              Exam Section
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Link to={"/examAsignment"}>Exam-Student Assignment</Link>
              <hr></hr>
              <Link to={"/marksDistribution"}> Marks Distribution</Link>
              <hr></hr>
              <Link to={"/examByStudent"}> Exam Details by Student</Link>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Email Section
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Link to={"/email"}>Email sender</Link>
              <hr></hr>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading6">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse6"
              aria-expanded="false"
              aria-controls="collapse6"
            >
              Student Allocation
            </button>
          </h2>
          <div
            id="collapse6"
            className="accordion-collapse collapse"
            aria-labelledby="heading6"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Link to={"/addNewStudentToClass"}>
                Class- New Student Assignment
              </Link>
              <hr></hr>
              <Link to={"/addExistedStudentToClass"}>
                Class- Old Student Assignment
              </Link>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading7">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse7"
              aria-expanded="false"
              aria-controls="collapse7"
            >
              Attendance Tracker
            </button>
          </h2>
          <div
            id="collapse7"
            className="accordion-collapse collapse"
            aria-labelledby="heading7"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <button
                      type="button"
                      className="btn"
                      onClick={(e) => alert("hiii")}
                    >
                      Base
                    </button>
                  </li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticleNavbar3;
