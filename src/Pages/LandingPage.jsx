import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container className="text-center" style={styles.container}>
      <Card className="my-4">
        <Card.Body>
          <Card.Title>Internal Tool Management App</Card.Title>
          <Card.Text>
            Your solution for efficient tool management within your
            organization.
          </Card.Text>
        </Card.Body>
      </Card>

      <section style={styles.features}>
        <h2>Features:</h2>
        <ul>
          <li>
            <strong>Cloud Database:</strong> Connect and store data securely in
            the cloud.
          </li>
          <li>
            <strong>OAuth Authentication:</strong> Log in and view user profiles
            with OAuth support for Google, Facebook, GitHub, and more.
          </li>
          {/* Add more features as needed */}
        </ul>
      </section>

      <section style={styles.cta}>
        <p>Ready to streamline your internal tool management?</p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </section>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: "20px",
  },
  features: {
    marginBottom: "40px",
  },
  cta: {
    marginTop: "20px",
  },
};

export default LandingPage;
