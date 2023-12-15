import React from "react";
import bg from "../assets/bg.png";
import Header from "../Components/Header";
import AboutLabel from "../Components/AboutLabel";
import { Row, Col } from "react-bootstrap";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import { Email, LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import devp from "../assets/devp.jpg";
import chaitanya from "../assets/chaitanya.png";

const contributors = [
  {
    name: "Dev Patel",
    avatarUrl: devp,
    email: "dev@example.com",
    linkedin: "https://www.linkedin.com/in/dvp00/",
    github: "https://github.com/dvp0",
    instagram: "#",
  },
  {
    name: "Chaitanya C.",
    avatarUrl: chaitanya,
    email: "chaitanyalvis@gmail.com",
    linkedin: "https://www.linkedin.com/in/chai-t",
    github: "https://github.com/Chaitanya-Chaurasia/",
    instagram: "#",
  },
];

const AboutUs = () => {
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
        <Row className="justify-content-center p-3 my-1">
          <Col md={8} className="text-center">
            <Row className="justify-content-center p-3 my-4">
              <Col md={8} className="text-center">
                <AboutLabel />{" "}
              </Col>
            </Row>
          </Col>
        </Row>
        <Grid container spacing={3} justifyContent="center">
          {contributors.map((contributor, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  backgroundColor: "rgba(55,55,55,0.1)",
                  width: "300px",
                }}
              >
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    src={contributor.avatarUrl}
                    alt={contributor.name}
                    sx={{ width: 64, height: 64, marginBottom: 2 }}
                  />
                  <div style={{ textAlign: "center" }}>
                    <Typography variant="h6" component="div">
                      {contributor.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        color: "white",
                        marginBottom: 8,
                        fontFamily: "Raleway, sans-serif",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                    <div>
                      <Link
                        href={`mailto:${contributor.email}`}
                        color="inherit"
                        underline="none"
                      >
                        <IconButton
                          sx={{ color: "white", background: "transparent" }}
                        >
                          <Email />
                        </IconButton>
                      </Link>
                      <Link
                        href={contributor.linkedin}
                        color="inherit"
                        underline="none"
                      >
                        <IconButton
                          sx={{ color: "white", background: "transparent" }}
                        >
                          <LinkedIn />
                        </IconButton>
                      </Link>
                      <Link
                        href={contributor.github}
                        color="inherit"
                        underline="none"
                      >
                        <IconButton
                          sx={{ color: "white", background: "transparent" }}
                        >
                          <GitHub />
                        </IconButton>
                      </Link>
                      <Link
                        href={contributor.instagram}
                        color="inherit"
                        underline="none"
                      >
                        <IconButton
                          sx={{ color: "white", background: "transparent" }}
                        >
                          <Instagram />
                        </IconButton>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
