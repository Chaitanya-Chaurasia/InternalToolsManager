import React from "react";
import { Container } from "@mui/material";
import Header from "../Components/Header";
import bg from "../assets/bg.png";
import FancySearchBar from "../Components/FancySearchBar.jsx";
import TakePicture from "../Components/TakePicture.jsx";
const containerStyle = {
  backgroundColor: "#000",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${bg})`,
};
const DemoPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100" style={containerStyle}>
      <Header />{" "}
      <Container
        sx={{
          marginTop: "5%",
          height: "100%",
          background: "none",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Try our product by simply uploading or taking a picture!</h2>
      </Container>
      <Container className="flex-grow-1">
        <TakePicture />
      </Container>
    </div>
  );
};

export default DemoPage;
