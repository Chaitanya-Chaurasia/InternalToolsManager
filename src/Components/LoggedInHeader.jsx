import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Toolbar, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import SearchDatabaseButton from "./SearchDatabaseButton";
import HomeButton from "./HomeButton";
import logo from "../assets/logo.png";

const LoggedInHeader = () => {
  const { user, isAuthenticated } = useAuth0();

  const navbarStyle = {
    background: "none",
    // Adjust the alpha value for transparency
  };

  return (
    <>
      <AppBar position="static" style={navbarStyle}>
        <Toolbar>
          {/* Logo (Avatar) on the left */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "auto",
            }}
          >
            <Avatar
              src={logo}
              alt="Logo"
              sx={{ width: 60, height: 60, marginRight: 2 }}
            />
          </div>

          {/* Buttons on the right */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Wrap the buttons with Link components */}
            <Link to="/">
              {" "}
              <HomeButton />{" "}
            </Link>
            <Link to="/view">
              <SearchDatabaseButton />
            </Link>
            {isAuthenticated ? (
              <>
                <LogoutButton />{" "}
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  src={isAuthenticated ? user && user.picture : <></>}
                />{" "}
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

export default LoggedInHeader;
