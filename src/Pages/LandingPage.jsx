import React from "react";
import { Container, Typography, styled, Avatar, Paper } from "@mui/material";
import "../Styles/LandingPage.css";
import fetch from "../assets/fetch.png";
import aws from "../assets/aws.png";
import python from "../assets/python.png";
import tog from "../assets/tog.png";
import react from "../assets/react.png";

const RootContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const imageStyle = {
  height: 60, // Set the height of the images
  margin: 10, // Add margin around the images for spacing
  borderRadius: 15, // Add border radius around the images
  padding: 10,
};

const LandingPage = () => {
  return (
    <RootContainer>
      <section className="banner">
        <h6
          className="fade-in"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
          }}
        >
          Presenting
        </h6>
        <h1 className="fade-in">incognito</h1>
        <h4
          className="fade-in"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            marginTop: 10,
          }}
        >
          Privacy Enhanced!
        </h4>
      </section>
      <div style={{ display: "Flex", marginTop: 40, flexDirection: "column" }}>
        <div>
          <div
            style={{
              width: "inherit",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              padding: 10,
              borderRadius: "15px",
              marginTop: 50,
            }}
            className="fade-in"
          >
            {" "}
            <div>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "Raleway, sans-serif",
                  textAlign: "center",
                }}
              >
                The Technology is already here
              </Typography>
            </div>
            <div>
              {" "}
              <Typography
                sx={{ fontSize: "15px", fontFamily: "Raleway, sans-serif" }}
              >
                Powered by the latest AI tech, our aim is to raise awareness
                about how to preserve your privacy. Try out our demo to get a
                hands-on.
              </Typography>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 15,
            marginTop: 50,
            background: "rgba(255, 255, 255, 0.1)",
          }}
          className="fade-in"
        >
          <img src={fetch} alt="Fetch" style={imageStyle} />
          <img src={aws} alt="AWS" style={imageStyle} />
          <img src={python} alt="Python" style={imageStyle} />
          <img src={tog} alt="Tog" style={imageStyle} />
          <img src={react} alt="React" style={imageStyle} />
        </div>
      </div>
    </RootContainer>
  );
};

export default LandingPage;
