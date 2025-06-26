import React, { useEffect, useMemo, useState } from "react";
import { deleteSectionByIdAPI } from "../ApiCallsFiltered";
import { AgGridReact } from "ag-grid-react";
import { getExamDetailsByStudentIdAPI } from "../ApiCalls";
import { useParams } from "react-router-dom";

function ExamDetailsByStudentID() {
  useEffect(() => {
    getExamOfStudentById(id);
  }, []);
  let initialValue = {
    standard: "",
    sectionName: "",
  };
  const { id } = useParams();
  const [reqDetails, setReqDetails] = useState(initialValue);
  const [stdId, setStdId] = useState();
  const handleChange = (key, val) => {
    setReqDetails({ ...reqDetails, [key]: val });
  };
  const getExamOfStudentById = (id) => {
    getExamDetailsByStudentIdAPI(id).then((resp) => {
      console.log("====================================");
      console.log("Data:::", resp.data);
      console.log("====================================");
      setRowData(resp.data);
    });
  };
  const [examRowData, setRowData] = useState([]);
  const [examColumnDefs, setExamColumnDefs] = useState([
    {
      field: "examName",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },

    {
      field: "finalyCalculated",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "isMarksAssigned",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "percentage",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "resultStatus",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "status",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },

    {
      field: "subject1Name",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject1ObtainedMarks",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject1totalMarks",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject2Name",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject2ObtainedMarks",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject2totalMarks",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject3Mame",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject3ObtainedMarks",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject3totalMarks",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject4Name",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject4ObtainedMarks",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject4totalMarks",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject5Name",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject5ObtainedMarks",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "subject5totalMarks",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "totalMarks",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "totalObtainedMarks",
      editable: true,
      cellEditor: "agSelectCellEditor",
      resizable: true,
      width: "100px",
    },
    {
      field: "year",
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
        console.log(params.data.classId);
        console.log("====================================");
        return (
          <button
            className="btn btn-alert btn-sm"
            onClick={(e) => deleteSection(params.data.classId)}
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
  const defaultColDefForExam = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
      editType: "singleRow",
      rowData: getRowData(),
      onCellValueChanged: onCellValueChanged,
      onRowValueChanged: onRowValueChanged,
    };
  }, []);
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
  const rowSelectionForExam = {
    mode: "singleRow",
    headerCheckbox: false,
    enableClickSelection: true,
  };
  const deleteSection = (id) => {
    deleteSectionByIdAPI(id).then((resp) => {
      setRowData(resp.data);
    });
    // getAllSections();
  };
  const [selectedRow, setSelectedRow] = useState({});
  const getSelectedRowDataForExam = (e) => {
    const selectedData = e.api.getSelectedRows();
    setSelectedRow(selectedData[0]);
    if (selectedData.length != 0) setReqDetails(selectedData[0]);
    else {
      setReqDetails(initialValue);
    }
  };
  const onSelectionChangedforExam = (event) => {
    const selectedData = event.api.getSelectedRows();
    console.log("Selection updated::", selectedData);
  };

  return (
    <div>
      ID: {id}
      <div className="row">
        <div className="col">
          <div className={"ag-theme-quartz"} style={{ height: 500 }}>
            <AgGridReact
              rowData={examRowData}
              columnDefs={examColumnDefs}
              defaultColDef={defaultColDefForExam}
              rowSelection={rowSelectionForExam}
              pagination={true}
              paginationPageSize={10}
              paginationPageSizeSelector={[10, 25, 50]}
              onRowSelected={(e) => getSelectedRowDataForExam(e)}
              onRowValueChanged={(e) => onSelectionChangedforExam(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamDetailsByStudentID;
