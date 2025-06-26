import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import CustomButtonComponent from "./CustomButtonComponent";
import { Button } from "@mui/material";
import { MyContext } from "./MyContext";
import { getDistinctClasses, studentsByStdSectionAPI } from "../ApiCalls";
import { getSectionByStandardAPI } from "../ApiCallsFiltered";

function StudentStatistics() {
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "studId",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
    },
    {
      field: "studentName",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
    },
    {
      field: "sectionName",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
    },
    {
      field: "examStatus",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
    },
    {
      field: "assignedStatus",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
    },

    {
      field: "button",
      headerName: "Button",
      cellRenderer: (params) => <CustomButtonComponent info={params} />,
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
  function onCellValueChanged(event) {
    console.log(
      "onCellValueChanged: " + event.colDef.field + " = " + event.newValue
    );
  }
  function getRowData() {
    const rowData = [];
    return rowData;
  }
  const rowSelection = {
    mode: "multiRow",
    headerCheckbox: true,
    enableClickSelection: true,
  };
  const getSelectedRowData = (e) => {
    const selectedData = e.api.getSelectedRows();
    console.log("data:  ", e.data);
    console.log("selectedData:  ", selectedData);
    // setSelectedRow(selectedData[0]);
  };
  const [selectedRow, setSelectedRow] = useState({});
  const onSelectionChanged = (event) => {
    const selectedData = event.api.getSelectedRows();
    console.log("Selection updated::", selectedData);
  };
  const getSelectedRows = (e) => {
    console.log("====================================");
    console.log(e.api.getFilterModel());
    console.log("====================================");
  };

  const contextObject = useContext(MyContext);
  let initialValue = {
    section: 0,
    year: 0,
    classTeacherName: "",
    noOfStudents: 0,
    standards: 0,
  };

  const [reqDetails, setReqDetails] = useState(initialValue);
  const handleChange = (key, val) => {
    setReqDetails({ ...reqDetails, [key]: val });
  };
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
  const getStudentByStdSection = () => {
    console.log("====================================");
    console.log(reqDetails.std, " ", reqDetails.section);
    console.log("====================================");
    studentsByStdSectionAPI(reqDetails.std, reqDetails.section).then((resp) => {
      setRowData(resp.data);
    });
  };
  useEffect(() => {
    getClassList();
  }, []);
  return (
    <div>
      <h5>Statistics</h5>
      <div className="accordion" id="accordionExampleID">
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading1">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-expanded="true"
              aria-controls="collapse1"
            >
              class, section wise students
            </button>
          </h2>
          <div
            id="collapse1"
            className="accordion-collapse collapse"
            aria-labelledby="heading1"
            data-bs-parent="#accordionExampleID"
          >
            <div className="accordion-body">
              <div className="row row-cols-auto">
                <div className="col">
                  <label>Standards</label>
                  <select
                    value={reqDetails.std}
                    id="inputState"
                    className="form-select"
                    onChange={(e) => {
                      handleChange("std", e.target.value);
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
                  <label>Section</label>
                  <select
                    value={reqDetails.section}
                    id="inputState"
                    className="form-select"
                    onChange={(e) => handleChange("section", e.target.value)}
                  >
                    <option selected>Choose...</option>
                    {sectionList.map((item, index) => (
                      <option key={index} value={item.sectionName}>
                        {item.sectionName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <button
                    className="btn "
                    onClick={(e) => getStudentByStdSection()}
                  >
                    Get Details
                  </button>
                </div>
              </div>
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
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading2">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="false"
              aria-controls="collapse2"
            >
              Attendance Tracker
            </button>
          </h2>
          <div
            id="collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="heading2"
            data-bs-parent="#accordionExampleID"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentStatistics;
