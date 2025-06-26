const [examRowData, setRowData] = useState([]);
const [examColumnDefs, setExamColumnDefs] = useState([
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

const rowSelectionForExam = {
  mode: "singleRow",
  headerCheckbox: false,
  enableClickSelection: true,
};
const getSelectedRowDataForExam = (e) => {
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
const onSelectionChangedforExam = (event) => {
  const selectedData = event.api.getSelectedRows();
  console.log("Selection updated::", selectedData);
};

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
/>;
