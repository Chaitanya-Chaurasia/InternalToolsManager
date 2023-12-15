import React from "react";
import Header from "../Components/Header";
import bg from "../assets/bg.png";

import { Container, Typography, Grid, CircularProgress } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";

const HowToPage = () => {
  const containerStyle = {
    backgroundColor: "#000",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${bg})`,
    height: "100vh",
  };

  return (
    <div style={containerStyle}>
      <Header />
      <Container>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          style={{ height: "70vh" }}
        >
          <Grid item xs={12} textAlign="center">
            <BuildIcon style={{ fontSize: 60, color: "white" }} />
            <Typography variant="h5" style={{ color: "white", marginTop: 16 }}>
              This page is under development.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HowToPage;
