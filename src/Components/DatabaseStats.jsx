import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const DatabaseStats = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <p>Database Stats</p>
      ) : (
        <p>Sign In to see Database Stats</p>
      )}
    </>
  );
};

export default DatabaseStats;
