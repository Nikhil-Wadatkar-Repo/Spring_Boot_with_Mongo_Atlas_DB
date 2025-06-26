import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";

function EmailSender() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  let initialValue = {
    cc: "",
    to: "",
    subject: "",
    description: "",
  };
  const [reqDetails, setReqDetails] = useState(initialValue);
  const handleChange = (key, val) => {
    setReqDetails({ ...reqDetails, [key]: val });
  };
  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("to", reqDetails.to);
    formData.append("cc", reqDetails.cc);
    formData.append("subject", reqDetails.subject);
    formData.append("description", reqDetails.description);

    try {
      const response = await axios.post(
        "http://localhost:9092/send-email",
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data);
    } catch (error) {
      console.error("Upload error", error);
      setMessage("Upload failed.");
    }
  };
  return (
    <div>
      <div>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "50ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Email To :"
            variant="outlined"
            size="small"
            value={reqDetails.to}
            onChange={(e) => handleChange("to", e.target.value)}
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Email Subject :"
            variant="outlined"
            value={reqDetails.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email Cc :"
            variant="outlined"
            size="small"
            value={reqDetails.cc}
            onChange={(e) => handleChange("cc", e.target.value)}
          />

          <div className="p-4 max-w-md mx-auto">
            <input type="file" onChange={handleFileChange} className="mb-2" />
            {message && <p className="mt-2">{message}</p>}
          </div>
        </Box>
      </div>
      <div>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "50ch" } }}
          noValidate
          autoComplete="off"
        ></Box>
      </div>
      <div>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "100ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              size="small"
              fullWidth
              id="outlined-multiline-flexible"
              label="Description"
              value={reqDetails.description}
              multiline
              maxRows={8}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>
        </Box>
        <div>
          <Stack spacing={2} direction="row">
            <Button variant="text" onClick={handleUpload}>
              Send Email
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setReqDetails(initialValue);
                setFile(null);
                setMessage("");
              }}
            >
              Resest
            </Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default EmailSender;
