import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Image } from "react-bootstrap";
import logo from "../assets/logo.png";

const Header = () => {
  const { isAuthenticated } = useAuth0();

  const navbarStyle = {
    background: "none", // Adjust the alpha value for transparency
  };

  const buttonStyle = {
    border: "2px solid black", // Set the button border to black
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
        <div className="container-fluid">
          <a className="navbar-brand text-dark" href="#">
            <Image src={logo} style={{ width: "120px", height: "30px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <div className="d-flex align-items-center gap-2">
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}

              <button
                className="btn btn-outline-dark"
                style={buttonStyle}
                type="submit"
              >
                Tools
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;