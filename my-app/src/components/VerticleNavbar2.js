import React from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

function VerticleNavbar2() {
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
      <nav className="nav flex-column">
        <a className="nav-link active" aria-current="page" href="#">
          Active
        </a>
        <hr></hr>
        <a className="nav-link" href="#">
          Link
        </a>
        <hr></hr>
        <a className="nav-link" href="#">
          Link
        </a>
        <a
          className="nav-link disabled"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        >
          Disabled
        </a>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Student
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr></hr>{" "}
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Teacher
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr></hr>{" "}
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
      </nav>
    </>
  );
}

export default VerticleNavbar2;
