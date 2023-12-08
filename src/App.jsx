import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import backgroundImage from "../src/assets/bg.jpg"; // Update the path
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
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
          <Col>{!isAuthenticated ? <LandingPage /> : <HomePage />}</Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
