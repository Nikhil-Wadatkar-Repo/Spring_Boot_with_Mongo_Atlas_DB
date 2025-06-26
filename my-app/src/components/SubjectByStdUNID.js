import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "./MyContext";
import { callStudDetailsByUNID, getDistinctClasses } from "../ApiCalls";
import {
  callStudDetailsByClassId,
  getSectionByStandardAPI,
} from "../ApiCallsFiltered";

function SubjectByStdUNID() {
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
  const [showAlert, setShowAlert] = useState(false);
  const nav = useNavigate();
  let initialValue = {
    std: "",
    classId: "",
  };
  const [reqDetails, setReqDetails] = useState(initialValue);
  const handleChange = (key, val) => {
    setReqDetails({ ...reqDetails, [key]: val });
  };
  const changeStandard = (std) => {
    handleChange("std", std);
    getSectionByStandard(std);
  };
  useEffect(() => {
    // getStudentDetailsByUNID(id);
    getClassList();
  }, []);
  const [sectionList, setsectionList] = useState([]);
  const [stdList, setStdList] = useState([]);
  const [studList, setStudList] = useState([]);
  const getClassList = () => {
    getDistinctClasses().then((resp) => {
      console.log("All Class List :", resp.data);
      setStdList(resp.data);
    });
  };
  const getSectionByStandard = (std) => {
    getSectionByStandardAPI(std).then((resp) => {
      setsectionList(resp.data);
    });
  };

  const getStudentDetailsByClassId = () => {
    callStudDetailsByClassId(reqDetails.classId).then((resp) => {
      console.log("Resp: ", resp.data);
      setStudList(resp.data);
    });
  };
  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <h2>Student Marks</h2>
        </div>
        <div className="col"></div>
      </div>
      <br></br>
      <div className="row">
        <div className="col">
          <div>
            <label>Class</label>
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
              value={reqDetails.classId}
              id="inputState"
              className="form-select"
              onChange={(e) => handleChange("classId", e.target.value)}
            >
              <option selected>Choose...</option>
              {sectionList.map((item, index) => (
                <option key={index} value={item.classId}>
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
            Submit
          </button>
        </div>
      </div>

      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>

      <br></br>

      <br></br>
      {studList.length > 1 ? (
        <>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">City</th>
                  <th scope="col">Unique ID</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {studList.map((stu, index) => (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{stu.name}</td>
                    <td>{stu.city}</td>
                    <td>{stu.studUNID}</td>
                    <td>{stu.dob}</td>
                    <td>{stu.status}</td>
                    <td>
                      <button>View Marksheet</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <h3>No Records found for above section!!!.</h3>
        </>
      )}
    </div>
  );
}

export default SubjectByStdUNID;
