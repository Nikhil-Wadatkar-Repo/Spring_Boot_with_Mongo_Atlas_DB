import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import { useNavigate, useParams } from "react-router-dom";
import {
  assignExamAPI,
  getAllExamListAPI,
  getAllSubjectsAPI,
  getDistinctClasses,
  getExamDetailsByExamIdAPI,
  getExamDetailsByStudentIdAPI,
  getStudentsAPI,
  updateExamDetailsAPI,
} from "../ApiCalls";
import AlertMessage from "./AlertMessage";
import { callAllStudnetUNID, searchNameAPI } from "./ApiCalls";
import {
  callStudDetailsByClassId,
  getAllExamNonMappedStudentsByStdSection,
  getAllStudentsByStdSection,
  getSectionByStandardAPI,
} from "../ApiCallsFiltered";

function MarksDistribution() {
  const [studentDetails, setStudentDetails] = useState();
  const {
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
  } = useContext(MyContext);
  const { id } = useParams();

  const [sectionList, setsectionList] = useState([]);

  const [studentList, setStudentList] = useState([]);
  const [nameToSearch, setNameToSearch] = useState("");
  const [readable, setReadable] = useState(true);
  const [show, setShow] = useState(false);

  const nav = useNavigate();
  let initialValue = {
    subject1ObtainedMarks: 0,
    subject2ObtainedMarks: 0,
    subject3ObtainedMarks: 0,
    subject4ObtainedMarks: 0,
    subject5ObtainedMarks: 0,
    subject1Name: "",
    subject2Name: "",
    subject3Name: "",
    subject4Name: "",
    subject5Name: "",
    examName: "",
    studId: "",
    std: "",
    subId: "",
    classId: "",
  };
  const [reqDetails, setReqDetails] = useState(initialValue);
  const handleChange = (key, val) => {
    setReqDetails({ ...reqDetails, [key]: val });
  };
  useEffect(() => {
    // getAllSubjects();
    getClassList();
  }, []);

  const [examList, setExamList] = useState([]);
  const [stdList, setStdList] = useState([]);
  const [studList, setStudList] = useState([]);

  const [showAlert, setShowAlert] = useState(false);
  const getClassList = () => {
    getDistinctClasses().then((resp) => {
      console.log("All className List :", resp.data);
      setStdList(resp.data);
    });
  };

  const getSectionByStandard = (std) => {
    getSectionByStandardAPI(std).then((resp) => {
      setsectionList(resp.data);
    });
  };

  const getStudentDetailsByClassId = () => {
    getAllStudentsByStdSection(reqDetails.std, reqDetails.sectionName).then(
      (resp) => {
        console.log("Resp: ", resp.data);
        setStudList(resp.data);
      }
    );
  };
  const resetData = () => {
    setReqDetails(initialValue);
    setStudList([]);
  };
  const changeStandard = (std) => {
    handleChange("std", std);
    getSectionByStandard(std);
  };
  const saveDetails = () => {
    updateExamDetailsAPI(reqDetails)
      .then((resp) => {
        console.log("Resp: ", resp.data);
        if (resp.data.flag == true) {
          setAlert(true);
          setAlertTitle("Details are saved successfuly");
          setAlertMessage("");
          setMessageType("alert-success");
          setShowAlert(true);
          setReqDetails(initialValue);
        } else {
          setAlert(true);
          setAlertTitle(resp.data.message);
          setAlertMessage("");
          setMessageType("alert-danger");
          setShowAlert(true);
        }
      })
      .catch((error) => {
        setAlert(true);
        setAlertTitle("Sorry!! Please provide valide inputs");
        setAlertMessage("");
        setMessageType("alert-danger");
        setShowAlert(true);
      });
  };
  const loadExamDetails = (id) => {
    getExamDetailsByStudentIdAPI(id).then((resp) => {
      setExamList(resp.data);
    });
  };
  const [examDetailsById, setExamDetailsById] = useState({});
  const getExamDetailsByID = (id) => {
    getExamDetailsByExamIdAPI(id).then((resp) => {
      // setExamDetailsById();
      setReqDetails(resp.data);
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <h2>Mark Distribution</h2>
        </div>
        <div className="col-1"></div>
      </div>

      {showAlert ? (
        <>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              {" "}
              <AlertMessage></AlertMessage>
            </div>
            <div className="col"></div>
          </div>
        </>
      ) : (
        ""
      )}
      <br></br>
      <div className="row">
        <div className="col">
          <div>
            <label>Select Standard</label>
            <select
              value={reqDetails.std}
              id="inputState"
              className="form-select"
              onChange={(e) => {
                changeStandard(e.target.value);
              }}
            >
              <option selected>Choose...</option>
              {stdList.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col">
          <div>
            <label>Section</label>
            <select
              value={reqDetails.sectionName}
              id="inputState"
              className="form-select"
              onChange={(e) => handleChange("sectionName", e.target.value)}
            >
              <option selected>Choose...</option>
              {sectionList.map((item, index) => (
                <option key={index} value={item.sectionName}>
                  {item.sectionName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col">
          {" "}
          <button
            className="btn btn-primary"
            onClick={(e) => getStudentDetailsByClassId()}
          >
            Search Student
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {studList.length > 0 ? (
            <>
              <table className="table table-sm">
                <thead>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Exam status</th>
                </thead>
                <tbody>
                  {studList.map((item, index) => (
                    <tr>
                      <td>{item.studId}</td>
                      <td>{item.name}</td>
                      <td>{item.examStatus}</td>
                      <td>
                        {item.examStatus == "Not Allotted" ? (
                          <button onClick={(e) => nav("/examAsignment")}>
                            Allot Exam
                          </button>
                        ) : (
                          <button onClick={(e) => loadExamDetails(item.studId)}>
                            Load Exam Details
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <> No Records found!!</>
          )}
        </div>
        <div className="col">
          {examList.length > 0 ? (
            <>
              <table className="table table-sm">
                <thead>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  {examList.map((item, index) => (
                    <tr>
                      <td>{item.examName}</td>
                      <td>
                        {item.isMarksAssigned == true
                          ? "Assigned"
                          : "Not Assigned"}
                      </td>
                      <td>
                        <button
                          onClick={(e) => {
                            console.log("Exam by student id:: ", item.subId);
                            setShow(true);
                            getExamDetailsByID(item.subId);
                          }}
                        >
                          Load Data
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <>No exam details found!!</>
          )}
        </div>

        {show == true ? (
          <>
            <div className="col">
              <div className="row">
                <div className="col">
                  <h3>Mark Details</h3>
                  <br></br>
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <td>
                          <label>{reqDetails.subject1Name}</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={reqDetails.subject1ObtainedMarks}
                            onChange={(e) =>
                              handleChange(
                                "subject1ObtainedMarks",
                                e.target.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>{reqDetails.subject2Name}</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={reqDetails.subject2ObtainedMarks}
                            onChange={(e) =>
                              handleChange(
                                "subject2ObtainedMarks",
                                e.target.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>{reqDetails.subject3Name}</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={reqDetails.subject3ObtainedMarks}
                            onChange={(e) =>
                              handleChange(
                                "subject3ObtainedMarks",
                                e.target.value
                              )
                            }
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label>{reqDetails.subject4Name}</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={reqDetails.subject4ObtainedMarks}
                            onChange={(e) =>
                              handleChange(
                                "subject4ObtainedMarks",
                                e.target.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>{reqDetails.subject5Name}</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={reqDetails.subject5ObtainedMarks}
                            onChange={(e) =>
                              handleChange(
                                "subject5ObtainedMarks",
                                e.target.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <button className="btn btn-danger">Reset</button>
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={(e) => saveDetails()}
                          >
                            Update Marks
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default MarksDistribution;
