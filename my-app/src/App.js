import React, { createContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import TeachersList from "./components/TeachersList";
import ModalDemo from "./components/ModalDemo";
import HorizontalNavbar1 from "./components/HorizontalNavbar1";
import { MyContext } from "./components/MyContext";
import ClassList from "./components/ClassList";
import CreateTeacher from "./components/CreateTeacher";
import CreateClass from "./components/CreateClass";
import CreateSection from "./components/CreateSection";
import CreateStudent from "./components/CreateStudent";
import SubjectByStdUNID from "./components/SubjectByStdUNID";
import AddExistedStudentToClass from "./components/AddExistedStudentToClass";
import AddNewStudentToClass from "./components/AddNewStudentToClass";
import StudentList from "./components/StudentList";
import ExamAssignment from "./components/ExamAssignment";
import MarksDistribution from "./components/MarksDistribution";
import ExamDetails from "./components/ExamDetails";
import VerticleNavbar3 from "./components/VerticleNavbar3";
import Login from "./components/Login";
import StudentStatistics from "./components/StudentStatistics";
import ExamByStudent from "./components/ExamByStudent";
import ExamDetailsByStudentID from "./components/ExamDetailsByStudentID";
import StandardWiseStudentList from "./components/StandardWiseStudentList";
import EmailSender from "./components/EmailSender";

function App() {
  const [text, setText] = useState("Admin");
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalDesc, setModalDesc] = useState("");
  const [messageType, setMessageType] = useState("alert-success");
  const [open, setOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  let contextObject = {
    text,
    setText,
    alert,
    setAlert,
    alertMessage,
    setAlertMessage,
    messageType,
    setMessageType,
    alertTitle,
    setAlertTitle,
    open,
    setOpen,
    handleOpen,
    handleClose,
    modalTitle,
    setModalTitle,
    modalDesc,
    setModalDesc,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <div style={{ fontFamily: "Verdana, sans-serif" }}>
      <MyContext.Provider value={contextObject}>
        {/* <HorizontalNavbar1></HorizontalNavbar1> */}
        {!isLoggedIn ? (
          <Login></Login>
        ) : (
          <>
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-sm-2"
                  style={{
                    height: "100vh",
                    overflowY: "auto",
                  }}
                >
                  <div
                    className="container-fluid sticky-top"
                    style={{ backgroundColor: "white" }}
                  >
                    <h1>LOGO</h1>
                  </div>
                  <VerticleNavbar3></VerticleNavbar3>
                </div>
                <div
                  className="col-sm-10"
                  style={{
                    height: "100vh",
                    overflowY: "auto",
                  }}
                >
                  <HorizontalNavbar1></HorizontalNavbar1>
                  <Routes>
                    <Route
                      path="/createClass/:classId?"
                      element={<CreateClass />}
                    ></Route>
                    <Route
                      path="/studentsByStandard/:std?"
                      element={<StandardWiseStudentList />}
                    ></Route>
                    <Route
                      path="/examByStudent"
                      element={<ExamByStudent />}
                    ></Route>
                    <Route path="/email" element={<EmailSender />}></Route>
                    <Route
                      path="/examDetails"
                      element={<ExamDetails />}
                    ></Route>
                    <Route
                      path="/addExistedStudentToClass"
                      element={<AddExistedStudentToClass />}
                    />
                    <Route path="/classList" element={<ClassList />} />
                    <Route
                      path="/studMarks/:id?"
                      element={<SubjectByStdUNID />}
                    ></Route>
                    <Route
                      path="/marksDistribution"
                      element={<MarksDistribution />}
                    />
                    <Route
                      path="/addNewStudentToClass"
                      element={<AddNewStudentToClass />}
                    />
                    <Route path="/createSection" element={<CreateSection />} />
                    <Route path="/examAsignment" element={<ExamAssignment />} />
                    <Route path="/createTeacher" element={<CreateTeacher />} />
                    <Route
                      path="/examDetailsByStudentID/:id?"
                      element={<ExamDetailsByStudentID />}
                    />
                    <Route path="/statistics" element={<StudentStatistics />} />
                    <Route
                      path="/createUpdateStudent/:studID?"
                      element={<CreateStudent />}
                    />

                    {/* <Route
                  path="/studentList/:section?/:year?/:std?"
                  element={<SectionList />}
                /> */}

                    <Route path="/create" element={<CreateUser />} />
                    <Route path="/studentList" element={<StudentList />} />
                    <Route path="/modal" element={<ModalDemo />} />
                    <Route
                      path="/teacherList"
                      element={<TeachersList></TeachersList>}
                    />
                    <Route path="/dash" element={<Dashboard />} />
                  </Routes>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="footer fixed-bottom">
          <b>2 days ago</b>
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;
