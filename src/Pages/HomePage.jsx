import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import WelcomeBox from "../Components/WelcomeBox";
import UserInformation from "../Components/UserInformation";
import DatabaseStats from "../Components/DatabaseStats";
import { useAuth0 } from "@auth0/auth0-react";
import { MyContext } from "../Context/Context.js";
import { useContext } from "react";
import CSVUploadModal from "../Components/CSVUploadModal.jsx";
const HomePage = () => {
  const { isLoading, error } = useAuth0();
  const { showModal, setShowModal } = useContext(MyContext);

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
            <Row className="justify-content-center p-2 my-4">
              <Col md={8} className="text-center">
                <WelcomeBox />
              </Col>
            </Row>

            <Row className="justify-content-center p-2 my-4">
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

            <CSVUploadModal open={showModal} onClose={handleCloseModal} />
          </Container>
        </>
      )}
    </>
  );
};

export default HomePage;

{
  /* <Modal show={showModal} onHide={handleCloseModal}>
  <Modal.Header closeButton>
    <Modal.Title>Migrate Data</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Modal content goes here.</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseModal}>
      Close
    </Button>
  </Modal.Footer>
</Modal>; */
}
