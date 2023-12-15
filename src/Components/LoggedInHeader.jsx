import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Toolbar, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import SearchDatabaseButton from "./SearchDatabaseButton";
import UploadCSVButton from "./UploadCSVButton";
import HomeButton from "./HomeButton";
const LoggedInHeader = () => {
  const { user, isAuthenticated } = useAuth0();

  const navbarStyle = {
    background: "none",
    // Adjust the alpha value for transparency
  };

  return (
    <>
      <AppBar position="static" style={navbarStyle}>
        <Toolbar style={{ justifyContent: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Wrap the buttons with Link components */}
            <Link to="/">
              {" "}
              <HomeButton />{" "}
            </Link>
            <Link to="/view">
              <SearchDatabaseButton />
            </Link>
            <Link to="/uploadCSV">
              <UploadCSVButton />
            </Link>
            {isAuthenticated ? (
              <>
                <LogoutButton />{" "}
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  src={isAuthenticated ? user?.picture && user.picture : <></>}
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
