import React from "react";
import "../Styles/Button.css";
import { Button } from "@mui/material";

const HomeButton = () => {
  return (
    <div>
      <Button
        className="hover-underline-animation"
        sx={{
          textTransform: "none",
          borderRadius: "10px",
        }}
      >
        <div>Home</div>
      </Button>
    </div>
  );
};

export default HomeButton;
