import React from "react";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewPage from "./Pages/ViewPage"; // Replace with your actual component for the view page
import AboutUs from "./Pages/AboutUs.jsx";
import HowToPage from "./Pages/HowToPage.jsx";

const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

// DO NOT UNCOMMENT IF IN PRODUCTION/ONLY FOR DEVELOPMENT
// console.log(domain, clientId);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/view" element={<ViewPage />} />
          {/* View page */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/howto" element={<HowToPage />} />
        </Routes>
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);
