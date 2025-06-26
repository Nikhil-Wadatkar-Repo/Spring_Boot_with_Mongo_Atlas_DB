import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import { useParams } from "react-router-dom";
import { getAllExamDetailsAPI, getExamDetailsByExamIdAPI } from "../ApiCalls";

function ExamDetails({ details }) {
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
    classId: "",
  };
  const getExamDetailsByID = (id) => {
    getExamDetailsByExamIdAPI(id).then((resp) => {
      // setExamDetailsById();
      setReqDetails(resp.data);
    });
  };
  const [show, setShow] = useState(false);
  useEffect(() => {
    getAllExamDetails();
  }, []);
  const [reqDetails, setReqDetails] = useState(initialValue);
  const handleChange = (key, val) => {
    setReqDetails({ ...reqDetails, [key]: val });
  };
  const [examList, setExamList] = useState([]);
  const getAllExamDetails=()=>{
    getAllExamDetailsAPI().then(resp=>{
        setExamList(resp.data);
    })
  }
  return (
    <div>
      <br></br>
      <div className="row">
      <div className="col">
      {examList.length > 0 ? (
            <>
              <table className="table table-sm">
                <thead>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  {examList.map((item, index) => (
                    <tr>
                      <td>{item.studName}</td>
                      <td>{item.examName}</td>
                      <td>{item.status}</td>
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
                    onChange={(e) => handleChange("", e.target.value)}
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
                    onChange={(e) => handleChange("", e.target.value)}
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
                    onChange={(e) => handleChange("", e.target.value)}
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
                    onChange={(e) => handleChange("", e.target.value)}
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
                    onChange={(e) => handleChange("", e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-danger">Reset</button>
                </td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
  );
}

export default ExamDetails;
