import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../src/Components/Header";
import Footer from "../src/components/Footer";
import HomePage from "../src/Pages/HomePage";
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
