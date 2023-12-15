import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import { useAuth0 } from "@auth0/auth0-react";

import bg from "./assets/bg.jpg";
import LoggedInHeader from "./Components/LoggedInHeader";

function App() {
  const { isAuthenticated } = useAuth0();
  const containerStyle = {
    backgroundColor: "#000",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${bg})`,
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={containerStyle}>
      {!isAuthenticated ? (
        <>
          {" "}
          <Header />{" "}
          <Container className="flex-grow-1">
            <Row>
              <Col>
                <LandingPage />
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <LoggedInHeader />
          <Container className="flex-grow-1">
            <Row>
              <Col>
                {" "}
                <HomePage />
              </Col>
            </Row>
          </Container>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
