import React from "react";
import { Container, Typography, styled } from "@mui/material";
import "../Styles/LandingPage.css";

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
      </FloatingText>
    </RootContainer>
  );
};

export default LandingPage;
