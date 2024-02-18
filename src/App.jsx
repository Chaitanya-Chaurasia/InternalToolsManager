import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import bg2 from "./assets/bg2.jpg";

function App() {
  const containerStyle = {
    backgroundColor: "#000",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${bg2})`,
    height: "100%",
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
