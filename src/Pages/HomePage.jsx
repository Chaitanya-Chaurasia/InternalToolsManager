import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WelcomeBox from "../Components/WelcomeBox"; // Replace with the actual path to your WelcomeBox component
import UserInformation from "../Components/UserInformation"; // Replace with the actual path to your UserInformation component
import "../Styles/HomePage.css";
import DatabaseStats from "../Components/DatabaseStats";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { isLoading, error } = useAuth0();

  return (
    <>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && (
        <p>
          <CenteredSpinner />
        </p>
      )}
      {!error && !isLoading && (
        <>
          <Container className="mt-6">
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
        </>
      )}
    </>
  );
};

export default HomePage;
