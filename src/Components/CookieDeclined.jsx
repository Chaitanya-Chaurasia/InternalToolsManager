import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import "../Styles/Button.css";
import { MyContext } from "../Context/Context";

const CookieDeclined = () => {
  const { setOpen } = useContext(MyContext);

  const handleAcceptCookies = () => {
    setOpen(true);
  };

  return (
    <Button className="hover-underline-animation" onClick={handleAcceptCookies}>
      <div>Click here to Accept Cookies</div>
    </Button>
  );
};

export default CookieDeclined;
