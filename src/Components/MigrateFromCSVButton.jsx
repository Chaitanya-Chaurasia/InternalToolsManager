import React, { useContext } from "react";
import { Button } from "@mui/material";
import { MyContext } from "../Context/Context";

const MigrateFromCSVButton = () => {
  const { setShowModal } = useContext(MyContext);

  const handleMigrateButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Button
        className="hover-underline-animation"
        onClick={handleMigrateButtonClick}
      >
        <div>MIGRATE USER INFO</div>
      </Button>
    </div>
  );
};

export default MigrateFromCSVButton;
