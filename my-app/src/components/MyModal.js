import { Box, Modal } from "@mui/material";
import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function MyModal() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000 ",
    borderRadius: "15px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const contextObject = useContext(MyContext);
  return (
    <div>
      <div>
        <Modal
          open={contextObject.open}
          onClose={contextObject.handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">{contextObject.modalTitle}</h2>
            <p id="parent-modal-description">{contextObject.modalDesc}</p>
            <button onClick={(e) => contextObject.setOpen(false)}>Close</button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default MyModal;
