import React from "react";
import { Button, Container, Typography, styled } from "@mui/material";

const RootContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const FloatingText = styled(Typography)({
  position: "absolute",
  top: "20%",
  fontSize: "2rem",
  fontWeight: "bold",
});

const SignInButton = styled(Button)({
  marginTop: (theme) => theme.spacing(4),
  padding: (theme) => theme.spacing(2),
  fontSize: "1.2rem",
});

const LandingPage = () => {
  return (
    <RootContainer>
      <FloatingText variant="h2">Internal Tool Manager</FloatingText>
      <SignInButton variant="contained" color="primary">
        Sign In
      </SignInButton>
    </RootContainer>
  );
};

export default LandingPage;
