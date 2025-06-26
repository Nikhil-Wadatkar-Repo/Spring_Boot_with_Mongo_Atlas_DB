import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { getAllStudentsAPI, updateDeleteStudentByIdAPI } from "./ApiCalls";
import { green } from "@mui/material/colors";

function StandardWiseStudentList() {
  const { std } = useParams();
  const nav = useNavigate();
  const [classList, setClassList] = useState([]);
  let initialValue = {
    section: "",
    year: "",
    standards: "",
  };
  const [reqDetails, setReqDetails] = useState(initialValue);
  const handleChange = (key, val) => {
    setReqDetails({ ...reqDetails, [key]: val });
  };
  const getStduentDetails = () => {
    getAllStudentsAPI().then((resp) => {
      setClassList(resp.data);
    });
  };
  const performAction = (url) => {
    updateDeleteStudentByIdAPI(url);
    getStduentDetails();
  };
  useEffect(() => {
    getStduentDetails();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col">
          <h5>Students List</h5>
        </div>
      </div>
      <div>
        <div>
          <button className="btn btn-primary sm">Create</button>{" "}
          <button className="btn btn-primary sm">Import</button>
        </div>
      </div>
      <br></br>

      <div style={{ height: "500px", overflowY: "auto" }}>
        <table className="table table-bordered rounded">
          <thead>
            <th>Name</th>
            <th>City</th>
            <th>Email</th>
            <th>Status</th>
            <th>Assigned Status</th>
            <th>Update</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {classList.map((item, index) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.email}</td>
                <td>
                  {item.status === "Active" ? (
                    <p style={{ color: "green" }}>Active</p>
                  ) : (
                    <p style={{ color: "red" }}>Inactive</p>
                  )}
                </td>
                <td>{item.classAllottementStatus}</td>
                <td>
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#ffc107" }}
                    onClick={(e) => nav("/createUpdateStudent/" + item.studId)}
                  >
                    Update{" "}
                  </button>
                </td>
                <td>
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#dc3545" }}
                    onClick={(e) =>
                      performAction(
                        "/deleteOrInActiveStudentById/" + item.studId + "/R"
                      )
                    }
                  >
                    Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StandardWiseStudentList;
