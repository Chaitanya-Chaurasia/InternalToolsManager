import React from "react";
import { Spinner } from "react-bootstrap";

const CenteredSpinner = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Spinner animation="border" role="status" />
    </div>
  );
};

export default CenteredSpinner;
