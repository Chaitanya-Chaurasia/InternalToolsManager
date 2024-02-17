import React from "react";
import { Button } from "@mui/material";

const AboutUsButton = () => {
  return (
    <div>
      <Button
        className="hover-underline-animation"
        sx={{
          textTransform: "none",
          borderRadius: "10px",
        }}
      >
        <div>About Us</div>
      </Button>
    </div>
  );
};

export default AboutUsButton;
