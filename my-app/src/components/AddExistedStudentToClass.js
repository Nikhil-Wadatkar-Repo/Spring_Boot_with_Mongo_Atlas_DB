import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./MyContext";
import {
  addExistedStudentToClassAPI,
  callAllClasses,
  callAllSections,
  callAllStudnetUNID,
  searchNameAPI,
} from "./ApiCalls";
import AlertMessage from "./AlertMessage";
import { getDistinctClasses } from "../ApiCalls";
import { getSectionByStandardAPI } from "../ApiCallsFiltered";

function AddExistedStudentToClass() {
  const { setAlert, setAlertMessage, setMessageType, setAlertTitle } =
    useContext(MyContext);
  let initialValue = {
    sectionName: "",
    standard: "",
    studId: "",
    name: "",
    contact: "",
    pincode: "",
    city: "",
    email: "",
    std: "",
    section: "",
    dob: "",
    classId: "",
  };
  const [reqDetails, setReqDetails] = useState(initialValue);
  const handleChange = (key, val) => {
    setReqDetails({ ...reqDetails, [key]: val });
  };
  const resetData = () => {
    setReqDetails(initialValue);
  };

  const [sectionList, setsectionList] = useState([]);
  const [stdList, setStdList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [nameToSearch, setNameToSearch] = useState("");
  const [readable, setReadable] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    getClassList();
  }, []);

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

  const searchName = () => {
    searchNameAPI(nameToSearch).then((resp) => {
      setStudentList(resp.data);
    });
  };

  const loadDataByUnid = (id) => {
    // setReqDetails({ ...reqDetails, ["studId"]: id });
    callAllStudnetUNID(id).then((resp) => {
      setReqDetails(resp.data);
    });
  };

  const saveData = () => {
    console.log("Save Data: ", reqDetails);
    addExistedStudentToClassAPI(reqDetails).then((resp) => {
      if (resp.data.message === "Success") {
        setAlert(true);
        setAlertTitle("Details are saved successfuly");
        setAlertMessage("");
        setMessageType("alert-success");
        setShowAlert(true);
        resetData();
      }
    });
  };

  return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <h2>Class - Student Assignement (Existed)</h2>
        </div>
        <div className="col"></div>
      </div>
      <br></br>
      {showAlert ? (
        <>
          <AlertMessage></AlertMessage>
        </>
      ) : (
        ""
      )}
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={nameToSearch}
            onChange={(e) => setNameToSearch(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={(e) => searchName()}>
            Click to search
          </button>
        </div>
        <div className="col"></div>
      </div>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <table className="table table-hover">
            <tbody>
              {studentList.map((std, index) => (
                <tr key={index}>
                  <td>{std.studName}</td>
                  <td>{std.studUnid}</td>
                  <td>
                    <button
                      style={{ backgroundColor: "#34e583" }}
                      className="btn text-white"
                      onClick={(e) => loadDataByUnid(std.studId)}
                    >
                      Load Data
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>
      <br></br>

      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div>
            <h3>Student Details</h3>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Full Name : </th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={reqDetails.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    readOnly={readable}
                  ></input>
                </td>
              </tr>

              <tr>
                <th>Email :</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={reqDetails.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    readOnly={readable}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>DOB :</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={reqDetails.dob}
                    onChange={(e) => handleChange("dob", e.target.value)}
                    readOnly={readable}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>Contact :</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={reqDetails.contact}
                    onChange={(e) => handleChange("contact", e.target.value)}
                    readOnly={readable}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>City :</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={reqDetails.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    readOnly={readable}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>Pincode :</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={reqDetails.pincode}
                    onChange={(e) => handleChange("pincode", e.target.value)}
                    readOnly={readable}
                  ></input>
                </td>
              </tr>

              <tr>
                <th>Class : </th>
                <td>
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
                </td>
              </tr>
              <tr>
                <th>Section : </th>
                <td>
                  <select
                    value={reqDetails.sectionName}
                    id="inputState"
                    className="form-select"
                    onChange={(e) =>
                      handleChange("sectionName", e.target.value)
                    }
                  >
                    <option selected>Choose...</option>
                    {sectionList.map((item, index) => (
                      <option key={index} value={item.sectionName}>
                        {item.sectionName}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <th>Submit </th>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => saveData()}
                  >
                    Create Student
                  </button>
                </td>{" "}
              </tr>
            </thead>
          </table>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </>
  );
}

export default AddExistedStudentToClass;
