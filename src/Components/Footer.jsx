import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const footerStyle = {
    background: "none",
    color: "#fff",
    fontSize: "10px",
    borderRadius: "50px", // Adjust the border radius as needed
    width: "550px",
    margin: "20px auto", // Center the footer horizontally
    border: "2px solid #fff", // Optional padding for better appearance
  };

  return (
    <footer style={footerStyle} className="text-center">
      <div className="mt-3">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
