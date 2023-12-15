import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { MyContext } from "../Context/Context.js";

const CookiesBanner = () => {
  const { open, setOpen, setResponse } = useContext(MyContext);

  const handleAccept = () => {
    setResponse("accepted");
    setOpen(false);

    // You can also set a cookie here to remember the user's choice
  };

  const handleDecline = () => {
    setResponse("declined");
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={null}
    >
      <Alert
        severity="info"
        sx={{
          backgroundColor: "rgba(55, 55, 55, 0.2)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <p>
            This website uses cookies by default to enhance your experience.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <Button
              className="hover-underline-animation"
              onClick={handleAccept}
              color="inherit"
              size="small"
            >
              Accept
            </Button>
            <Button
              className="hover-underline-animation"
              onClick={handleDecline}
              color="inherit"
              size="small"
            >
              Decline
            </Button>
          </div>
        </div>
      </Alert>
    </Snackbar>
  );
};

export default CookiesBanner;
