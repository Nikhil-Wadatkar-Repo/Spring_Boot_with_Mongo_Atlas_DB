import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "./MyContext";

import {
  createStudentAPI,
  getStudentByIdAPI,
  updateStudentAPI,
} from "../ApiCalls";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

function CreateStudent() {
  const nav = useNavigate();
  const { studID } = useParams();
  const contextObject = useContext(MyContext);
  let initialValue = {
    studentName: "",
    contact: "",
    pincode: "",
    city: "",
    email: "",
    dob: "",
    status: "",
    studentStatus: "",
  };

  const [reqDetails, setReqDetails] = useState(initialValue);
  const handleChange = (key, val) => {
    setReqDetails({ ...reqDetails, [key]: val });
  };
  const resetData = () => {
    setReqDetails(initialValue);
  };
  const [updateFlag, setupdateFlag] = useState(false);

  useEffect(() => {
    // debugger;
    if (studID != 0 && studID && "0" && studID != undefined) {
      getStudentDetailsByID(studID);
      setupdateFlag(true);
    }
  }, []);
  const getStudentDetailsByID = (id) => {
    getStudentByIdAPI(id).then((resp) => {
      if (resp.data.status === "Active") setRadio1(true);
      else setRadio1(false);
      setReqDetails(resp.data);
    });
  };
  const saveData = () => {
    console.log("Request details::", reqDetails);

    if (!updateFlag)
      createStudentAPI(reqDetails).then((resp) => {
        console.log("Response: ", resp.data);
        resetData();
        nav("/studentList");
      });
    else {
      updateStudentAPI(reqDetails).then((resp) => {
        console.log("Response: ", resp.data);
        resetData();
        nav("/studentList");
      });
    }
  };
  const [radio1, setRadio1] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-sm-1">Params: {studID}</div>
        <div className="col-sm-10">
          {updateFlag ? <h2>Update Student</h2> : <h2>Create Student</h2>}
        </div>
        <div className="col-sm-1"></div>
      </div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Full Name : </th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={reqDetails.studentName}
                    onChange={(e) =>
                      handleChange("studentName", e.target.value)
                    }
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
                  ></input>
                </td>
              </tr>
              <tr>
                <th>DOB :</th>
                <td>
                  <input
                    type="date"
                    className="form-control"
                    value={reqDetails.dob}
                    onChange={(e) => handleChange("dob", e.target.value)}
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
                  ></input>
                </td>
              </tr>
              <tr>
                <th>Status:</th>
                <td>
                  <FormControl>
                    <RadioGroup
                      row={true}
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      studentName="row-radio-buttons-group"
                      value={reqDetails.status}
                      // onChange={(e) => handleChange("status", e.target.value)}
                    >
                      <FormControlLabel
                        value="Active"
                        control={<Radio />}
                        label="Active"
                        checked={radio1 ? true : false}
                        onClick={(e) => {
                          console.log("====================================");
                          console.log(e.target);
                          console.log("====================================");
                          setRadio1(true);
                          handleChange("status", "Active");
                        }}
                      />
                      <FormControlLabel
                        value="Inactive"
                        control={<Radio />}
                        label="Inactive"
                        checked={!radio1 ? true : false}
                        onClick={(e) => {
                          setRadio1(false);
                          handleChange("status", "Inactive");
                        }}
                      />
                    </RadioGroup>
                  </FormControl>
                </td>
              </tr>
              <tr>
                <th>Submit </th>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => saveData()}
                  >
                    {!updateFlag ? "Create Student" : "Update"}
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

export default CreateStudent;
