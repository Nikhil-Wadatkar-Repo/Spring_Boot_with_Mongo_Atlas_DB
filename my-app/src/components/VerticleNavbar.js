import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import { schoolName } from "../Constants";

function VerticleNavbar() {
  const [prevId,setPrevId]=useState("");
  const [prevListId,setPrevListId]=useState("");
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
  const doBold = (id,list_id)=>{
    $("#"+id).attr('style', 'font-weight:bold;');    
    $("#"+list_id).css('backgroundColor', '#21c67a');
   
    $(prevListId).css('backgroundColor', 'white');
    $(prevId).attr('style', 'font-weight:normal;');
    
    setPrevId("#"+id);
    setPrevListId("#"+list_id);
  }

  return (
    <div  >
        <h4 style={{ backgroundColor: "#79d789", color: "white" }}> 
          {schoolName}
        </h4>
      <ul className="list-group " >
        <li className="list-group-item">
          <a
            className="dropdown-item"
            onClick={(e) => navigate("/createStudent")}
          >
            Create Student
          </a>
        </li>
        <li className="list-group-item"  >
          <a
            className="dropdown-item"
            onClick={(e) => navigate("/studentList")}
          >
            Student List
          </a>
        </li>

        <li className="list-group-item"  >
          <a
            className="dropdown-item"
            onClick={(e) => navigate("/addExistedStudentToClass")}
            style={{'white-space': 'pre-wrap', 'overflow-wrap': 'break-word'}}
          >
            Add Existed Student To className
          </a>
        </li>
        {/* <li className="list-group-item">
          <a
            className="dropdown-item"
            onClick={(e) => navigate("/addNewStudentToClass")}
            style={{'white-space': 'pre-wrap', 'overflow-wrap': 'break-word'}}
          >
            Add New Student To Class
          </a>
        </li> */}

        <li className="list-group-item" id="ctl" >
          <a
            className="dropdown-item"
            onClick={(e) => {
              navigate("/createTeacher")
            doBold("ct","ctl")
            }}
            id="ct"

          >
            Create Teacher
          </a>
        </li>
        <li className="list-group-item" id="tll" >
          <a
            className="dropdown-item"
            onClick={(e) => {
              navigate("/teacherList")
            doBold("tl","tll")
            }}
            id="tl"
          >
            Teacher List
          </a>
        </li>

        <li className="list-group-item"  >
          <a
            className="dropdown-item"
            onClick={(e) => navigate("/createSection")}
            style={{ overflowWrap: "break-word" }}
          >
            Create Section
          </a>
        </li>
        {/* <li className="list-group-item"
        aria-checked={"true"}
        >
          <a
            className="dropdown-item"
            onClick={(e) => navigate("/sectionList")}
           
          >
            Section List
          </a>
        </li> */}

        <li className="list-group-item"  >
          <a
            id="id2"
            className="dropdown-item"
            onClick={(e) => {
              navigate("/createClass");
              // checkClickedOrNot(e.target.id)
            }}
            style={{ fontStyle: "bold" }}
          >
            Create className
          </a>
        </li>
        <li className="list-group-item"  >
          <a
            id="id1"
            className="dropdown-item"
            onClick={(e) => {
              navigate("/classList");
              // checkClickedOrNot(e.target.id)
            }}
          >
            className List
          </a>
        </li>

        <li className="list-group-item"  >
          <a
            id="id1"
            className="dropdown-item"
            onClick={(e) => {
              navigate("/studMarks");
              // checkClickedOrNot(e.target.id)
            }}
            style={{'white-space': 'pre-wrap', 'overflow-wrap': 'break-word'}}
          >
            Standard/Section wise student
          </a>
        </li>
        <li className="list-group-item"  >
          <a
            id="id1"
            className="dropdown-item"
            onClick={(e) => {
              navigate("/examAsignment");
              // checkClickedOrNot(e.target.id)
            }}
            style={{'white-space': 'pre-wrap', 'overflow-wrap': 'break-word'}}
          >
            Exam Assignment to student
          </a>
        </li>
        <li className="list-group-item" style={{ backgroundColor: "yellow" }}>
          <a
            id="id1"
            className="dropdown-item"
            onClick={(e) => {
              navigate("/marksDistribution");
            }}
            style={{'white-space': 'pre-wrap', 'overflow-wrap': 'break-word'}}
          >Marks Distribution
          </a>
        </li>
        <li className="list-group-item" style={{ backgroundColor: "yellow" }}>
          <a
            id="id1"
            className="dropdown-item"
            onClick={(e) => {
              navigate("/examDetails");
            }}
            style={{'white-space': 'pre-wrap', 'overflow-wrap': 'break-word'}}
          >Exam List
          </a>
        </li>
      </ul>
      <br></br>
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
             
              <Link to={"/createStudent"}>Create Student</Link>
              <br></br>
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
              <br></br>
              <Link to={"/classList"}> Class List</Link>
              <br></br>
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
            <Link to={"/createClass"}>Exam-Student Assignment</Link>
            <hr></hr>
              <Link to={"/classList"}> Marks Distribution</Link>
              <hr></hr>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">callps four</div>
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
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticleNavbar;
