import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./MyContext";

function HorizontalNavbar() {
  const { text, setText } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Template
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={(e) => navigate("/create")}
                    >
                      Create User
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={(e) => navigate("/dash")}
                    >
                      Basic List with CURD
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={(e) => navigate("/teacherList")}
                    >
                      Teachers
                    </a>
                  </li>
                </ul>
              </li>
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

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown3"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  className/Section Module
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>

                  <li>
                    <a
                      className="dropdown-item"
                      onClick={(e) => navigate("/classList")}
                    >
                      className List
                    </a>
                  </li>
                </ul>
              </li>
              {text === "Admin" ? (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown1"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Admin Activities
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown1"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={(e) => navigate("/create")}
                        >
                          User CURD
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={(e) => navigate("/adminTeacherExcel")}
                        >
                          Excel Export
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={(e) => navigate("/dash")}
                        >
                          Pdf Export
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider"></hr>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={(e) => navigate("/teacherList")}
                        >
                          Teachers
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                ""
              )}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HorizontalNavbar;
