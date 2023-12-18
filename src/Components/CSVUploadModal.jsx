import React, { useContext } from "react";
import {
  Modal,
  Typography,
  Button,
  Input,
  CircularProgress,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { MyContext } from "../Context/Context";

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const paperStyle = {
  backgroundColor: "rgba(55, 55, 55, 1)",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  padding: "24px",
  width: "400px",
  fontFamily: "'Raleway', sans-serif",
};

const inputFileStyle = {
  display: "none",
};

const buttonContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "16px", // Adjust the spacing between the Input and Buttons
};

const buttonStyle = {
  width: "100%", // Make the button take full width
  marginTop: "8px", // Add some spacing between buttons
};

const spinnerStyle = {
  marginLeft: "8px",
};

const UploadCSVModal = ({ open, onClose }) => {
  const { selectedFile, setSelectedFile, loading, setLoading } =
    useContext(MyContext);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Check if a file is selected and if it has a .csv extension
    if (file && file.name.endsWith(".csv")) {
      setSelectedFile(file);
    } else {
      // Reset selected file if it's not a .csv file
      setSelectedFile(null);
    }
  };

  const handleAccept = () => {
    // Perform upload and processing logic here
    setLoading(true);

    // Dummy function for processing the CSV file
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 2000);
  };

  return (
    <Modal open={open} onClose={onClose} style={modalStyle}>
      <div style={paperStyle}>
        <Typography variant="h6" component="div" gutterBottom>
          Migrate Data
        </Typography>

        <Input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={inputFileStyle}
          id="csv-file-input"
        />
        <label htmlFor="csv-file-input">
          <Button
            component="span"
            variant="contained"
            color="primary"
            disabled={loading}
            startIcon={<CloudUploadIcon />}
            style={buttonStyle}
          >
            Upload CSV
          </Button>
        </label>

        <div style={buttonContainerStyle}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAccept}
            disabled={!selectedFile || loading}
            style={buttonStyle}
          >
            Accept
            {loading && <CircularProgress size={20} style={spinnerStyle} />}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UploadCSVModal;
