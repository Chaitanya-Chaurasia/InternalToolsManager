import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const buttonStyle = {
    border: "2px solid white", // Set the button border to black
  };
  return (
    !isAuthenticated && (
      <button
        className="btn btn-outline-light"
        style={buttonStyle}
        type="submit"
        onClick={() => loginWithRedirect()}
      >
        Sign In
      </button>
    )
  );
};

export default LoginButton;
