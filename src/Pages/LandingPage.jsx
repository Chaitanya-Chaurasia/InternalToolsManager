import React from "react";
import { Container, Typography, styled, Avatar } from "@mui/material";
import "../Styles/LandingPage.css";
import logo from "../assets/logo.png";

const RootContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
});

const FloatingText = styled(Typography)({});

const LandingPage = () => {
  return (
    <RootContainer>
      <FloatingText variant="h2">
        <section className="banner">
          <h1 className="fade-in">Internal Tools Manager</h1>
        </section>
        <Avatar
          src={logo}
          sx={{ width: 200, height: 200 }}
          className="fade-in"
        />
      </FloatingText>
    </RootContainer>
  );
};

export default LandingPage;
