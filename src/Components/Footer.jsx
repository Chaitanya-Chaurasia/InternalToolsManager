import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(to right, #667eea, #764ba2)",
    color: "#fff",
    fontSize: "10px", // Adjust the font size as needed
    borderTop: "1px solid #fff",
    padding: "20px 0",
  };

  return (
    <footer style={footerStyle} className="text-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <h5>Pricing</h5>
            <p>Explore our pricing plans.</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Reach out to us for support.</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>Stay connected on social media.</p>
          </Col>
        </Row>
      </Container>
      <hr style={{ borderColor: "#fff", margin: "10px 0" }} />
      <div className="mt-3">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
