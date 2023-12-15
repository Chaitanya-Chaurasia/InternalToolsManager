import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import "../Styles/Button.css"; // Import the CSS file

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Button className="hover-underline-animation" onClick={() => logout()}>
        <div>Sign Out</div>
      </Button>
    )
  );
};

export default LogoutButton;
