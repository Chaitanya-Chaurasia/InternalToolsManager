import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import bg from "./assets/bg.png";
import { useState } from "react";

function App() {
  const containerStyle = {
    backgroundColor: "#000",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${bg})`,
    height: "100vh",
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={containerStyle}>
      <Header />{" "}
      <Container className="flex-grow-1">
        <LandingPage />
      </Container>
    </div>
  );
}

export default App;
