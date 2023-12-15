import React from "react";
import bg from "../assets/bg.jpg";
import LoggedInHeader from "../Components/LoggedInHeader";

const UploadCSVPage = () => {
  const containerStyle = {
    backgroundColor: "#000",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${bg})`,
    height: "100vh",
  };

  return (
    <>
      <div style={containerStyle}>
        <LoggedInHeader />
      </div>
    </>
  );
};

export default UploadCSVPage;
