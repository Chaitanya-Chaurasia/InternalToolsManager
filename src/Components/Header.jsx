import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import AboutUsButton from "./AboutUsButton";
import AddToolsButton from "./AddToolsButton";
import HomeButton from "./HomeButton";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Toolbar, Avatar, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  const navbarStyle = {
    background: "none",
    // Adjust the alpha value for transparency
  };

  return (
    <>
      <AppBar position="static" style={navbarStyle}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link to="/">
                <HomeButton />
              </Link>

              <Link to="/howto">
                <AddToolsButton />
              </Link>
              <Link to="/about">
                <AboutUsButton />
              </Link>
            </Box>
          </Box>
          <Box>
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
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
