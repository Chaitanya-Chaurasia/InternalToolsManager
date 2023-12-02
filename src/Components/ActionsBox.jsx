import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const ActionsBox = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <>
          <Button variant="primary" className="mx-2">
            Add to Database
          </Button>
          <Button variant="secondary" className="mx-2">
            Edit
          </Button>
          <Button variant="danger" className="mx-2">
            Delete
          </Button>
        </>
      ) : (
        <p>Sign In for functionality!</p>
      )}
    </>
  );
};

export default ActionsBox;
