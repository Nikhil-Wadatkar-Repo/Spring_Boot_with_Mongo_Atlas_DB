import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  callAllClasses,
  callAllSections,
  callGetAllClassesCount,
  getDistinctStandardAPI,
  getDistinctYearsAPI,
  getSectionYearByStandardAPI,
} from "../ApiCalls";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "./MyContext";
import AlertMessage from "./AlertMessage";

function ClassList() {
  const nav = useNavigate();
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
  const [showAlert, setShowAlert] = useState(false);
  const [classList, setClassList] = useState([]);
  const [sectionList, setSectionList] = useState([]);
  const [stdList, setStdList] = useState([]);
  const [yearList, setYearList] = useState([]);

  let initialValue = {
    std: 0,
    section: 0,
    year: 0,
  };
  const [req, setReq] = useState(initialValue);
  const [paramsDetails, setParamsDetails] = useState(initialValue);

  const handleChange = (key, val) => {
    setReq({ ...req, [key]: val });
  };
  const getFilteredClassDetailsList = () => {
    setParamsDetails(req);
    callGetAllClassesCount().then((resp) => {
      if (resp.data.length > 0) {
        setReq(initialValue);
        setClassList(resp.data);
        setShowAlert(false);
      } else {
        setAlert(true);
        setAlertTitle("Sorry!!!!!");
        setAlertMessage(
          "Sorry We dont't have any record regarding selected fields"
        );
        setMessageType("alert-danger");
        setShowAlert(true);
      }
    });
  };
  const navigateToPage = (id) => {
    // console.log("navigateToPage: ",section,year,std);

    // nav("/studentList/" + paramsDetails.section + "/" + paramsDetails.year + "/" + paramsDetails.std)
    nav("/createClass/" + id);
  };

  useEffect(() => {
    getFilteredClassDetailsList();
  }, []);
  return (
    <>
      <h1>Class List</h1>
      {showAlert ? (
        <>
          <AlertMessage></AlertMessage>
        </>
      ) : (
        ""
      )}

      <br></br>

      {classList.length > 0 ? (
        <>
          <div className="row">
            <div id="table">
              <table className="table">
                <thead>
                  <th>Class Id</th>
                  <th>No Of Student</th>
                  {/* <th>Present Student</th>
                  <th>year</th>
                  <th>Class Teacher</th>
                  <th>Std</th>
                  <th>Section</th> */}
                </thead>
                <tbody>
                  {classList.map((item, index) => (
                    <tr key={index}>
                      <td>{item.standard}</td>
                      <td>{item.count}</td>
                      {/* <td>{item.presentStudents}</td>
                      <td>{item.year}</td>
                      <td>{item.teacher}</td>
                      <td>{item.standard}</td>
                      <td>{item.section}</td> */}
                      <td>
                        <button
                          onClick={(e) => {
                            // navigateToPage(item.section,item.year,item.standards)
                            navigateToPage(item.classId);
                          }}
                        >
                          View Students
                        </button>
                      </td>
                      <td>
                        <a href={"/createClass/" + item.classId}>Link here</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      <button
        onClick={(e) =>
          nav(
            "/studentList/" +
              paramsDetails.section +
              "/" +
              paramsDetails.year +
              "/" +
              paramsDetails.std
          )
        }
      >
        Redirect
      </button>
    </>
  );
}

export default ClassList;
