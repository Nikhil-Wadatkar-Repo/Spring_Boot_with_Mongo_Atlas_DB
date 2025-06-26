import { Button } from "@mui/material";
import React from "react";
import { deleteClassAPI } from "../ApiCalls2";

function CustomButtonComponent(props) {
  const deleteClass = (id) => {
    deleteClassAPI(id);
  };
  return (
    <div>
      <Button
        size="small"
        variant="outlined"
        onClick={(e) => {
          console.log("====================================");
          console.log("ID: ", props.info.data.sectionId);

          deleteClass(props.info.data.sectionId);
          console.log("====================================");
        }}
      >
        Delete
      </Button>
    </div>
  );
}

export default CustomButtonComponent;
