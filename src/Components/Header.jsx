import React from "react";
import AboutUsButton from "./AboutUsButton";
import HomeButton from "./HomeButton";
import { AppBar, Toolbar, Avatar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import DemoButton from "../Components/DemoButton";

const Header = () => {
  const navbarStyle = {
    background: "none",
    boxShadow: "none",

    // Adjust the alpha value for transparencys
  };

  return (
    <>
      <AppBar position="sticky" style={navbarStyle}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, boxShadow: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link to="/">
                <HomeButton />
              </Link>

              <Link to="/about">
                <AboutUsButton />
              </Link>

              <Link to="/demo">
                <DemoButton />
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
