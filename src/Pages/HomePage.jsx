import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserInformation from "../Components/UserInformation";
import DatabaseStats from "../Components/DatabaseStats";
import { useAuth0 } from "@auth0/auth0-react";
import ActionsBox from "../Components/ActionsBox";
import CenteredSpinner from "../Components/Spinner";

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
          <Container className="mt-5">
            <Row className="justify-content-center">
              {/* User Information */}
              <Col md={4} className="mb-4">
                <div className="bg-light p-3 text-center bg-transparent">
                  <h3>User Information</h3>
                  <UserInformation />
                </div>
              </Col>

              {/* Stats from Database */}
              <Col md={4} className="mb-4">
                <div className="bg-light p-3 text-center bg-transparent">
                  <h3>Stats from Database</h3>
                  <DatabaseStats />
                </div>
              </Col>

              {/* Box with Buttons */}
              <Col md={4} className="mb-4">
                <div className="bg-light p-3 text-center bg-transparent">
                  <h3>Actions</h3>
                  <ActionsBox />
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
