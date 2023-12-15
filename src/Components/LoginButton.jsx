// LoginButton.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import "../Styles/Button.css"; // Import the CSS file

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button
        className="hover-underline-animation"
        onClick={() => loginWithRedirect()}
      >
        <div>Sign In</div>
      </Button>
    )
  );
};

export default LoginButton;
