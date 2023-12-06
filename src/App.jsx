import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import backgroundImage from "../src/assets/bg.jpg"; // Update the path

function App() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={containerStyle}>
      <Header />
      <Container className="flex-grow-1">
        <Row>
          <Col>
            <HomePage />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
