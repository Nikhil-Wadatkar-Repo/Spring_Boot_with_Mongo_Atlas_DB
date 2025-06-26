import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  callAllClasses,
  callAllSections,
  callAllTeachers,
  saveClassAPI,
} from "../ApiCalls";
import { MyContext } from "./MyContext";
import { useParams } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import CustomButtonComponent from "./CustomButtonComponent";
import { numberValidator } from "../util/Validator";
import { callAllSectionsAPI } from "../ApiCallsFiltered";
import { callCreateClassAPI, getAllClassAPI } from "../ApiCalls2";

function CreateClass() {
  const contextObject = useContext(MyContext);
  let initialValue = {
    sectionName: "",
    year: 0,
    className: "",
    intake: 0,
    std: 0,
  };
  const [reqDetails, setReqDetails] = useState(initialValue);
  const handleChange = (key, val) => {
    setReqDetails({ ...reqDetails, [key]: val });
  };
  const [userTypeList, setUserTypeList] = useState([]);
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
  const [yearList, setYearList] = useState(["2010", "2011"]);
  const [teacherList, setTeacherList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  let { classId } = useParams();

  // const getAllTeachers = () => {
  //   callAllTeachers().then((resp) => {
  //     setTeacherList(resp.data);
  //   });
  // };
  // const getAllSections = () => {
  //   callAllSectionsAPI().then((resp) => {
  //     let data = resp.data;
  //     data.unshift({
  //       sectionID: 0,
  //       sectionName: "hh",
  //       year: 0,
  //       status: "Active",
  //       sectionUNID: "",
  //       classTeacherName: "",
  //     });

  //     setUserTypeList(data);
  //   });
  // };
  const validateRequest = (reqDetails) => {
    let errorDetails = {
      error: false,
      message: "",
    };
    let message = "";
    if (
      reqDetails.sectionName === "" ||
      !numberValidator(reqDetails.sectionName) ||
      reqDetails.sectionName === "0" ||
      reqDetails.sectionName === 0
    )
      message = message === "" ? " Section " : message + ", Section";

    if (
      !numberValidator(reqDetails.year) ||
      reqDetails.year === "" ||
      reqDetails.year === "0" ||
      reqDetails.year === 0
    )
      message = message === "" ? " Year " : message + ", Year";
    if (
      !numberValidator(reqDetails.noOfStudents) ||
      reqDetails.noOfStudents === 0 ||
      reqDetails.noOfStudents === "0"
    )
      message =
        message === "" ? "  No Of Students " : message + ",  No Of Students";
    if (
      !numberValidator(reqDetails.standards) ||
      reqDetails.standards === 0 ||
      reqDetails.standards === "0"
    )
      message = message === "" ? "  standards " : message + ", standards";

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

  const saveDetails = () => {
    let isValid = validateRequest(reqDetails);
    if (isValid.error === false) {
      contextObject.setAlert(true);
      contextObject.setAlertTitle(
        "Sorry!! Please provide valid inputs for below feilds mentioned"
      );
      contextObject.setAlertMessage(isValid.message);
      contextObject.setMessageType("alert-danger");
      setShowAlert(true);
    } else {
      callCreateClassAPI(reqDetails)
        .then((resp) => {
          contextObject.setAlert(true);
          contextObject.setAlertTitle("Details are saved successfuly");
          contextObject.setAlertMessage("");
          contextObject.setMessageType("alert-success");
          setShowAlert(true);
          resetData();
          // nav("/classList", { id: 120 });
          getAllClassDetails();
        })
        .catch((resp) => {
          contextObject.setAlert(true);
          contextObject.setAlertTitle("Sorry!! Please provide valid inputs");
          contextObject.setAlertMessage("");
          contextObject.setMessageType("alert-danger");
          setShowAlert(true);
        });
    }
  };

  const resetData = () => {
    setReqDetails(initialValue);
    setShowAlert(false);
  };

  useEffect(() => {
    getAllClassDetails();
    console.log("Params:  ", classId);
  }, []);
  const [showModal, setshowModal] = useState(false);
  const [rowData, setRowData] = useState([]);
  const rowSelection = {
    mode: "multiRow",
    headerCheckbox: true,
    enableClickSelection: true,
  };
  function onCellValueChanged(event) {
    console.log(
      "onCellValueChanged: " + event.colDef.field + " = " + event.newValue
    );
  }
  const getAllClassDetails = () => {
    getAllClassAPI().then((resp) => {
      setRowData(resp.data);
    });
  };
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
  const [selectedRow, setSelectedRow] = useState({});
  const getSelectedRowData = (e) => {
    const selectedData = e.api.getSelectedRows();
    console.log("data:  ", e.data);
    if (selectedData.length != 0) setReqDetails(selectedData[0]);
    else setReqDetails(initialValue);
    console.log("selectedData:  ", selectedData);
    setSelectedRow(selectedData[0]);
  };
  const onSelectionChanged = (event) => {
    const selectedData = event.api.getSelectedRows();
    console.log("Selection updated::", selectedData);
  };

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "sectionId",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      headerName: "Section ID",
      width: 100,
    },
    {
      field: "year",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      headerName: "YEAR",
      width: 100,
    },
    {
      field: "intake",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      headerName: "Intake",
      width: 100,
    },
    {
      field: "std",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      headerName: "Standard",
      width: 100,
    },
    {
      field: "className",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      headerName: "Class",
      width: 100,
    },
    {
      field: "sectionName",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      headerName: "Section",
      width: 100,
    },
    {
      field: "sectionStatus",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      headerName: "Section Status",
      width: 100,
    },

    {
      field: "button",
      headerName: "Button",
      cellRenderer: (params) => (
        <div>
          deleteClass(props.info.data.sectionId);</div>
      ),
    },
  ]);
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
  // modal states
  const [modalTitle, setModalTitle] = useState("");
  const [modalDesc, setModalDesc] = useState("");
  const getSelectedRows = (e) => {
    console.log("====================================");
    console.log(e.api.getFilterModel());
    console.log("====================================");
  };
  //export functionality
  //disable button functionality
  const [btnArray, setBtnArray] = useState({
    field1: false,
    field2: false,
    field3: false,
    field4: false,
    field5: false,
    field6: false,
  });
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {modalTitle}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{modalDesc}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                // onClick={(e) => resetData()}
              >
                Close
              </button>
              <button
                type="button"
                onClick={(e) => saveDetails()}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row ">
        <h5>Create Class</h5>
        <div className="col"></div>
        <div className="col">
          {showAlert ? (
            <>
              {/* <AlertMessage></AlertMessage> */}
              {/* <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error Alert with a scary title.
              </Alert> */}
              <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col">
          <label>Students Count</label>
          <input
            type="text"
            className="form-control"
            value={reqDetails.intake}
            onChange={(e) => {
              if (
                e.target.value <= 0 ||
                e.target.value === "0" ||
                e.target.value === ""
              )
                setBtnArray({ ...btnArray, field1: false });
              else {
                handleChange("intake", e.target.value);
                setBtnArray({ ...btnArray, field1: true });
              }
            }}
          ></input>
        </div>
        <div className="col">
          <label>Standards</label>
          <select
            id="inputState"
            className="form-select"
            onChange={(e) => {
              if (
                e.target.value === "0" ||
                e.target.value === 0 ||
                e.target.value === "Choose..."
              )
                setBtnArray({ ...btnArray, field2: false });
              else {
                handleChange("std", e.target.value);
                setBtnArray({ ...btnArray, field2: true });
              }
            }}
            value={reqDetails.std}
          >
            <option key={1} defaultValue={"choose"}>
              Choose...
            </option>
            {standard.map((item, index) => (
              <option key={index + 1} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <label>Section</label>
          <input
            type="text"
            className="form-control"
            value={reqDetails.sectionName}
            onChange={(e) => {
              handleChange("sectionName", e.target.value);
            }}
          ></input>
        </div>
        <div className="col">
          <label>Year</label>
          <select
            id="inputState"
            className="form-select"
            onChange={(e) => {
              if (
                e.target.value === "0" ||
                e.target.value === "" ||
                e.target.value === "Choose..." ||
                e.target.value === 0
              )
                setBtnArray({ ...btnArray, field4: false });
              else {
                setBtnArray({ ...btnArray, field4: true });
                handleChange("year", e.target.value);
              }
            }}
            value={reqDetails.year}
          >
            <option key={1} value={"Choose..."} selected>
              Choose...
            </option>
            {yearList.map((item, index) => (
              <option key={index + 1} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <label>Class Name</label>
          <input
            type="text"
            className="form-control"
            value={reqDetails.className}
            onChange={(e) => {
              handleChange("className", e.target.value);
            }}
          ></input>
        </div>
        <div className="col"></div>
      </div>
      <div style={{ marginTop: "8px" }}></div>
      <div className="row row-cols-auto">
        <div className="col">
          <button className="btn btn-outline-primary">Cancel</button>
        </div>
        <div className="col">
          <button className="btn btn-outline-dark" onClick={(e) => resetData()}>
            Reset
          </button>
        </div>
        <div className="col">
          <button className="btn btn-outline-warning">Export</button>
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={(e) => {
              setModalDesc("Would you like to save the class details?");
              setModalTitle("Saving Class Details");
              setshowModal(true);
            }}
          >
            Save
          </button>
        </div>
      </div>
      <div style={{ backgroundColor: "green", marginTop: "8px" }}></div>

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
              selectAllFiltered={(e) => getSelectedRows(e)}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "8px" }}></div>
    </div>
  );
}
export default CreateClass;
