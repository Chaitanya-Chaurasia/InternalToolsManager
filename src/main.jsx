import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from "react-dom/client";

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
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
