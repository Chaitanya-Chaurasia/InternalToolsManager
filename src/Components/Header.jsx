import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  const navbarStyle = {
    background: "none",
    // Adjust the alpha value for transparency
  };

  return (
    <>
      <AppBar position="static" style={navbarStyle}>
        <Toolbar style={{ justifyContent: "flex-end" }}>
          <div>
            {isAuthenticated ? (
              <>
                {" "}
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  src={isAuthenticated ? user?.picture && user.picture : <></>}
                />{" "}
                <LogoutButton />{" "}
              </>
            ) : (
              <LoginButton />
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
