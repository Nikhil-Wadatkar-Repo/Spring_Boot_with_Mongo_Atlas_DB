import React, { useContext, useState } from "react";
import CreateUser from "./CreateUser";
import { MyContext } from "./MyContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { text, setText } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <h1>Dashboard</h1>
      text: {text}
      <div className="row">
        <div className="col">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div className="col">0000</div>
        <div className="col">1111</div>
        <div className="col">
            
            
        </div>
      </div>
      <div>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Basic Modules
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a
                className="dropdown-item"
                onClick={(e) => navigate("/createStudent")}
              >
                Create Student
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={(e) => navigate("/studentList")}
              >
                Student List
              </a>
            </li>
            <li>
              <hr className="dropdown-divider"></hr>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={(e) => navigate("/addExistedStudentToClass")}
              >
                Add Existed Student To Class
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={(e) => navigate("/addNewStudentToClass")}
              >
                Add New Student To Class
              </a>
            </li>

            <li>
              <hr className="dropdown-divider"></hr>
            </li>

            <li>
              <a
                className="dropdown-item"
                onClick={(e) => navigate("/createTeacher")}
              >
                Create Teacher
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={(e) => navigate("/teacherList")}
              >
                Teacher List
              </a>
            </li>
            <li>
              <hr className="dropdown-divider"></hr>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={(e) => navigate("/createSection")}
              >
                Create Section
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={(e) => navigate("/sectionList")}
              >
                Section List
              </a>
            </li>
            <li>
              <hr className="dropdown-divider"></hr>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={(e) => navigate("/createClass")}
              >
                Create Class
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={(e) => navigate("/classList")}
              >
                Class List
              </a>
            </li>
          </ul>
        </li>
      </div>
      <button onClick={(e) => navigate("/demo1/1")}>Click</button>
    </div>
  );
}

export default Dashboard;
