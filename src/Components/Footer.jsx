import React from "react";
import { Paper, Typography } from "@mui/material";

const Footer = () => {
  const paperStyle = {
    background: "#fff",
    color: "#000",
    fontSize: "10px",
    borderRadius: "50px", // Adjust the border radius as needed
    width: "450px",
    height: "26px", // Set a fixed height for vertical centering
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px auto", // Center the footer horizontally
    border: "2px solid #fff", // Optional padding for better appearance
  };

  return (
    <Paper elevation={5} style={paperStyle}>
      <Typography variant="body6">
        &copy; 2023 Your Company. All rights reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
