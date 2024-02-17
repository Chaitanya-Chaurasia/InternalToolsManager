import React from "react";
import { Button } from "@mui/material";
import "../Styles/Button.css";
const DemoButton = () => {
  return (
    <div>
      <Button
        className="hover-underline-animation"
        sx={{
          textTransform: "none",
          borderRadius: "10px",
        }}
      >
        <div>Try Demo</div>
      </Button>
    </div>
  );
};

export default DemoButton;
