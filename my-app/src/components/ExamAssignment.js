import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import { useNavigate, useParams } from "react-router-dom";
import {
  assignExamAPI,
  getAllExamListAPI,
  getAllSubjectsAPI,
  getDistinctClasses,
} from "../ApiCalls";
import AlertMessage from "./AlertMessage";
import { ApiCallsFiltered, searchNameAPI } from "./ApiCalls";
import {
  getAllExamNonMappedStudentsByStdSectionAPI,
  getSectionByStandardAPI,
} from "../ApiCallsFiltered";

function ExamAssignment() {
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

  const nav = useNavigate();
  let initialValue = {
    subject1TotalMarks: 0,
    subject2TotalMarks: 0,
    subject3TotalMarks: 0,
    subject4TotalMarks: 0,
    subject5TotalMarks: 0,
    subject1Name: "",
    subject2Name: "",
    subject3Name: "",
    subject4Name: "",
    subject5Name: "",
    examName: "",
    studId: "",
    standard: "",
    sectionName: "",
  };
  const [reqDetails, setReqDetails] = useState(initialValue);
  const handleChange = (key, val) => {
    setReqDetails({ ...reqDetails, [key]: val });
  };

  useEffect(() => {
    getAllSubjects();
    getClassList();
    getExams();
  }, []);
  const [subjectList, setSubjectList] = useState([]);
  const [subjectList1, setSubjectList1] = useState([]);
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

  const getAllSubjects = () => {
    getAllSubjectsAPI().then((resp) => {
      setSubjectList(resp.data);
      setSubjectList1(resp.data);
    });
  };
  const getExams = () => {
    getAllExamListAPI().then((resp) => setExamList(resp.data));
  };

  const getSectionByStandard = (std) => {
    getSectionByStandardAPI(std).then((resp) => {
      setsectionList(resp.data);
    });
  };

  const getStudentDetailsByClassSection = () => {
    getAllExamNonMappedStudentsByStdSectionAPI(
      reqDetails.standard,
      reqDetails.sectionName
    ).then((resp) => {
      console.log("Resp: ", resp.data);
      setStudList(resp.data);
    });
  };
  const resetData = () => {
    setReqDetails(initialValue);
    setStudList([]);
  };
  const saveDetails = () => {
    assignExamAPI(reqDetails)
      .then((resp) => {
        console.log("Resp: ", resp.data);
        if (resp.data.message == "Success") {
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
        setAlertTitle("Sorry!! Please peovide valide inputs");
        setAlertMessage("");
        setMessageType("alert-danger");
        setShowAlert(true);
      });
  };
  return (
    <>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <h2>Student - Exam Assignement</h2>
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

      <div className="row">
        <div className="col">
          <div>
            <label>Standard</label>
            <select
              value={reqDetails.standard}
              id="inputState"
              className="form-select"
              onChange={(e) => {
                handleChange("standard", e.target.value);
                getSectionByStandard(e.target.value);
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
              onChange={(e) => {
                handleChange("sectionName", e.target.value);
                // getSectionByStandard(e.target.value);
              }}
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
            onClick={(e) => getStudentDetailsByClassSection()}
          >
            Search Student
          </button>
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col">
          {studList.map((item, index) => (
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={reqDetails.studId}
                onChange={(e) => {
                  handleChange("studId", item.studId);
                }}
                onClick={(e) => {
                  console.log("Student ID: ", item.studId);
                }}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                {item.studentName}
              </label>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-sm-2">
          <label>Exam Name</label>
          <select
            value={reqDetails.std}
            id="inputState"
            className="form-select"
            onChange={(e) => {
              handleChange("examName", e.target.value);
            }}
          >
            <option selected>Choose...</option>
            {examList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-2">456</div>
        <div className="col-sm-2">678</div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-sm-2">
          <label>Subject 1</label>

          <select
            value={reqDetails.subject1Name}
            id="inputState"
            className="form-select"
            onChange={(e) => {
              handleChange("subject1Name", e.target.value);
            }}
          >
            <option selected>Choose...</option>
            {subjectList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-2">
          <label>Subject 2</label>

          <select
            value={reqDetails.subject2Name}
            id="inputState"
            className="form-select"
            onChange={(e) => {
              handleChange("subject2Name", e.target.value);
            }}
          >
            <option selected>Choose...</option>
            {subjectList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-2">
          <label>Subject 3</label>

          <select
            value={reqDetails.subject3Name}
            id="inputState"
            className="form-select"
            onChange={(e) => {
              handleChange("subject3Name", e.target.value);
            }}
          >
            <option selected>Choose...</option>
            {subjectList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-2">
          <label>Subject 4</label>

          <select
            value={reqDetails.subject4Name}
            id="inputState"
            className="form-select"
            onChange={(e) => {
              handleChange("subject4Name", e.target.value);
            }}
          >
            <option selected>Choose...</option>
            {subjectList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-2">
          {" "}
          <label>Subject 5</label>
          <select
            value={reqDetails.subject5Name}
            id="inputState"
            className="form-select"
            onChange={(e) => {
              handleChange("subject5Name", e.target.value);
            }}
          >
            <option selected>Choose...</option>
            {subjectList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-2">
          <label>Subject 1 Total Marks</label>
          <input
            type="text"
            value={reqDetails.subject1TotalMarks}
            onChange={(e) => handleChange("subject1TotalMarks", e.target.value)}
          />
        </div>
        <div className="col-sm-2">
          <label>Subject 2 Total Marks</label>
          <input
            type="text"
            value={reqDetails.subject2TotalMarks}
            onChange={(e) => handleChange("subject2TotalMarks", e.target.value)}
          />
        </div>
        <div className="col-sm-2">
          <label>Subject 3 Total Marks</label>
          <input
            type="text"
            value={reqDetails.subject3TotalMarks}
            onChange={(e) => handleChange("subject3TotalMarks", e.target.value)}
          />
        </div>
        <div className="col-sm-2">
          <label>Subject 4 Total Marks</label>
          <input
            type="text"
            value={reqDetails.subject4TotalMarks}
            onChange={(e) => handleChange("subject4TotalMarks", e.target.value)}
          />
        </div>
        <div className="col-sm-2">
          <label>Subject 5 Total Marks</label>
          <input
            type="text"
            value={reqDetails.subject5TotalMarks}
            onChange={(e) => handleChange("subject5TotalMarks", e.target.value)}
          />
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-sm-1">
          <button className="btn btn-danger" onClick={(e) => resetData()}>
            Reset
          </button>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-primary" onClick={(e) => saveDetails()}>
            Assign Exam
          </button>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default ExamAssignment;
