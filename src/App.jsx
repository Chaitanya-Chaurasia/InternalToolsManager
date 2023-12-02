import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
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
