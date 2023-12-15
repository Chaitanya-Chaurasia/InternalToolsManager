import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../Styles/WelcomeBox.css";

const WelcomeBox = () => {
  const { user } = useAuth0();

  return (
    <div>
      <h3 className="fade-in">Welcome back, {user.name}</h3>
    </div>
  );
};

export default WelcomeBox;
