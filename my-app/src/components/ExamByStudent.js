import React, { useContext, useEffect, useMemo, useState } from "react";

import { MyContext } from "./MyContext";
import { onlyAlphabetValidator } from "../util/Validator";
import AlertMessage from "./AlertMessage";
import { AgGridReact } from "ag-grid-react";
import {
  callAllSectionsAPI,
  createSectionAPI,
  deleteSectionByIdAPI,
  getAllExamNonMappedStudentsByStdSectionAPI,
  getSectionByStandardAPI,
  updateSectionAPI,
} from "../ApiCallsFiltered";
import { getDistinctClasses } from "../ApiCalls";
import ExamDetailsByStudentID from "./ExamDetailsByStudentID";
import { useNavigate } from "react-router-dom";
function ExamByStudent() {
  const contextObject = useContext(MyContext);
  const [showAlert, setShowAlert] = useState(false);
  const [sections, setSections] = useState([]);
  let initialValue = {
    standard: "",
    sectionName: "",
  };
  const [reqDetails, setReqDetails] = useState(initialValue);
  const [stdId, setStdId] = useState();
  const handleChange = (key, val) => {
    setReqDetails({ ...reqDetails, [key]: val });
  };

  useEffect(() => {
    getAllSections();
  }, []);
  useEffect(() => {
    getClassList();
  }, []);
  const [studentList, setStudentList] = useState([]);
  const [sectionList, setsectionList] = useState([]);
  const [stdList, setStdList] = useState([]);
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
  const getAllStudentsByStdSection = () => {
    getAllExamNonMappedStudentsByStdSectionAPI(
      reqDetails.standard,
      reqDetails.sectionName
    ).then((resp) => {
      setStudentList(resp.data);
      setRowData(resp.data);
    });
  };
  const validateRequest = (reqDetails) => {
    let errorDetails = {
      error: false,
      message: "",
    };
    let message = "";
    if (
      reqDetails.sectionName === "" ||
      !onlyAlphabetValidator(reqDetails.sectionName)
    )
      message = "Section Name";

    if (message === "")
      return {
        error: true,
        message: "",
      };
    else
      return {
        error: false,
        message: message,
      };
  };
  const resetData = () => {
    setReqDetails(initialValue);
  };

  const saveOrUpdateData = (e, operation) => {
    e.preventDefault();
    console.log("Save data method: ", e);
    let isValid = validateRequest(reqDetails);
    if (isValid.error === false) {
      contextObject.setAlert(true);
      contextObject.setAlertTitle("Sorry!! Please provide valide inputs");
      contextObject.setAlertMessage(isValid.message);
      contextObject.setMessageType("alert-danger");
      setShowAlert(true);
    } else {
      if (operation === "save") {
        createSectionAPI({
          sectionName: reqDetails.sectionName,
          year: reqDetails.year,
          std: reqDetails.standard,
          noOfStudents: reqDetails.noOfStudents,
        })
          .then((resp) => {
            let response = resp.data;
            console.log("Respose: ", response);

            if (response.flag === true) {
              contextObject.setAlert(true);
              contextObject.setAlertTitle("Details are saved successfuly");
              contextObject.setAlertMessage("");
              contextObject.setMessageType("alert-success");
              setShowAlert(true);
              resetData();
              getAllSections();
            } else {
              contextObject.setAlert(true);
              contextObject.setAlertTitle(
                "Sorry!! Please provide valide inputs"
              );
              contextObject.setAlertMessage(response.message);
              contextObject.setMessageType("alert-danger");
              setShowAlert(true);
            }
          })
          .catch((resp) => {
            let response1 = resp.response.data;
            console.log("Response: ", response1);

            if (response1.flag === false) {
              contextObject.setAlert(true);
              contextObject.setAlertTitle(
                "Sorry!! Please provide valide inputs"
              );
              contextObject.setAlertMessage(response1.message);
              contextObject.setMessageType("alert-danger");
              setShowAlert(true);
            }
          });
      } else if (operation === "update") {
        updateSectionAPI(reqDetails)
          .then((resp) => {
            let response = resp.data;
            console.log("Respose: ", response);

            if (response.flag === true) {
              contextObject.setAlert(true);
              contextObject.setAlertTitle("Details are updated successfuly");
              contextObject.setAlertMessage("");
              contextObject.setMessageType("alert-success");
              setShowAlert(true);
              resetData();
              getAllSections();
            } else {
              contextObject.setAlert(true);
              contextObject.setAlertTitle(
                "Sorry!! Please provide valide inputs"
              );
              contextObject.setAlertMessage(response.message);
              contextObject.setMessageType("alert-danger");
              setShowAlert(true);
            }
          })
          .catch((resp) => {
            let response1 = resp.response.data;
            console.log("Response: ", response1);

            if (response1.flag === false) {
              contextObject.setAlert(true);
              contextObject.setAlertTitle(
                "Sorry!! Please provide valide inputs"
              );
              contextObject.setAlertMessage(response1.message);
              contextObject.setMessageType("alert-danger");
              setShowAlert(true);
            }
          });
      }
    }
  };
  const deleteSection = (id) => {
    deleteSectionByIdAPI(id).then((resp) => {
      setRowData(resp.data);
    });
    getAllSections();
  };
  const getAllSections = () => {
    callAllSectionsAPI().then((resp) => {
      console.log("Sections: ", resp.data);
      // setSections(resp.data);
      // setRowData(resp.data);
    });
  };

  const findElement = (id, operation) => {
    return sections.find((item) => item.sectionID === id);
  };

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "studId",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "studentName",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "standard",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "sectionName",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "examStatus",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "assignedStatus",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },

    {
      field: "button",
      headerName: "Button",
      width: "150px",
      cellRenderer: (params) => {
        console.log("====================================");
        console.log(params.data.studId);
        console.log("====================================");
        return (
          <button
            className="btn btn-alert btn-sm"
            onClick={(e) => {
              nav("/examDetailsByStudentID/" + params.data.studId);
              setStdId(params.data.studId);
            }}
          >
            Get Exam Details
          </button>
        );
      },
      // cellRendererParams: (params) => {
      //   console.log(" (params) =>", params);
      // },
    },
  ]);

  const rowSelection = {
    mode: "singleRow",
    headerCheckbox: false,
    enableClickSelection: true,
  };
  function onCellValueChanged(event) {
    console.log(
      "onCellValueChanged: " + event.colDef.field + " = " + event.newValue
    );
  }

  function onRowValueChanged(event) {
    const data = event.data;
    console.log(
      "onRowValueChanged: (" +
        data.make +
        ", " +
        data.model +
        ", " +
        data.price +
        ", " +
        data.field5 +
        ")"
    );
  }
  function getRowData() {
    const rowData = [];

    return rowData;
  }

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
      editType: "singleRow",
      rowData: getRowData(),
      onCellValueChanged: onCellValueChanged,
      onRowValueChanged: onRowValueChanged,
    };
  }, []);
  const [rowData, setRowData] = useState([]);
  const [selectedRow, setSelectedRow] = useState({});
  const getSelectedRowData = (e) => {
    const selectedData = e.api.getSelectedRows();
    setSelectedRow(selectedData[0]);
    if (selectedData.length != 0) setReqDetails(selectedData[0]);
    else {
      setReqDetails(initialValue);
    }
    if (selectedData.length > 0) {
      setDisableButtons({
        ...disableBts,
        editBtn: false,
        resetBtn: false,
        saveBtn: false,
      });
    } else
      setDisableButtons({
        ...disableBts,
        editBtn: true,
        resetBtn: true,
        saveBtn: true,
      });
  };
  const onSelectionChanged = (event) => {
    const selectedData = event.api.getSelectedRows();
    console.log("Selection updated::", selectedData);
  };
  const [yearList, setYearList] = useState(["2010", "2011"]);
  const [standard, setStandard] = useState([
    "Select",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]);
  let btnGroup = {
    saveBtn: true,
    cancelBtn: true,
    resetBtn: true,
    editBtn: true,
  };

  const [disableBts, setDisableButtons] = useState(btnGroup);
  const nav = useNavigate();
  return (
    <>
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
          <h2>Student wise exam details</h2>
        </div>
        <div className="col"></div>
      </div>

      <div className="row  row-cols-auto">
        <div className="col">
          Standard:
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
        <div className="col">
          Section:
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
        <div className="col" style={{ paddingTop: "29px" }}>
          <button
            // disabled={disableBts.saveBtn}
            className="btn btn-primary btn-sm btn-success"
            onClick={(e) => {
              getAllStudentsByStdSection();
            }}
          >
            Get Students
          </button>
        </div>
      </div>
      <div
        className="row  row-cols-auto"
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
        <div className="col">
          <button
            // disabled={disableBts.saveBtn}
            className="btn btn-primary btn-sm btn-success"
            onClick={(e) => {
              saveOrUpdateData(e, "save");
            }}
          >
            Save
          </button>
        </div>
        <div className="col">
          <button
            disabled={disableBts.cancelBtn}
            className="btn btn-primary btn-sm"
            onClick={(e) => {}}
          >
            Export
          </button>
        </div>

        <div className="col">
          <button
            disabled={disableBts.resetBtn}
            className="btn btn-primary btn-sm btn-danger"
            onClick={(e) => {
              setReqDetails(initialValue);
            }}
          >
            Reset
          </button>
        </div>
        {/* <div className="col">
          <button
            disabled={disableBts.editBtn}
            className="btn btn-primary"
            onClick={(e) => deleteSection(reqDetails.classId)}
          >
            Delete
          </button>
        </div> */}
        <div className="col">
          <button
            disabled={disableBts.editBtn}
            className="btn btn-primary btn-sm btn-warning"
            onClick={(e) => {
              saveOrUpdateData(e, "update");
            }}
          >
            Update
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className={"ag-theme-quartz"} style={{ height: 500 }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowSelection={rowSelection}
              pagination={true}
              paginationPageSize={10}
              paginationPageSizeSelector={[10, 25, 50]}
              onRowSelected={(e) => getSelectedRowData(e)}
              onRowValueChanged={(e) => onSelectionChanged(e)}
            />
          </div>
        </div>
      </div>

      <br></br>

      <ExamDetailsByStudentID id={stdId}></ExamDetailsByStudentID>
    </>
  );
}

export default ExamByStudent;
