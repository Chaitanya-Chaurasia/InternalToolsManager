import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs.jsx";
import DemoPage from "./Pages/DemoPage.jsx";

// DO NOT UNCOMMENT IF IN PRODUCTION/ONLY FOR DEVELOPMENT
// console.log(domain, clientId);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* View page */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
