import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { callSectionAPI } from "../ApiCalls";
import { useNavigate, useParams } from "react-router-dom";
import { callAllSections, updateDeleteSectionByIdAPI } from "./ApiCalls";
import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
// import "ag-grid-community/styles/ag-theme-quartz.css";
function SectionList({ sections, UpdateStateArray, setType }) {
  useEffect(() => {
    getAllSections();
  }, []);
  const getAllSections = () => {
    callAllSections().then((resp) => {
      console.log("Sections: ", resp.data);
      setRowData(resp.data);
    });
  };
  const [columnDefs, setColumnDefs] = useState([
    { field: "sectionID", editable: true, cellEditor: "agSelectCellEditor" },
    { field: "sectionName", editable: true, cellEditor: "agSelectCellEditor" },
    { field: "year", editable: true, cellEditor: "agSelectCellEditor" },
    { field: "status", editable: true, cellEditor: "agSelectCellEditor" },
    { field: "sectionUNID", editable: true, cellEditor: "agSelectCellEditor" },
    {
      field: "classTeacherName",
      editable: true,
      cellEditor: "agSelectCellEditor",
      valueSetter: (params) => {
        console.log("Value setters::", params.data);

        if (
          params.data.classTeacherName === "null" ||
          params.data.classTeacherName === null
        )
          return "NA";
      },
      valueGetter: (params) => {
        console.log("Value getters::", params.data);

        if (
          params.data.classTeacherName === "null" ||
          params.data.classTeacherName === null
        )
          return "NA";
      },
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
    console.log("data:  ", e.data);
    console.log("selectedData:  ", selectedData);
    setSelectedRow(selectedData[0]);
  };
  const onSelectionChanged = (event) => {
    const selectedData = event.api.getSelectedRows();
    console.log("Selection updated::", selectedData);
  };
  return (
    <>
      <h1>Section Wise Students</h1>

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
    </>
  );
}

export default SectionList;
