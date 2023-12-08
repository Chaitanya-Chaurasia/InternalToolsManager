import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  const navbarStyle = {
    background: "white", // Adjust the alpha value for transparency
  };

  const buttonStyle = {
    border: "2px solid black", // Set the button border to black
  };

  return (
    <>
      <AppBar position="static" style={navbarStyle}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "120px", height: "30px" }}
            />
          </Typography>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}

            <Avatar
              sx={{ width: 32, height: 32 }}
              src={isAuthenticated ? user?.picture && user.picture : <></>}
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
