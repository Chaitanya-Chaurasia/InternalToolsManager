import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WelcomeBox from "../Components/WelcomeBox"; // Replace with the actual path to your WelcomeBox component
import UserInformation from "../Components/UserInformation"; // Replace with the actual path to your UserInformation component
import "../Styles/HomePage.css";
import DatabaseStats from "../Components/DatabaseStats";

const HomePage = () => {
  return (
    <Container className="mt-5">
      {/* Welcome Box */}
      <Row className="justify-content-center p-3 my-4">
        <Col md={8} className="text-center">
          <WelcomeBox />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <div className="bg-light p-3 text-center bg-transparent">
            <h4>Profile</h4>
            <UserInformation />
          </div>
        </Col>

        <Col md={6}>
          <div className="bg-light p-3 text-center bg-transparent">
            <h4>Database Stats</h4>
            <DatabaseStats />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
