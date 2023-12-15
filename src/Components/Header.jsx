import React from "react";
import LoginButton from "./LoginButton";
import AboutUsButton from "./AboutUsButton";
import CookieDeclined from "./CookieDeclined";
import AddToolsButton from "./AddToolsButton";
import HomeButton from "./HomeButton";
import { AppBar, Toolbar, Avatar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/Context";
import { useContext } from "react";

const Header = () => {
  const { response } = useContext(MyContext);

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
            {response === "accepted" ? <LoginButton /> : <></>}
            {response === "declined" ? <CookieDeclined /> : <></>}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
