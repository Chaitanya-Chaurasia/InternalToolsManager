import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const buttonStyle = {
    border: "2px solid while", // Set the button border to black
  };
  return (
    isAuthenticated && (
      <button
        className="btn btn-outline-light"
        style={buttonStyle}
        type="submit"
        onClick={() => logout()}
      >
        Sign Out
      </button>
    )
  );
};

export default LogoutButton;
