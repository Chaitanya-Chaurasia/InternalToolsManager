import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const buttonStyle = {
    border: "2px solid white", // Set the button border to black
  };
  return (
    !isAuthenticated && (
      <Button
        variant="contained"
        color="success"
        onClick={() => loginWithRedirect()}
      >
        Sign In
      </Button>
    )
  );
};

export default LoginButton;
